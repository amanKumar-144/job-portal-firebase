// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzmzaSdzKHoiNJFv7RP46K1RToDnkRxeQ",
  authDomain: "job-portal-2-cc345.firebaseapp.com",
  projectId: "job-portal-2-cc345",
  storageBucket: "job-portal-2-cc345.appspot.com",
  messagingSenderId: "296509509146",
  appId: "1:296509509146:web:3539bd08f98f15a077cba3",
  measurementId: "G-RL4HSGNG63"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase,firestore,app };