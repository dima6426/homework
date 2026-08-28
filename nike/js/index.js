import {initHeaderFixed} from "./header.js";
import { initBurger } from "./burger.js";
import { productSlider } from "./product-slider.js";
import { sizes } from "./sizes.js";

try {

  initBurger()
  initHeaderFixed()

  productSlider();
  sizes();
} catch (error) {
  console.error(error);
}
