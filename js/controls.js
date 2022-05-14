export default function Controls({ buttonPlay, buttonPause }) {
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
  return {
    reset,
    play,
    pause,
  };
}
