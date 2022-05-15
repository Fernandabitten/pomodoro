export default function Controls({ buttonPlay, buttonPause }) {
  let isActive = false;
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
  }
  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }
  function reset() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }
  function pausePlay(button, sound) {
    if (isActive) {           
      isActive = false;
      sound.pause();
      button.classList.remove("selected");
    } else {
      isActive = true;
      button.classList.add("selected");
      sound.play();
    }
  }
  return {
    reset,
    play,
    pause,
    pausePlay,
  };
}
