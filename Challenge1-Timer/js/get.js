// get aacess to minute text field
export const getMinute = () => {
    const minuteDiv = document.querySelector('.minutes');
    const minuteField = minuteDiv.children[0];
    return minuteField;
};

// get access to seconds text field
export const getSecond = () => {
    const secondDiv = document.querySelector('.seconds');
    const secondTextField = secondDiv.children[0];
    return secondTextField;
};

// get access to ring
export const getRing = () => {
    const ring = document.querySelector('circle');
    return ring;
};
