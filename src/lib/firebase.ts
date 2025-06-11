// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9NqwFO8Cx6ichGgHRVNLZZ_kHtHdZfF4",
  authDomain: "med-app-7c0aa.firebaseapp.com",
  projectId: "med-app-7c0aa",
  storageBucket: "med-app-7c0aa.firebasestorage.app",
  messagingSenderId: "347194519329",
  appId: "1:347194519329:web:5dff20d2f7a8e1d6741860"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const getUserData = async (userId: string) => {
  const userDocRef = doc(db, "users", userId);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    return userDoc.data();
  } else {
    return null;
  }
};
