export function initModal() {

const openBtn = document.querySelector('.product__buy-button');
const closeBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const body = document.body;
const PAGE_BODY_NO_SCROLL = 'page__body--no-scroll';

openBtn.addEventListener('click', () => {
    modal.classList.add('modal--open');
    body.classList.add(PAGE_BODY_NO_SCROLL);
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal--open');
    body.classList.remove(PAGE_BODY_NO_SCROLL);
})}










