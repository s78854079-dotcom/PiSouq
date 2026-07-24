import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDE7IJclVGfx3YqRtcDrbh2oY9eevyWFIQ",
  authDomain: "pisouq-4d7da.firebaseapp.com",
  projectId: "pisouq-4d7da",
  storageBucket: "pisouq-4d7da.firebasestorage.app",
  messagingSenderId: "884828799012",
  appId: "1:884828799012:web:9c6ceb500cf9c47ea2d8b1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (typeof Pi !== "undefined") {
  Pi.init({
    version: "2.0",
    sandbox: false
  });
}
window.loginWithPi = async function () {

  try {

    const auth = await Pi.authenticate(["username"]);

    localStorage.setItem("username", auth.user.username);

    alert("تم تسجيل الدخول: " + auth.user.username);

    location.reload();

  } catch (e) {

    alert("فشل تسجيل الدخول");

    console.log(e);

  }

};

window.addProduct = async function () {

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;

  const username = localStorage.getItem("username") || "مستخدم";

  if (!name || !price || !description) {
    alert("يرجى تعبئة جميع الحقول");
    return;
  }

  try {

    await addDoc(collection(db, "products"), {
      name: name,
      price: Number(price),
      description: description,
      seller: username,
      createdAt: Date.now()
    });

    alert("تم نشر الإعلان بنجاح ✅");

    location.href = "buy.html";

  } catch (e) {

    console.log(e);

    alert("حدث خطأ أثناء النشر");

  }

};
