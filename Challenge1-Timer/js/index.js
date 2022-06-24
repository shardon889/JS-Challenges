import {
    changeColorToRed,
    toggleTimer,
    toggleTimerText,
    editTime,
} from './toggler.js';
import {getMinute, getSecond} from './get.js';

const startButton = document.querySelector('.start');
const gear = document.querySelector('.settings');

let timerId;

// tracks click on start/stop
startButton.addEventListener('click', toggleTimer);
// tracks click on gear icon
gear.addEventListener('click', editTime);

// perform actions when time is up
const timeUp = () => {
    clearInterval(timerId);
    changeColorToRed();
    toggleTimerText();
    // eslint-disable-next-line space-before-function-paren
    setTimeout(function () {
        // eslint-disable-next-line quotes
        alert("Time's up.");
    }, 1);
};

const reduceTimeEachSecond = () => {
    const minuteField = getMinute();
    const secondTextField = getSecond();
    let seconds = secondTextField.value;
    let minutes = minuteField.value;

    if (seconds == 0) {
        if (minutes > 0) {
            minutes--;
            seconds = '59';
            // eslint-disable-next-line brace-style
        } // minutes == 0 seconds == 0
        else {
            timeUp();
        }
    } else {
        seconds--;
    }

    minuteField.value = check(minutes);
    secondTextField.value = check(seconds);
};

// const to perform time reduction every second
const reduceTimer = () => {
    timerId = setInterval(reduceTimeEachSecond, 1000);
};

const check = (value) => {
    if (value >= 0 && value <= 9) value = '0' + (value % 10);
    return value;
};
export {startButton, gear, timerId, timeUp, reduceTimer};
