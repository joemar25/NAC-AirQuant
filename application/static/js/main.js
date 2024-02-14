/**
 * Main Controller
 * file: htmx_controller.js
 */

import { Html5QrcodeScanner } from "html5-qrcode";
import { themeChange } from "theme-change";
import { removeSkeleton } from "./utility_controller/loader_controller.js";
import {
  initFullscreen,
  updateFullscreen,
} from "./utility_controller/full_screen_controller.js";
import {
  initThemeOptions,
  initFontSizeOptions,
  initFontTypeOptions,
  initContrastOptions,
  updateFontSize,
  updateFontType,
  defaultButtonClickEvent,
} from "./utility_controller/settings_controller.js";

function handleAfterSwap(event) {
  // console.log("htmx:afterSwap event triggered");
  themeChange();
  updateFullscreen();
  updateFontSize();
  updateFontType();
}

function initializePageWithLoader() {
  document.body.classList.add("loading");
  removeSkeleton();
  initFullscreen();
  themeChange(false);
  initThemeOptions();
  initFontSizeOptions();
  initFontTypeOptions();
  initContrastOptions();
  defaultButtonClickEvent();
}

// Initial page load with loader
initializePageWithLoader();

// Handle htmx navigation for subsequent page loads
document.body.addEventListener("htmx:load", function () {
  initializePageWithLoader();
  document.body.removeEventListener("htmx:afterSwap", handleAfterSwap);
  document.body.addEventListener("htmx:afterSwap", handleAfterSwap);
});

// Handle theme change event
themeChange();

// QR CODE LOGIC

// QR_SCANNER is the ID used in the html
const scanner = new Html5QrcodeScanner("QR_SCANNER", {
  qrbox: {
    width: 250,
    height: 250,
  },
  fps: 20,
});

scanner.render(success, error);

function success(data) {
  document.getElementById("QR_RESULT").textContent = data;

  scanner.clear();
  document.getElementById("QR_SCANNER").remove();
}

function error(data) {
  document.getElementById("QR_RESULT").textContent = "Error:" + data;
}
