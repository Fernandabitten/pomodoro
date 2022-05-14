import Controls from "./controls.js";
import Timer from "./timer.js";
import Events from "../js/events.js";
import Sound from "../js/sounds.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  minutesDisplay,
  secundsDisplay,
} from "./elements.js";

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secundsDisplay,
  resetControls: controls.reset,
});

const sound = Sound();

Events({ controls, timer, sound });
