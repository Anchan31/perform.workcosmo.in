import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    setPersistence,
    browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    limit,
    query,
    where
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const firebaseConfig = {
    apiKey: "AIzaSyDKuFUJyHUl5AIFSFHCg-4S_wadsha6Et4",
    authDomain: "recruitment-suite-hr.firebaseapp.com",
    projectId: "recruitment-suite-hr",
    storageBucket: "recruitment-suite-hr.firebasestorage.app",
    messagingSenderId: "1049067446272",
    appId: "1:1049067446272:web:a0eb4e5a9fac1589a8f8e5",
    measurementId: "G-87FVXXYEP7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

setPersistence(auth, browserSessionPersistence);

export {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    onAuthStateChanged,
    query,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    where
};
