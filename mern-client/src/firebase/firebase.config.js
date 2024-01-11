// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNgu9yVcQulvPqzj2sY4cvKDFjemU95GY",
  authDomain: "mern-book-inventory-1fbd4.firebaseapp.com",
  projectId: "mern-book-inventory-1fbd4",
  storageBucket: "mern-book-inventory-1fbd4.appspot.com",
  messagingSenderId: "431135875987",
  appId: "1:431135875987:web:801108a60650e7ddd7be66",
  measurementId: "G-91TW2JEZ8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;