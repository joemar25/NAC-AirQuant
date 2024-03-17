/**
 * Main Controller
 */

import { Html5QrcodeScanner } from "html5-qrcode";
import { removeSkeleton } from "./utility_controller/loader_controller.js";
import { initFullscreen } from "./utility_controller/full_screen_controller.js";

function initializePageWithLoader() {
  document.body.classList.add("loading");
  removeSkeleton();
  initFullscreen();
}

initializePageWithLoader();

// -------------------------------------- QR CODE LOGIC

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
