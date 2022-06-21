import { addToCart } from "./utilities.js";

let addButtons = document.querySelectorAll(".add");

const addListener = () => {
    
  addButtons.forEach((addButton) => {
    addButton.addEventListener("click", addToCart);
  });
};

addListener();
