export function initSizes() {
    const sizesList = document.querySelector('[data-sizes="list"]');

    const sizeButtons = document.querySelectorAll('[data-sizes="button"]');

    sizesList.addEventListener('click', (e) => {
        const button = e.target.closest('[data-sizes="button"]');
        if (!button) return;

        sizeButtons.forEach((btn) => {
            btn.classList.remove('product__sizes-button--active');
        });

        button.classList.add('product__sizes-button--active');
    });
}


