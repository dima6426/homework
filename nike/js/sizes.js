export const sizes = () => {
  const sizesWrapper = document.querySelector(".product__sizes-list");
  if (!sizesWrapper) return

  sizesWrapper.addEventListener("click", (e) =>{
    const button = (e.target.closest(".product__sizes-button"))
    if (!button) return

    const allButtons = sizesWrapper.querySelectorAll(".product__sizes-button")
    allButtons.forEach(btn => btn.classList.remove("product__sizes-button--active"))

    button.classList.add("product__sizes-button--active")
  })
  }



