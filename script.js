let audioelement = new Audio('ishq bawla.mp3');

let masterplay=document.querySelector('#masterplay');
let progressbar=document.querySelector('#volume');
gif=document.querySelector('#gif');
gif.style.opacity=0;
let songitems=Array.from(document.getElementsByClassName('cell'));
let songitemplay=Array.from(document.getElementsByClassName('songitemplay'));
let bottomname=document.querySelector('.bottomname');
let songindex=0;

let singer=document.querySelector('.singer');
let description=document.querySelector('.description');


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



const makeallplay=()=>{
     songitemplay.forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
     })
}



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
        makeallplay();
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

singer.innerHTML="Dhanda Nyoliwala's 'Kohram' is a critically acclaimed 2025–2026 album and subsequent massive India tour that redefined Haryanvi hip-hop. The album features gritty, energetic rap, while the tour included packed shows in cities like Delhi and Mumbai. It is widely recognized as a major commercial success in Desi hip-hop.";
description.innerHTML="This is a Spotify clone created by Yug Thakral as a project to learn web development. It is built using HTML, CSS and JavaScript. This is just the start — better projects coming soon 🚀";