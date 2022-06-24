const keyArray = document.querySelectorAll('button');

// getting the arraySize
const getSize = () => {
    return keyArray.length;
};

// get a random key to jiggle a key at that index
const getRandomKey = () => {
    return keyArray[Math.floor(Math.random() * getSize())];
};

const randomJiggle = () => {
    stopJiggle(currentJiggling);
    startJiggling(getRandomKey());
};

let currentJiggling;

const startJiggling = (key) => {
    currentJiggling = key;
    key.classList.add('jiggle');
};

const stopJiggle = (key) => {
    key.classList.remove('jiggle');
};

// records the key which is pressed
document.onkeyup = (event) => {
    if (event.key.toUpperCase() === currentJiggling.getAttribute('data-key')) {
        randomJiggle();
    }
};

startJiggling(getRandomKey());
