// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEoZoOvnyIN74VUW9_59VgMRaO0BgTfho",
  authDomain: "nordbo-tb-2.firebaseapp.com",
  projectId: "nordbo-tb-2",
  storageBucket: "nordbo-tb-2.appspot.com",
  messagingSenderId: "514374256871",
  appId: "1:514374256871:web:aeb833ef8859bb30c5ba42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}