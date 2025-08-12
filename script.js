const songs = [
  { title: "Song 1", src: "song1.mp3" },
  { title: "Song 2", src: "song2.mp3" },
  { title: "Song 3", src: "song3.mp3" },
  { title: "Song 4", src: "song4.mp3" }
];


const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentSongIndex = 0;
let isPlayingsong = false;

function loadSong(index) {
    audio.src = songs[index].src;
    title.textContent = songs[index].title;
} 

function playSong() {
    isPlayingsong = true;
    audio.play();
    playBtn.textContent = "⏸ Pause"
}

function pauseSong() {
    isPlayingsong = false;
    audio.pause();
    playBtn.textContent = "▶ Play";
}

playBtn.addEventListener("click", () => {
    if(isPlayingsong) {
        pauseSong();
    } else {
        playSong();
    }
});

nextBtn.addEventListener("click", () => {
    currentSongIndex++;
    if(currentSongIndex >= songs.length) 
        currentSongIndex = 0;
    loadSong(currentSongIndex);
    playSong();
});

prevBtn.addEventListener("click", () => {
    currentSongIndex--;
    if(currentSongIndex < 0) currentSongIndex = songs.length - 1;
    loadSong(currentSongIndex);
    playSong();
});

loadSong(currentSongIndex);
