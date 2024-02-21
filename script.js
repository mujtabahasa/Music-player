const music = document.querySelector("audio");
const play = document.getElementById("play");
const image = document.querySelector("img")
const artist = document.getElementById("artist")
const title = document.getElementById("title");
const prev = document.getElementById("prev")
const next = document.getElementById("next")
let isPlaying = false;

let songs = [
    {
        name: "assets/audio/Music1.mp3",
        banner: "assets/images/Music1.jpg",
        title: "LOTUS LANE",
        artist: "The Loyalist"

    },
    {
        name: "assets/audio/Music2.mp3",
        banner: "assets/images/Music2.jpg",
        title: "sapphieros",
        artist: "Aurora"

    },
    {
        name: "assets/audio/Music3.mp3",
        banner: "assets/images/Music3.jpg",
        title: "Walking Firiri",
        artist: "Gorkhal Takma"

    }
]

// for play function
const playMusic = () => {
    isPlaying = true
    music.play()
    play.classList.replace("fa-play", "fa-pause")
    image.classList.add("anime")
}

// for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause()
    play.classList.replace("fa-pause", "fa-play")
    image.classList.remove("anime")
}
play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
})

// Changing the music and data
const loadSongs = (songs) => {
    title.textContent = songs.title
    artist.textContent = songs.artist
    music.src = songs.name
    image.src = songs.banner
}

// for forward btn func
let songIndex = 0;
let nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic()
}

// for prev btn func
let prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic()
}

// farword and prev Eventlistner
next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)