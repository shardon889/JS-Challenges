import {
  changeColorToRed,
  toggleTimer,
  toggleTimerText,
  editTime,
} from "./toggler.js";
import { getMinute, getSecond } from "./get.js";

let startButton = document.querySelector(".start");
let gear = document.querySelector(".settings");

let timerId;

//tracks click on start/stop
startButton.addEventListener("click", toggleTimer);
//tracks click on gear icon
gear.addEventListener("click", editTime);

//perform actions when time is up
const timeUp = () => {
  clearInterval(timerId);
  changeColorToRed();
  toggleTimerText();
  setTimeout(function () {
    alert("Time's up.");
  }, 1);
};

const reduceTimeEachSecond = () => {
  let minuteField = getMinute();
  let secondTextField = getSecond();
  let seconds = secondTextField.value;
  let minutes = minuteField.value;

  if (seconds == 0) {
    if (minutes > 0) {
      minutes--;
      seconds = "59";
    } //minutes == 0 seconds == 0
    else {
      timeUp();
    }
  } else {
    seconds--;
  }
  if (minutes >= 0 && minutes <= 9) minutes = "0" + (minutes % 10);
  if (seconds >= 0 && seconds <= 9) seconds = "0" + (seconds % 10);
  minuteField.value = minutes;
  secondTextField.value = seconds;
};

//const to perform time reduction every second
const reduceTimer = () => {
  timerId = setInterval(reduceTimeEachSecond, 1000);
};

export { startButton, gear, timerId, timeUp, reduceTimer };
