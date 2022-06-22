import {addToCart} from './utilities.js';

const addButtons = document.querySelectorAll('.add');

const addListener = () => {
  addButtons.forEach((addButton) => {
    addButton.addEventListener('click', addToCart);
  });
};

addListener();
