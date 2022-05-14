import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSun,
  buttonMinus,
  buttonForest,
  buttonRainSound,
  buttonCoffeeShopSound,
  buttonFireplaceShopSound,
  minutesDisplay,
} from "./elements.js";

export default function ({ controls, timer, sound }) {
  let minutes = Number(minutesDisplay.textContent);
  let isActive = false;

  function pausePlay(button, sound) {
    if (isActive) {
      document.location.reload(true);
      isActive = false;
      sound.pause();
      button.classList.remove("colorSound");
    } else {
      isActive = true;
      button.classList.add("colorSound");
      sound.play();
    }
  }

  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", function () {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", function () {
    controls.reset();
    timer.reset();
    sound.pressButton();
    document.location.reload(true);
  });

  buttonSun.addEventListener("click", function () {
    timer.updateDisplay(String((minutes += 5)), 0);
  });

  buttonMinus.addEventListener("click", function () {
    timer.updateDisplay(String((minutes -= 5)), 0);
  });

  buttonForest.addEventListener("click", function () {
    pausePlay(buttonForest, sound.buttonForestSound);
  });

  buttonRainSound.addEventListener("click", function () {
    pausePlay(buttonRainSound, sound.buttonRainSound);
  });

  buttonCoffeeShopSound.addEventListener("click", function () {
    pausePlay(buttonCoffeeShopSound, sound.buttonCoffeeShopSound);
  });

  buttonFireplaceShopSound.addEventListener("click", function () {
    pausePlay(buttonFireplaceShopSound, sound.buttonFireplaceShopSound);
  });
}
