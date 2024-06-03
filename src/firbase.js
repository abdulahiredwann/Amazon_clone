import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAiCu9J2eMgApwOWI9hnf47wQ-2u-o0rek",
    authDomain: "fir-7fe5a.firebaseapp.com",
    projectId: "fir-7fe5a",
    storageBucket: "fir-7fe5a.appspot.com",
    messagingSenderId: "206209258421",
    appId: "1:206209258421:web:5b096eb5e244fb50d6fffc",
    measurementId: "G-NRVG6MSBXW"
  };
 // Initialize Firebase
// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()

const auth = getAuth()

export { auth, db }
