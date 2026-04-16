let audioelement = new Audio('ishq bawla.mp3');
let masterplay=document.querySelector('#masterplay');
let progressbar=document.querySelector('#volume');
gif=document.querySelector('#gif');
gif.style.opacity=0;
let songitems=Array.from(document.getElementsByClassName('cell'));
let songitemplay=Array.from(document.getElementsByClassName('songitemplay'));

let songs=[
    {songname:"Knife Brows",filepath:"Knife Brows.mp3",coverpath:"Knife Brows.jpeg",duration:"2:59"},
    {songname:"Mia Cara",filepath:"Mia Cara.mp3",coverpath:"Mia Cara.jpeg",duration:"4:06"},
    {songname:"ISHQ BAWLA",filepath:"ISHQ BAWLA.mp3",coverpath:"ISHQ BAWLA.jpeg",duration:"4:54"},
    {songname:"Not Guilty",filepath:"Not Guilty .mp3",coverpath:"Not Guilty.jpeg",duration:"3:04"},
    {songname:"Tension",filepath:"Tension.mp3",coverpath:"Tension.jpeg",duration:"3:13"},
    {songname:"4 Days",filepath:"4 Days.mp3",coverpath:"4 Days.jpeg",duration:"3:01"},
    {songname:"Paradox",filepath:"Paradox.mp3",coverpath:"Paradox.jpeg",duration:"3:39"}

]
const makeallplay=()=>{
     songitemplay.forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
     })
}
songitemplay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
})
songitems.forEach((element,i)=>{
         element.getElementsByTagName('img')[0].src=songs[i].coverpath;
         element.getElementsByTagName('span')[0].innerText=songs[i].songname;
         element.getElementsByTagName('span')[1].innerText=songs[i].duration;
}
)
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
