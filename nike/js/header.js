export function initHeaderFixed(){


const headerFixed = {
  HEADER: "header",
  HEADER_FIXED: "header--fixed",
}

const header = document.querySelector(headerFixed.HEADER)

const checkScroll = () =>{
  if(window.scrollY > 50){
    header.classList.add(headerFixed.HEADER_FIXED)
  }else{
    header.classList.remove(headerFixed.HEADER_FIXED)
  }
}

checkScroll()

window.addEventListener("scroll" , checkScroll)

}