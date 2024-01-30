
import { initializeApp } from "firebase/app";
import {  getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA25-yk1_S_WW3P9WD8ktbQsTAS3_BLyDY",
    authDomain: "insta-460d6.firebaseapp.com",
    projectId: "insta-460d6",
    storageBucket: "insta-460d6.appspot.com",
    messagingSenderId: "541103682059",
    appId: "1:541103682059:web:ccfc36138c76d4e2640d0e",
    measurementId: "G-VXY828TV6T"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const firestore = getFirestore(app);