console.log("welcome to music");

// initilaize the variables
let songIndex = 0;
let audioElement = new Audio("songs/0.mp3");
let masterplay = document.getElementById("masterplay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Just Relax - lesfm",
    filepath: "songs/0.mp3",
    coverPath: "covers/img1.jpg",
  },
  {
    songName: "Drive Breakbeat - Rockot",
    filepath: "song/1.mp3",
    coverPath: "covers/img2.jpg",
  },
  {
    songName: "Titanium - AlishaMusic",
    filepath: "songs/2.mp3",
    coverPath: "covers/img3.jpg",
  },
  {
    songName: "Baby Mandala - Lexin_Music",
    filepath: "songs/3.mp3",
    coverPath: "covers/img4.jpg",
  },
  {
    songName: "Science Documentary - prazkhanal",
    filepath: "songs/4.mp3",
    coverPath: "covers/img5.jpg",
  },
  {
    songName: "songName - Artist",
    filepath: "songs/0.mp3",
    coverPath: "covers/img1.jpg",
  },
  {
    songName: "songName - Artist",
    filepath: "songs/0.mp3",
    coverPath: "covers/img1.jpg",
  },
  {
    songName: "songName - Artist",
    filepath: "songs/0.mp3",
    coverPath: "covers/img1.jpg",
  },
  {
    songName: "songName - Artist",
    filepath: "songs/0.mp3",
    coverPath: "covers/img1.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// audioElement.play();

// handle play/pause event
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    gif.style.opacity = 1;
    masterplay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
    masterplay.classList.add("fa-play-circle");
  }
})

//progressBar

audioElement.addEventListener("timeupdate", () => {
  // update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressBar.value = progress;
})

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
      if(songIndex == parseInt(e.target.id)){
        if(audioElement.paused){
          audioElement.play()
          console.log('play');
          masterplay.classList.remove("fa-play-circle");
          masterplay.classList.add("fa-pause-circle");
          gif.style.opacity = 1;
          element.classList.remove('fa-play-circle');
          element.classList.add('fa-pause-circle');
        }
        else{
          audioElement.pause();
          console.log('pause');
          masterplay.classList.remove("fa-pause-circle");
          masterplay.classList.add("fa-play-circle");
          gif.style.opacity = 0;
          element.classList.remove('fa-pause-circle');
          element.classList.add('fa-play-circle');
        }
      }
      else{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
      }
    })
})

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=8){
    songIndex = 0;
  }
  else{
    songIndex +=1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
})

document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex = 8;
  }
  else{
    songIndex -=1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
})