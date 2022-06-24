import {isEditing, checkValidTime, isActive} from './check.js';
import {getMinute, getSecond, getRing} from './get.js';
import {startButton, timerId, reduceTimer} from './index.js';

// toggle state when start/stop is clicked
export const toggleTimer = () => {
    if (isEditing()) {
        setTimeEditDisabled();
    }

    if (isActive()) {
        stopTimer();
    } else {
        startTimer();
    }
};

export const startTimer = () => {
    toggleTimerText();
    reduceTimer();
};

export const stopTimer = () => {
    // set the timer running state to not running
    // stop the interval
    // change the start/stop button text.
    clearInterval(timerId);
    toggleTimerText();
    changeColorToGreen();
};

// changing stop to start and vice-versa
export const toggleTimerText = () => {
    startButton.innerHTML =
        startButton.innerHTML === 'start' ? 'stop' : 'start';
};

// changing ring colour to red when timer runs out.
export const changeColorToRed = () => {
    const ring = getRing();
    ring.style.stroke = '#900A0A';
};

// changing timer colour to green when timer runs.
export const changeColorToGreen = () => {
    const ring = getRing();
    ring.style.stroke = '#09A65A';
};

// disable time editing
export const setTimeEditDisabled = () => {
    // get minute and second field and set there disabled property as true
    const minuteField = getMinute();
    const secondTextField = getSecond();

    // if time not valid
    if (!checkValidTime()) resetTime();

    minuteField.disabled = true;
    secondTextField.disabled = true;
};

// enable time editing
export const setTimeEditEnabled = () => {
    // get minute and second field and set there disabled property as false
    const minuteField = getMinute();
    const secondTextField = getSecond();
    minuteField.disabled = false;
    secondTextField.disabled = false;
};

// edit time
export const editTime = () => {
    if (isActive()) {
        stopTimer();
    }
    // if timer is not running check if timer is already in editing state.
    if (isEditing()) {
        if (checkValidTime()) setTimeEditDisabled();
        else alert('Oops! Time Invalid');
        // eslint-disable-next-line brace-style
    }
    // it time is not being edited allow it to be edited
    else {
        setTimeEditEnabled();
    }
};

const resetTime = () => {
    const minuteField = getMinute();
    const secondTextField = getSecond();

    minuteField.value = '15';
    secondTextField.value = '00';
};
