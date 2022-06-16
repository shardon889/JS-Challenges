document.querySelectorAll('a').forEach((element, index) => {
    element.addEventListener('click', ()=>{ playAudio(`./audio/key-${index+1}.mp3`);});
})



function playAudio(path){
    let audio = new Audio(path);
    audio.loop = false;
    audio.play();
}


