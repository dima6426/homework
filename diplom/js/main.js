(() => {
    const header = document.querySelector('.header');
    if (!header) return;

    const toggleHeader = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 0);
    };

    window.addEventListener('scroll', toggleHeader, { passive: true });
    toggleHeader(); // на случай перезагрузки страницы не в самом верху
})();

(() => {
    const modal = document.getElementById('webinar-modal');
    const toast = document.getElementById('toast');
    const form = document.getElementById('webinar-form');

    if (!modal) return;

    let lastActive = null;

    const focusableSelector =
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const getFocusable = () => Array.from(modal.querySelectorAll(focusableSelector));

    const lockScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const unlockScroll = () => {
        document.body.style.overflow = '';
    };

    const openModal = (triggerEl) => {
        lastActive = triggerEl || document.activeElement;

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        lockScroll();

        const focusables = getFocusable();
        (focusables[0] || modal).focus?.();
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        unlockScroll();

        if (lastActive && typeof lastActive.focus === 'function') lastActive.focus();
    };

    const showToast = () => {
        if (!toast) return;

        toast.classList.add('is-show');
        toast.setAttribute('aria-hidden', 'false');

        window.setTimeout(() => {
            toast.classList.remove('is-show');
            toast.setAttribute('aria-hidden', 'true');
        }, 2200);
    };

    // ===== OPEN: hero / fixed vertical button-text / benefits / ai =====
    // Просто добавь data-webinar-open на нужные элементы (кнопки/ссылки/дивы)
    document.addEventListener('click', (e) => {
        const opener = e.target.closest('[data-webinar-open]');
        if (!opener) return;

        e.preventDefault();
        openModal(opener);
    });

    // ===== CLOSE: крестик/кнопки с data-webinar-close + клик по оверлею =====
    document.addEventListener('click', (e) => {
        if (!modal.classList.contains('is-open')) return;

        const closer = e.target.closest('[data-webinar-close]');
        if (closer) {
            e.preventDefault();
            closeModal();
            return;
        }

        // закрытие по клику в "фон" (оверлей) — если кликнули именно в modal
        // (обычно modal = оверлей, а внутри .modal__dialog/.modal__content)
        if (e.target === modal) closeModal();
    });

    // ===== ESC =====
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    // ===== focus trap (Tab внутри модалки) =====
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab' || !modal.classList.contains('is-open')) return;

        const focusables = getFocusable();
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });

    // ===== submit (фронт) =====
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // const data = Object.fromEntries(new FormData(form).entries());
            form.reset();
            closeModal();
            showToast();
        });
    }
})();


// Свитчер -> скролл вниз
document.addEventListener('click', (e) => {
    const heroScroll = e.target.closest('.hero-scroll[data-scroll-target]');
    if (!heroScroll) return;

    e.preventDefault();

    const selector = heroScroll.dataset.scrollTarget;
    if (!selector) return;

    const target = document.querySelector(selector);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


const newsSwiper = new Swiper('.slider-section__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 450,

    // “подсмотр” справа (чуть видна следующая карточка)

    navigation: {
        nextEl: '.slider-section__btn--next',
        prevEl: '.slider-section__btn--prev',
    },

    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 12 },
        576: { slidesPerView: 1.1, spaceBetween: 14 },
        768: { slidesPerView: 2, spaceBetween: 16 },
        992: { slidesPerView: 2.5, spaceBetween: 18 }, // 👈 вот это решает "пустоту"
        1200: { slidesPerView: 'auto', spaceBetween: 20 }
    }
});
const vacancySwiper = new Swiper('.slider-section__slider--vacancy', {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 450,

    // “подсмотр” справа (чуть видна следующая карточка)

    navigation: {
        nextEl: '.slider-section__btn--next-vacancy',
        prevEl: '.slider-section__btn--prev-vacancy',
    },

    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 12 },
        768: { slidesPerView: 2, spaceBetween: 16 },
        1200: { slidesPerView: 3, spaceBetween: 20 }
    }
});

(() => {
    const btn = document.querySelector('.to-top');
    if (!btn) return;

    const toggle = () => {
        const y = window.scrollY;
        const doc = document.documentElement.scrollHeight;
        const vh = window.innerHeight;
        const half = (doc - vh) / 2;

        btn.classList.toggle('is-visible', y > half);
    };

    window.addEventListener('scroll', toggle, { passive: true });
    toggle();

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

