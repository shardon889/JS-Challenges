import { getMinute, getSecond } from "./get.js";
import { startButton } from "./script.js";

//check if the input is an integer
const isInteger = (number) => {
  //check if it is a number and does not contain decimal
  if (!Number.isNaN(number) && number.indexOf(".") < 0) return true;
  return false;
};

//check is the given time is between 0 and 59
const isTimeinRange = (time) => {
  if (time <= 59 && time >= 0) return true;
};

//check if time is currently in editing state
const isEditing = () => {
  //check if seconds text field is currenty is editing state
  //if yes return true
  //else return false
  let secondTextField = getSecond();
  return !secondTextField.disabled ? true : false;
};

//check if entered time value is valid
const checkValidTime = () => {
  //get minute and seconds value
  let minutes = getMinute().value;
  let seconds = getSecond().value;
  //minutes and seconds should be between 59 and 0
  //also it should be an integer, no decimal values allowed
  if (isInteger(minutes) && isInteger(seconds))
    if (isTimeinRange(minutes) && isTimeinRange(seconds)) return true;
  return false;
};

//Check if timer is running
const isActive = () => {
  //if start button text is stop timer is running
  //return true
  //otherwise return false
  if (startButton.innerHTML === "stop") return true;
  return false;
};

export { isEditing, checkValidTime, isActive };
