import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDK1qAbLD7BiwY-FK7qTLrw4S8P4F_Ap44",
    authDomain: "eduf-uze.firebaseapp.com",
    projectId: "eduf-uze",
    storageBucket: "eduf-uze.firebasestorage.app",
    messagingSenderId: "912121281071",
    appId: "1:912121281071:web:410fe432d5603047f024da",
    measurementId: "G-S25XYSY3PJ"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        await addDoc(collection(db, 'messages'), {
            name,
            email,
            message,
            timestamp: serverTimestamp()
        });
        alert('Message sent successfully!');
        contactForm.reset();
    } catch (error) {
        alert('Error sending message: ' + error.message);
    }
});
