(()=> {

  const playButtons = document.querySelectorAll('.playButton'),
  pauseButtons = document.querySelectorAll('.pauseButton'),
  rwButtons = document.querySelectorAll('.rewindButton'),
        audioElement = document.querySelector('audio');

let globalPaused = false;

function playTrack() {
  //debugger;
  if (globalPaused) {
    console.log('paused');
    resumeTrack();
    return;

  }

  let audioSource = this.dataset.trackref;
  audioElement.src = `audio/${audioSource}.mp3`;

  audioElement.load();
audioElement.play();
  }

function resumeTrack() {
  globalPaused = false;
  audioElement.play();
}

function pauseTrack() {
  audioElement.pause();
  globalPaused = true;
}

function rewindTrack() {
audioElement.currentTime = 0;
}

playButtons.forEach(button => button.addEventListener("click", playTrack));
pauseButtons.forEach(button => button.addEventListener("click", pauseTrack));
rwButtons.forEach(button => button.addEventListener("click", rewindTrack));
})();
