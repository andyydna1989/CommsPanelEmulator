import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB82x7k2rvRuHr-wPeuVgrXvEmLZFrieVY",
    authDomain: "vcsemulator.firebaseapp.com",
    projectId: "vcsemulator",
    storageBucket: "vcsemulator.appspot.com",
    messagingSenderId: "508665183603",
    appId: "1:508665183603:web:2ede59d4e034522ddb5906"
  };

  const app = initializeApp(firebaseConfig);

console.log("hello world");

let submitButton = document.getElementById("submitPassword");
let password = document.getElementById("passwordBox");
let link = document.getElementById("logInLink");

submitButton.onclick=function(){
    console.log("passwordSubmitted");
    if (password.value == "fiadge"){
        console.log("password success");
        link.style.display = "block";
    }
    else {
        window.alert("That aint the password fool!")
    }
}