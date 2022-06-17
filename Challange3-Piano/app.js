document.querySelectorAll('a').forEach((element, index) => {
    element.addEventListener('click', ()=>{ playAudio(`./audio/key-${index+1}.mp3`);});
})



const playAudio = (path) => {
    let audio = new Audio(path);
    audio.loop = false;
    audio.play();
}


