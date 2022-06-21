//get aacess to minute text field
const getMinute = () => {
  let minuteDiv = document.querySelector(".minutes");
  let minuteField = minuteDiv.children[0];
  return minuteField;
};

//get access to seconds text field
const getSecond = () => {
  let secondDiv = document.querySelector(".seconds");
  let secondTextField = secondDiv.children[0];
  return secondTextField;
};

//get access to ring
const getRing = () => {
  let ring = document.querySelector("circle");
  return ring;
};

export { getMinute
    , getSecond, getRing };
