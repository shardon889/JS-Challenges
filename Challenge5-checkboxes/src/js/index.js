// eslint-disable-next-line object-curly-spacing
import {episodes} from './list.js';
// eslint-disable-next-line object-curly-spacing
import {createList} from './create.js';

// selected the ui element on-screen
const uiItems = document.querySelector('.episodes');

const onload = () => {
    episodes.forEach((item) => {
        uiItems.appendChild(createList(item));
    });
};

onload();

// getting all checkboxes on-screen
const displayedItems = document.querySelectorAll('input');

let lastSelected;

// adding event listener on the checkboxes
displayedItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        const shiftKeyPressed = e.shiftKey;

        // if shiftkey was pressed and lastkey pressed is defined
        if (lastSelected && shiftKeyPressed) {
            checkAll(lastSelected, e.target);
        }

        // updating the last selected
        lastSelected = e.target;
        if (!lastSelected.checked) lastSelected = undefined;
    });
});

const checkAll = (lastSelected, currentSelected) => {
    const lastNode = lastSelected;
    const currentNode = currentSelected;

    let start = Array.prototype.indexOf.call(displayedItems, lastNode);
    let end = Array.prototype.indexOf.call(displayedItems, currentNode);
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }

    // checking all the checkboxes between the lastselected and currentselected
    while (start < end) {
        displayedItems[start].checked = true;
        start++;
    }
};
