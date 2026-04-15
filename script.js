let audioelement = new Audio('ishq bawla.mp3');
let masterplay=document.querySelector('#masterplay');
let progressbar=document.querySelector('#volume');
gif=document.querySelector('#gif');
gif.style.opacity=0;
masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
            gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioelement.addEventListener('timeupdate',()=>{
    let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioelement.currentTime=(progressbar.value*audioelement.duration)/100;
})