const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => {
    sidebar.style.left = '0';
});

menuClose.addEventListener('click', () => {
    sidebar.style.left = '-100%';
});

document.querySelectorAll('.play-button').forEach(button => {
    let songAudio = null;
    let isPlaying = false;

    button.addEventListener('click', function () {
        const songId = this.id.replace('play-button-', '');
        const songSrc = this.getAttribute('data-src');
        const songImage = document.querySelector(`#song-image-${songId}`);

        if (!songAudio) {
            songAudio = new Audio(songSrc);
        }

        if (isPlaying) {
            songAudio.pause();
            this.classList.remove('bx-pause-circle');
            this.classList.add('bxs-right-arrow');
            isPlaying = false;
        } else {
            songAudio.play();
            this.classList.remove('bxs-right-arrow');
            this.classList.add('bx-pause-circle');
            isPlaying = true;
        }
    });
});

const playVideoButton = document.getElementById('play-button-video');
const songImage = document.getElementById('song-image');
const songVideo = document.getElementById('song-video');

playVideoButton.addEventListener('click', function () {
    this.classList.remove('bxs-right-arrow');
    this.classList.add('bx-pause-circle');

    songImage.classList.add('hidden');
    songVideo.classList.remove('hidden');

    songVideo.play();

    songVideo.onended = function () {
        playVideoButton.classList.remove('bx-pause-circle');
        playVideoButton.classList.add('bxs-right-arrow');
        songImage.classList.remove('hidden');
        songVideo.classList.add('hidden');
    };
});

const playButtonTrend = document.getElementById("play-button-trend");
const audioTrend = document.getElementById("audio-trend");

playButtonTrend.addEventListener("click", function () {
    if (audioTrend.paused) {
        audioTrend.play();
        playButtonTrend.textContent = "Pausar";
    } else {
        audioTrend.pause();
        playButtonTrend.textContent = "Ouça agora";
    }
});

