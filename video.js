const playButton = document.getElementById('play-toggle');
const video = document.getElementById('food-video');
const mainImg = document.querySelector('.main-img');
const playDiv = document.querySelector('.play');

let isPlaying = false;

function showVideo() {
  mainImg.classList.add('hide');
  playDiv.classList.add('hide');
  video.style.display = 'block';
  video.play();
  isPlaying = true;
}

function hideVideo() {
  video.pause();
  video.currentTime = 0;
  video.style.display = 'none';
  mainImg.classList.remove('hide');
  playDiv.classList.remove('hide');
  isPlaying = false;
}

playButton.addEventListener('click', () => {
  if (!isPlaying) {
    showVideo();
  } else {
    hideVideo();
  }
});

video.addEventListener('click', hideVideo);

