let audioelement = new Audio('ishq bawla.mp3');

let masterplay=document.querySelector('#masterplay');
let progressbar=document.querySelector('#volume');
gif=document.querySelector('#gif');
gif.style.opacity=0;
let songitems=Array.from(document.getElementsByClassName('cell'));
let songitemplay=Array.from(document.getElementsByClassName('songitemplay'));
let bottomname=document.querySelector('.bottomname');
let songindex=0;


//list of songs
let songs=[
    {songname:"Knife Brows",filepath:"Knife Brows.mp3",coverpath:"Knife Brows.jpeg",duration:"2:59"},
    {songname:"Mia Cara",filepath:"Mia Cara.mp3",coverpath:"Mia Cara.jpeg",duration:"4:06"},
    {songname:"ISHQ BAWLA",filepath:"ISHQ BAWLA.mp3",coverpath:"ISHQ BAWLA.jpeg",duration:"4:54"},
    {songname:"Not Guilty",filepath:"Not Guilty .mp3",coverpath:"Not Guilty.jpeg",duration:"3:04"},
    {songname:"Tension",filepath:"Tension.mp3",coverpath:"Tension.jpeg",duration:"3:13"},
    {songname:"4 Days",filepath:"4 Days.mp3",coverpath:"4 Days.jpeg",duration:"3:01"},
    {songname:"Paradox",filepath:"Paradox.mp3",coverpath:"Paradox.jpeg",duration:"3:39"},
    {songname:"Nobody Came",filepath:"Nobody Came.mp3",coverpath:"Nobody Came.jpeg",duration:"4:17"},
    {songname:"Rubicon",filepath:"Rubicon.mp3",coverpath:"Rubicon.jpeg",duration:"2:54"}

]


//make all button elements to play
const makeallplay=()=>{
     songitemplay.forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
     })
}


//play song when play button is clicked
songitemplay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
         makeallplay();
        songindex=parseInt(e.target.id);
         audioelement.src=songs[songindex-1].filepath;
        bottomname.innerText=songs[songindex-1].songname;
        
        if(audioelement.paused||audioelement.currentTime<=0){
            
            e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
       audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        }
        else{
            
            audioelement.pause();
              e.target.classList.remove('fa-pause-circle');
                e.target.classList.add('fa-play-circle');
                masterplay.classList.remove('fa-pause-circle');
                masterplay.classList.add('fa-play-circle');
    
            gif.style.opacity=0;
        }
    })
})

//set song name , cover image and duration for each song item
songitems.forEach((element,i)=>{
         element.getElementsByTagName('img')[0].src=songs[i].coverpath;
         element.getElementsByTagName('span')[0].innerText=songs[i].songname;
         element.getElementsByTagName('span')[1].innerText=songs[i].duration;
}
)

//play and pause song when master play button is clicked
masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
            gif.style.opacity=1;
    }
    else{
        makeallplay();
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


//update progress bar as song plays
audioelement.addEventListener('timeupdate',()=>{
    let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value=progress;
})


//seek song when progress bar is changed
progressbar.addEventListener('change',()=>{
    audioelement.currentTime=(progressbar.value*audioelement.duration)/100;
})


//play next song when next button is clicked
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9)
    {
        songindex=1;
    }
    else{
        songindex+=1;
    }
    audioelement.src=songs[songindex-1].filepath;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    bottomname.innerText=songs[songindex-1].songname;
    gif.style.opacity=1;
})


//play previous song when previous button is clicked
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=1)
    {
        songindex=9;
    }
    else{
        songindex-=1;
    }
    audioelement.src=songs[songindex-1].filepath;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    bottomname.innerText=songs[songindex-1].songname;
    gif.style.opacity=1;
})
