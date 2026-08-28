
export function initBurger() {

    const burgerConfig = {
        BURGER: ".burger",
        BURGER_OPEN: "burger--open",
        HEADER_MENU: ".header__menu",
        HEADER_MENU_OPEN: "header__menu--open",
        lABEL: {
            OPEN: "Открыть меню",
            CLOSE: "Закрыть меню",
        },
        PAGE_BODY: ".page__body",
        PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
        MENU_LINK: ".menu__link",
        BREAKPOINT: 768,
        MAIN: "main",
    };
    const burger = document.querySelector(burgerConfig.BURGER);
    const menu = document.querySelector(burgerConfig.HEADER_MENU);
    const link = document.querySelector(burgerConfig.MENU_LINK)
    const page_body = document.querySelector(burgerConfig.PAGE_BODY);



    const openBurgerMenu = () => {
        burger.classList.add(burgerConfig.BURGER_OPEN);
        menu.classList.add(burgerConfig.HEADER_MENU_OPEN);
        page_body.classList.add(burgerConfig.PAGE_BODY_NO_SCROLL);
        burger.setAttribute('aria-expanded', 'true');
        burger.setAttribute('aria-label', burgerConfig.lABEL.CLOSE);
    };

    const closeBurgerMenu = () => {
        burger.classList.remove(burgerConfig.BURGER_OPEN);
        menu.classList.remove(burgerConfig.HEADER_MENU_OPEN);
        page_body.classList.remove(burgerConfig.PAGE_BODY_NO_SCROLL);
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', burgerConfig.lABEL.OPEN);
    };


    const toggleBurger = () => {
        const burgerOpen = burger.classList.contains(burgerConfig.BURGER_OPEN)
        if (burgerOpen) {
            closeBurgerMenu()
        } else {
            openBurgerMenu()
        }
    }

    burger.addEventListener("click", (e) => {
        e.stopPropagation()
        toggleBurger()
    })

    document.addEventListener("click", (e) => {
        const isClickInsideMenu = menu.contains(e.target)
        const isClickInsideBurger = burger.contains(e.target)
        const isClickOnLink = e.target.closest(burgerConfig.MENU_LINK)

        if (isClickOnLink && menu.contains(isClickOnLink)) {
            closeBurgerMenu()
            return
        }
        if (!isClickInsideBurger && !isClickInsideMenu) {
            closeBurgerMenu()
        }
    })


}
