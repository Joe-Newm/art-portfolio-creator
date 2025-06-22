// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyA6qmB0KbXHNROVzHTeoTeQy7NxFzXEUS4",

  authDomain: "art-portfolio-creator.firebaseapp.com",

  databaseURL: "https://art-portfolio-creator-default-rtdb.firebaseio.com",

  projectId: "art-portfolio-creator",

  storageBucket: "art-portfolio-creator.firebasestorage.app",

  messagingSenderId: "350049606091",

  appId: "1:350049606091:web:a105630fb02b074aa47e4e",

  measurementId: "G-F5HVF6G7CP"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to local");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export const storage = getStorage(app);
export const db = getDatabase(app);
export default app;
