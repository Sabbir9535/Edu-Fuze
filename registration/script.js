// app.js
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDK1qAbLD7BiwY-FK7qTLrw4S8P4F_Ap44",
    authDomain: "eduf-uze.firebaseapp.com",
    projectId: "eduf-uze",
    storageBucket: "eduf-uze.firebasestorage.app",
    messagingSenderId: "912121281071",
    appId: "1:912121281071:web:410fe432d5603047f024da",
    measurementId: "G-S25XYSY3PJ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  
  // Form submission
  document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var whatsapp = document.getElementById('whatsapp').value;
    var address = document.getElementById('address').value;
    var reason = document.getElementById('reason').value;
  
    db.collection("registrations").add({
      name: name,
      email: email,
      whatsapp: whatsapp,
      address: address,
      reason: reason
    })
    .then(function () {
      var form = document.getElementById('registration-form');
      var confirmationMessage = document.getElementById('confirmation-message');
      form.classList.add('hidden');
      confirmationMessage.classList.remove('hidden');
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  });
  
  document.getElementById("submits").addEventListener("click",function(){
    document.getElementById("shows").innerText="Registration successful"
    document.getElementById("shows").style.color="green";
  })