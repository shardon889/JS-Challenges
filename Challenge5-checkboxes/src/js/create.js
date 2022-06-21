
const createLabelName = (id) => {
    return "episode-"+id;
};

const createLabel = (labelName) => {
    let itemLabel = document.createElement("label");
    itemLabel.setAttribute("for", labelName);
    return itemLabel;
};

const createInput = (labelName) =>{
    let itemInput = document.createElement("input");
    itemInput.setAttribute("type", "checkbox");
    itemInput.setAttribute("name", labelName);
    itemInput.setAttribute("id", labelName);


    //  itemInput

    return itemInput
};

const createSpan = (itemId, itemName) =>{
    let itemSpan = document.createElement("span");
    let text = document.createTextNode((itemId) +" || " + itemName);
    itemSpan.appendChild(text);

    return itemSpan;
};


export const createList = (episode)=>{
    const itemName = episode.name, itemId = episode.id;
    
    let itemList = document.createElement("li");
    itemList.classList.add('.list')
    let itemInput = createInput(createLabelName(itemId));
    let itemLabel = createLabel(createLabelName(itemId));
    let itemSpan = createSpan(itemId, itemName);

    itemLabel.appendChild(itemInput);
    itemLabel.appendChild(itemSpan);
    itemList.appendChild(itemLabel);
  
    return itemList;
};

