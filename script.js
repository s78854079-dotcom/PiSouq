import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDE7IJclVGfx3YqRtcDrbh2oY9eevyWFIQ",
  authDomain: "pisouq-4d7da.firebaseapp.com",
  projectId: "pisouq-4d7da",
  storageBucket: "pisouq-4d7da.firebasestorage.app",
  messagingSenderId: "884828799012",
  appId: "1:884828799012:web:9c6ceb500cf9c47ea2d8b1"
};

initializeApp(firebaseConfig);


if (typeof Pi !== "undefined") {
Pi.init({
  version: "2.0",
  sandbox: false
});
}


window.loginWithPi = function () {

  Pi.authenticate(
    ["username"],
    function(auth) {

      localStorage.setItem("username", auth.user.username);

      alert("تم تسجيل الدخول: " + auth.user.username);

      location.reload();

    },
    function(error) {

      console.log(error);

      alert("فشل تسجيل الدخول");

   