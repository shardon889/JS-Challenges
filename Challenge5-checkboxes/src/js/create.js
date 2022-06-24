const createLabelName = (id) => {
    return 'episode-' + id;
};

const createLabel = (labelName) => {
    const itemLabel = document.createElement('label');
    itemLabel.setAttribute('for', labelName);
    return itemLabel;
};

const createInput = (labelName) => {
    const itemInput = document.createElement('input');
    itemInput.setAttribute('type', 'checkbox');
    itemInput.setAttribute('name', labelName);
    itemInput.setAttribute('id', labelName);

    //  itemInput

    return itemInput;
};

const createSpan = (itemId, itemName) => {
    const itemSpan = document.createElement('span');
    const text = document.createTextNode(itemId + ' || ' + itemName);
    itemSpan.appendChild(text);

    return itemSpan;
};

export const createList = (episode) => {
    const itemName = episode.name;
    const itemId = episode.id;

    const itemList = document.createElement('li');
    itemList.classList.add('.list');
    const itemInput = createInput(createLabelName(itemId));
    const itemLabel = createLabel(createLabelName(itemId));
    const itemSpan = createSpan(itemId, itemName);

    itemLabel.appendChild(itemInput);
    itemLabel.appendChild(itemSpan);
    itemList.appendChild(itemLabel);

    return itemList;
};
