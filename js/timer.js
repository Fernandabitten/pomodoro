import Sounds from "./sounds.js";

const sound = Sounds();

export default function Timer({
  minutesDisplay,
  secundsDisplay,
  resetControls,
}) {
  let timerTimeout;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secundsDisplay.textContent = String(seconds).padStart(2, "0");
  }
  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeout);
  }

  function countdown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secundsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinesh = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinesh) {
        resetControls();
        updateDisplay();
        Sounds().timerEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }
      updateDisplay(minutes, String(seconds - 1));
      countdown();
    }, 1000);
  }
  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }
  function hold() {
    clearTimeout(timerTimeout);
  }
  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  };
}
