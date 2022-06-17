import {
  isEditing,
  checkValidTime,
  isActive,
} from "./check.js";
import { getMinute, getSecond, getRing } from "./get.js";
import { startButton, timerId, reduceTimer } from "./script.js";



//toggle state when start/stop is clicked
const toggleTimer = () => {
  //if time being edited
  if (isEditing()) {
    alert("Finish editing");
  }

  //if timer running
  else if (isActive()) {
    stopTimer();
  }

  //all set
  else 
  startTimer();
};

//starts the timer
const startTimer = () => {
  //put the timer in running state

  changeColorToRed();
  toggleTimerText();
  reduceTimer();
};

const stopTimer = () => {
  //set the timer running state to not running
  //stop the interval
  //change the start/stop button text.
  clearInterval(timerId);
  toggleTimerText();
  changeColorToGreen();
};

//changing stop to start and vice-versa
const toggleTimerText = () => {
  startButton.innerHTML = startButton.innerHTML === "start" ? "stop" : "start";
};

//changing ring colour to red when timer runs out.
const changeColorToRed = () => {
  let ring = getRing();
  ring.style.stroke = "#900A0A";
};

//changing timer colour to green when timer runs.
const changeColorToGreen = () => {
  let ring = getRing();
  ring.style.stroke = "#09A65A";
};

//disable time editing
const setTimeEditDisabled = () => {
  //get minute and second field and set there disabled property as true
  let minuteField = getMinute();
  let secondTextField = getSecond();
  minuteField.disabled = true;
  secondTextField.disabled = true;
};

//enable time editing
const setTimeEditEnabled = () => {
  //get minute and second field and set there disabled property as false
  let minuteField = getMinute();
  let secondTextField = getSecond();
  minuteField.disabled = false;
  secondTextField.disabled = false;
};

//edit time
const editTime = () => {
  //check is timer is currently running.
  if (isActive()) {
    alert("Stop the timer first to edit the time.");
  }
  //if timer is not running check if timer is already in editing state.
  else if (isEditing()) {
    //if entered time is in valid format disable editing
    //else display alert message
    if (checkValidTime()) setTimeEditDisabled();
    else alert("Oops! Time Invalid");
  }
  //it time is not being edited allow it to be edited
  else {
    setTimeEditEnabled();
  }
};

export {
  changeColorToRed,
  changeColorToGreen,
  startTimer,
  stopTimer,
  toggleTimer,
  toggleTimerText,
  setTimeEditDisabled,
  setTimeEditEnabled,
  editTime,
};
