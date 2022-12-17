// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC-t4l9FnCFL0CA44ZXnZXOpvASL9itnI",
    authDomain: "my-project-b576f.firebaseapp.com",
    projectId: "my-project-b576f",
    storageBucket: "my-project-b576f.appspot.com",
    messagingSenderId: "586915668291",
    appId: "1:586915668291:web:481b59198e3ac3acf64ff6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
