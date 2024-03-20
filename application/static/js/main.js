/**
 * Main Controller
 */

import { Html5QrcodeScanner } from "html5-qrcode";
import { removeSkeleton } from "./controller/loader_controller.js";
import { initFullscreen } from "./controller/full_screen_controller.js";

function initializePageWithLoader() {
  document.body.classList.add("loading");
  removeSkeleton();
  initFullscreen();
}

initializePageWithLoader();

// -------------------------------------- QR CODE LOGIC

// Check if the browser supports navigator.mediaDevices.getUserMedia
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      // QR_SCANNER is the ID used in the html
      const scanner = new Html5QrcodeScanner("QR_SCANNER", {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 20,
        // Pass the stream to the scanner
        cameraId: { exact: stream.getVideoTracks()[0].label },
      });

      scanner.render(success, error);

      // get the qr code data if success
      function success(data) {
        // Check if the scanned data is a valid ID (assuming validation logic here)
        if (isValidID(data)) {
          // If valid, send the data to the Django backend function
          getDeviceID(data);
        } else {
          // If not valid, display an error message or handle it accordingly
          console.error("Invalid QR code data:", data);
          document.getElementById("QR_RESULT").textContent =
            "Invalid QR code data: " + data;
        }

        // Clear the scanner and remove it from the DOM
        scanner.clear();
        document.getElementById("QR_SCANNER").remove();
      }

      function isValidID(data) {
        // Implement your validation logic here
        // For example, check if the data conforms to the expected format of an ID
        // Return true if valid, false otherwise
        // You can customize this function based on your specific validation requirements
        return data && data.length > 0; // Example: Check if data is not empty
      }

      function getDeviceID(deviceID) {
        // Make an HTTP request to send the deviceID to the Django backend
        // Replace 'your-backend-url' with the actual URL of your backend endpoint
        fetch("your-backend-url/get_device_id", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ deviceID: deviceID }),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Device ID sent successfully.");
              // Optionally handle success response
            } else {
              console.error("Failed to send device ID to backend.");
              // Optionally handle error response
            }
          })
          .catch((error) => {
            console.error("Error sending device ID to backend:", error);
            // Optionally handle network errors
          });
      }

      function error(data) {
        document.getElementById("QR_RESULT").textContent = "Error:" + data;
      }
    })
    .catch(function (error) {
      console.error("Permission denied for camera use:", error);
    });
} else {
  console.error("getUserMedia is not supported in this browser.");
}
