export function initBurger() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#header__menu');
    const BURGER_OPEN = 'burger--open';
    const HEADER_MENU_OPEN = 'header__menu--open';
    const PAGE_BODY_NO_SCROLL = 'page__body--no-scroll';


    const openMenu = () => {
        burger.classList.add(BURGER_OPEN)
        menu.classList.add(HEADER_MENU_OPEN)
        document.body.classList.add(PAGE_BODY_NO_SCROLL)
        burger.setAttribute('aria-expanded', 'true');
    }

    const closeMenu = () => {
        burger.classList.remove(BURGER_OPEN)
        menu.classList.remove(HEADER_MENU_OPEN)
        document.body.classList.remove(PAGE_BODY_NO_SCROLL)
        burger.setAttribute('aria-expanded', 'false');
    }

    const isMenuOpen = () => burger.classList.contains(BURGER_OPEN);

    burger.addEventListener("click", () => isMenuOpen() ? closeMenu() : openMenu())


    document.addEventListener("click", (e) => {
        if (!isMenuOpen()) return;

        const clickInsideNav = menu.contains(e.target);
        const clickOnBurger = burger.contains(e.target);
        if (!clickInsideNav && !clickOnBurger) {
            closeMenu();
        }

    })

    menu.addEventListener("click", (e) => {
        const link = e.target.closest('a')
        if (link || e.target === menu) {
            closeMenu();
        }


    })};
