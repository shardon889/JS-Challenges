import {decreaseQuantity, increaseQuantity} from './utilities.js';

const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0,
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0,
    },
    {
        name: 'Spaghetti with Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0,
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0,
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0,
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0,
    },
];

export const getMenuNode = (e) => {
    const menuItem = e.target.parentNode.parentNode;
    return menuItem;
};

export const getItemDetail = (itemName) => {
    let selectedItemDetail = false;
    menuItems.forEach((item) => {
        if (item.name === itemName) {
            selectedItemDetail = item;
        }
    });
    return selectedItemDetail;
};

export const getCartDiv = (menuItemDetail) => {
    const list = document.createElement('li');
    const plateDiv = getPlateDiv(menuItemDetail);

    const contentDiv = getContentDiv(menuItemDetail);

    const quantityWrapperDiv = getQuantityWrapperDiv(menuItemDetail);
    list.appendChild(plateDiv);
    list.appendChild(contentDiv);
    list.appendChild(quantityWrapperDiv);
    return list;
};

const getPlateDiv = (menuItemDetail) => {
    const plateDiv = document.createElement('div');
    plateDiv.classList.add('plate');

    const dishImage = document.createElement('img');
    dishImage.src = 'images/' + menuItemDetail.image;

    const plateQuantityDiv = document.createElement('div');
    plateQuantityDiv.classList.add('quantity');

    plateQuantityDiv.appendChild(
        document.createTextNode(`${menuItemDetail.count + 1}`),
    );

    plateDiv.appendChild(dishImage);
    plateDiv.appendChild(plateQuantityDiv);

    return plateDiv;
};

const getContentDiv = (menuItemDetail) => {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const menuItemNode = document.createElement('p');
    menuItemNode.classList.add('menu-item');
    menuItemNode.appendChild(document.createTextNode(`${menuItemDetail.name}`));

    const priceNode = document.createElement('p');
    priceNode.classList.add('price');
    priceNode.appendChild(
        document.createTextNode('$' + `${menuItemDetail.price / 100}`),
    );

    contentDiv.appendChild(menuItemNode);
    contentDiv.appendChild(priceNode);

    return contentDiv;
};

export const getQuantityWrapperDiv = (menuItemDetail) => {
    const quantityWrapperDiv = document.createElement('div');
    quantityWrapperDiv.classList.add('quantity__wrapper');

    const decreaseBtn = decreaseButton();
    decreaseBtn.onclick = decreaseQuantity;

    const quantityDiv = document.createElement('div');
    quantityDiv.classList.add('quantity');

    quantityDiv.appendChild(
        document.createTextNode(`${menuItemDetail.count + 1}`),
    );

    const increaseBtn = increaseButton();
    increaseBtn.onclick = increaseQuantity;

    const subtotalDiv = document.createElement('div');
    subtotalDiv.classList.add('subtotal');

    subtotalDiv.appendChild(
        document.createTextNode('$ ' + `${menuItemDetail.price / 100}`),
    );

    quantityWrapperDiv.appendChild(decreaseBtn);
    quantityWrapperDiv.appendChild(quantityDiv);
    quantityWrapperDiv.appendChild(increaseBtn);
    quantityWrapperDiv.appendChild(subtotalDiv);
    return quantityWrapperDiv;
};

const decreaseButton = () => {
    const decreaseBtn = document.createElement('button');
    decreaseBtn.classList.add('decrease');

    const decreaseImg = document.createElement('img');
    decreaseImg.src = 'images/chevron.svg';
    decreaseBtn.appendChild(decreaseImg);

    return decreaseBtn;
};

const increaseButton = () => {
    const increaseBtn = document.createElement('button');
    increaseBtn.classList.add('increase');

    const increaseImg = document.createElement('img');
    increaseImg.src = 'images/chevron.svg';
    increaseBtn.appendChild(increaseImg);

    return increaseBtn;
};

export const getParentDiv = (event) => {
    let parentDivBtn = event.target.parentNode.parentNode;
    if (parentDivBtn.nodeName === 'DIV') parentDivBtn = parentDivBtn.parentNode;

    return parentDivBtn;
};

export const getItemPrice = (cartItemDiv) => {
    const itmPriceNode = cartItemDiv.querySelector('.price');

    const itmPrice = parseFloat(itmPriceNode.textContent.slice(1));
    return itmPrice;
};

export const getAddCartButton = () => {
    const addCart = document.createElement('button');
    addCart.classList.add('add');
    addCart.appendChild(document.createTextNode('Add to Cart'));

    return addCart;
};

export const getMenuItemToChange = (menuItemList, itemToRemove) => {
    let targetNode = false;
    menuItemList.forEach((menuItem) => {
        const itemName = menuItem.querySelector('.menu-item').textContent;
        if (itemName === itemToRemove) {
            targetNode = menuItem;
        }
    });
    return targetNode;
};
