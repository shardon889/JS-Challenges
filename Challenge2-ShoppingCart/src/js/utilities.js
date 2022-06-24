import {
    getItemDetail,
    getParentDiv,
    getMenuNode,
    getCartDiv,
    getItemPrice,
    getMenuItemToChange,
    getAddCartButton,
} from './get.js';

export const addToCart = (event) => {
    const selectedMenuNode = getMenuNode(event);
    const menuItemName =
        selectedMenuNode.querySelector('.menu-item').textContent;
    const itemDetail = getItemDetail(menuItemName);
    const itemtoBeAdded = getCartDiv(itemDetail);

    const cartDiv = document.querySelectorAll('.cart-summary')[0];

    changeAddToCartToInCart(selectedMenuNode);
    changeSubTotal(itemtoBeAdded, 'increase');

    // displaying message when cart empty
    document.querySelector('.empty').style.display = 'none';

    cartDiv.appendChild(itemtoBeAdded);
};

export const decreaseQuantity = (e) => {
    const parentDiv = getParentDiv(e);
    const qtyInCartNode = parentDiv.querySelectorAll('.quantity');

    const quantityInCart = parseInt(qtyInCartNode[0].textContent);
    changeSubTotal(parentDiv, 'decrease');
    if (quantityInCart === 1) {
        removeItemFromCart(parentDiv);
        return;
    }
    changeCartItemTotal(quantityInCart - 1, parentDiv);
    qtyInCartNode[0].textContent = quantityInCart - 1;
    qtyInCartNode[1].textContent = quantityInCart - 1;
};

export const increaseQuantity = (e) => {
    const parentDiv = getParentDiv(e);
    const quantityInCartNode = parentDiv.querySelectorAll('.quantity');
    const quantityInCart = parseInt(quantityInCartNode[0].textContent);
    changeCartItemTotal(quantityInCart + 1, parentDiv);
    changeSubTotal(parentDiv, 'increase');
    quantityInCartNode[0].textContent = quantityInCart + 1;
    quantityInCartNode[1].textContent = quantityInCart + 1;
};

export const changeSubTotal = (cartItemDiv, change) => {
    const cartItemPrice = getItemPrice(cartItemDiv);

    const totalDiv = document.querySelector('.totals');
    const subtotalDiv = totalDiv.querySelector('.subtotal');
    let subtotal = parseFloat(subtotalDiv.textContent.slice(1));

    const taxNode = totalDiv.querySelector('.tax');
    const totalNode = totalDiv.querySelectorAll('.total')[1];

    if (change == 'increase') {
        subtotal = subtotal + cartItemPrice;
    } else {
        subtotal = subtotal - cartItemPrice;
    }

    subtotal = subtotal.toFixed(2);
    const tax = subtotal * 0.095;
    const total = (parseFloat(subtotal) + tax).toFixed(2);

    //  displaying the empty cart message
    if (total == 0) {
        document.querySelector('.empty').style.display = 'block';
    }

    taxNode.textContent = '$' + tax.toFixed(2);
    subtotalDiv.textContent = '$' + subtotal;
    totalNode.textContent = '$' + total;
};

const removeItemFromCart = (parentDiv) => {
    const cartSummary = document.querySelector('.cart-summary');
    cartSummary.removeChild(parentDiv);
    addEventListenerButton(parentDiv);
};

const addEventListenerButton = (parentDiv) => {
    const itemNameToRemove = parentDiv.querySelector('.menu-item').textContent;
    const menuItemDiv = document.querySelector('.menu');
    const menuItemList = menuItemDiv.querySelectorAll('.content');

    const menuItemToChangeNode = getMenuItemToChange(
        menuItemList,
        itemNameToRemove,
    );

    const addCartButton = getAddCartButton();
    addCartButton.addEventListener('click', addToCart);

    const inCartBtn = menuItemToChangeNode.querySelector('.in-cart');

    menuItemToChangeNode.removeChild(inCartBtn);
    menuItemToChangeNode.appendChild(addCartButton);
};

export const changeAddToCartToInCart = (menuItemNode) => {
    const addToCartButton = menuItemNode.querySelector('.add');
    addToCartButton.innerHTML = '';

    const img = document.createElement('img');
    img.src = 'images/check.svg';

    addToCartButton.appendChild(img);
    addToCartButton.classList.remove('add');
    addToCartButton.classList.add('in-cart');
    addToCartButton.appendChild(document.createTextNode('In Cart'));
    addToCartButton.removeEventListener('click', addToCart);
};

export const removeEmptyCartMessage = () => {
    const emptyCartNode = document.querySelector('.empty');

    emptyCartNode.style.display = 'none';
};

const changeCartItemTotal = (quantityInCart, cartDiv) => {
    const itemPrice = getItemPrice(cartDiv);
    const totalNode = cartDiv.querySelector('.subtotal');
    const total = (quantityInCart * itemPrice).toFixed(2);
    totalNode.textContent = '$ ' + total;
};
