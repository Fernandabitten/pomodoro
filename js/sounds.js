export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const buttonForestSound = new Audio("./audio/florest.wav");
  const buttonRainSound = new Audio("./audio/rain.wav");
  const buttonCoffeeShopSound = new Audio("./audio/coffeShop.wav");
  const buttonFireplaceShopSound = new Audio("./audio/fireReplaceShop.wav");

  buttonForestSound.loop = true;
  buttonRainSound.loop = true;
  buttonCoffeeShopSound.loop = true;
  buttonFireplaceShopSound.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timerEnd() {
    kitchenTimer.play();
  }
  return {
    pressButton,
    timerEnd,
    buttonForestSound,
    buttonRainSound,
    buttonCoffeeShopSound,
    buttonFireplaceShopSound,
  };
}
