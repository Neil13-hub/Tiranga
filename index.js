let audioElement = new Audio('vm.mp3');
document.querySelector('.btn').addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }else{
        audioElement.pause();
    }
})