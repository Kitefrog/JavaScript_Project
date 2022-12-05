const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('music');
music.play();
musicBtn.addEventListener('click', () => {
    if (musicBtn.textContent == "STOP") {
        music.pause();
        music.currentTime = 0;
        musicBtn.textContent = "PLAY";
    } else {
        musicBtn.textContent = "STOP";
        music.play();
    }
});