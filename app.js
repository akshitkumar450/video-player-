let video = document.querySelector('#video')
let play = document.querySelector('#play')
let stop = document.querySelector('#stop')
let time = document.querySelector('#time')
let progress = document.querySelector('#progress')

function togglevideo() {
    if (video.paused) {
        video.play()
    } else {
        video.pause();
    }
}

function updateplayicon() {
    if (video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>'
    }
}

function stopvideo() {
    video.currentTime = 0;
    video.pause();
}

function setprogress() {
    progress.value = (video.currentTime / video.duration) * 100;
    let min = Math.floor(video.currentTime / 60);
    if (min < 10) {
        min = '0' + String(min);
    }
    let secs = Math.floor(video.currentTime % 60);
    if (secs< 10) {
        secs = '0' + String(secs);
    }
    time.innerHTML=`${min}:${secs}`
}

function changeprogress() {
    video.currentTime = (+progress.value * video.duration) / 100
}

video.addEventListener('click', togglevideo)
play.addEventListener('click', togglevideo)
video.addEventListener('timeupdate', setprogress)
play.addEventListener('click', updateplayicon)
stop.addEventListener('click', stopvideo)
progress.addEventListener('change', changeprogress)
