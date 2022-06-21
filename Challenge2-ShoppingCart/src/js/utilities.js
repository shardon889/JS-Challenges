import {
     getItemDetail, 
     getParentDiv,
     getMenuNode,
     getCartDiv,
     getItemPrice,
     getMenuItemToChange,
     getAddCartButton,
    } from "./get.js";

export const addToCart = (event) => {
  let selectedMenuNode = getMenuNode(event);
  let menuItemName = selectedMenuNode.querySelector(".menu-item").textContent;
  let itemDetail = getItemDetail(menuItemName);
  let itemtoBeAdded = getCartDiv(itemDetail);

  let cartDiv = document.querySelectorAll(".cart-summary")[0];

  changeAddToCartToInCart(selectedMenuNode);
  changeSubTotal(itemtoBeAdded, "increase");

    //displaying message when cart empty    
    document.querySelector(".empty").style.display = "none";



  cartDiv.appendChild(itemtoBeAdded);
};

export const decreaseQuantity = (e) => {
  let parentDiv = getParentDiv(e);
  let qtyInCartNode = parentDiv.querySelectorAll(".quantity");

  let quantityInCart = parseInt(qtyInCartNode[0].textContent);
  changeSubTotal(parentDiv, "decrease");
  if (quantityInCart === 1) {
    removeItemFromCart(parentDiv);
    return;
  }
  changeCartItemTotal(quantityInCart-1, parentDiv);
  qtyInCartNode[0].textContent = quantityInCart - 1;
  qtyInCartNode[1].textContent = quantityInCart - 1;
};

export const increaseQuantity = (e) => {

    let parentDiv = getParentDiv(e);
    let quantityInCartNode = parentDiv.querySelectorAll(".quantity");
    let quantityInCart = parseInt(quantityInCartNode[0].textContent);
    changeCartItemTotal(quantityInCart+1, parentDiv);
    changeSubTotal(parentDiv, "increase");
    quantityInCartNode[0].textContent = quantityInCart + 1;
    quantityInCartNode[1].textContent = quantityInCart + 1;
};

export const changeSubTotal = (cartItemDiv, change) => {
  let cartItemPrice = getItemPrice(cartItemDiv);
    
  let totalDiv = document.querySelector(".totals");
  let subtotalDiv = totalDiv.querySelector(".subtotal");
  let subtotal = parseFloat(subtotalDiv.textContent.slice(1));

  let taxNode = totalDiv.querySelector(".tax");
  let totalNode = totalDiv.querySelectorAll(".total")[1];

  if (change == "increase") {
    subtotal = subtotal + cartItemPrice;
  } else {
    subtotal = subtotal - cartItemPrice;
  }

  subtotal = subtotal.toFixed(2);
  let tax = subtotal * 0.095;
  let total = (parseFloat(subtotal) + tax).toFixed(2);

  //displaying the empty cart message
  if (total == 0) {
    document.querySelector(".empty").style.display = "block";
  }

  taxNode.textContent = "$" + tax.toFixed(2);
  subtotalDiv.textContent = "$" + subtotal;
  totalNode.textContent = "$" + total;
};

function removeItemFromCart(parentDiv) {
  let cartSummary = document.querySelector(".cart-summary");
  cartSummary.removeChild(parentDiv);
  addEventListenerButton(parentDiv);
};

function addEventListenerButton(parentDiv) {
  let itemNameToRemove = parentDiv.querySelector(".menu-item").textContent;
  let menuItemDiv = document.querySelector(".menu");
  let menuItemList = menuItemDiv.querySelectorAll(".content");

  let menuItemToChangeNode = getMenuItemToChange(
    menuItemList,
    itemNameToRemove
  );

  let addCartButton = getAddCartButton();
  addCartButton.addEventListener("click", addToCart);

  let inCartBtn = menuItemToChangeNode.querySelector(".in-cart");

  menuItemToChangeNode.removeChild(inCartBtn);
  menuItemToChangeNode.appendChild(addCartButton);
}


export const changeAddToCartToInCart = (menuItemNode) => {

    let addToCartButton = menuItemNode.querySelector(".add");
    addToCartButton.innerHTML = "";

    let img = document.createElement("img");
    img.src = "images/check.svg";
     
    addToCartButton.appendChild(img);
    addToCartButton.classList.remove("add");
    addToCartButton.classList.add("in-cart");
    addToCartButton.appendChild(document.createTextNode("In Cart"));
    addToCartButton.removeEventListener("click", addToCart);
}

export const removeEmptyCartMessage = () => {
    let emptyCartNode = document.querySelector(".empty");
    
    emptyCartNode.style.display = "none";
};


const changeCartItemTotal = (quantityInCart, cartDiv) => {

    let itemPrice = getItemPrice(cartDiv);
    let totalNode = cartDiv.querySelector(".subtotal");
    let total = (quantityInCart * itemPrice).toFixed(2);
    totalNode.textContent = "$ "+total;
};