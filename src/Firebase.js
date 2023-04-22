import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAClPyNGq62PLXI7w0iP74PmRBisUwk40k",
	authDomain: "outlook-clone-5a92a.firebaseapp.com",
	projectId: "outlook-clone-5a92a",
	storageBucket: "outlook-clone-5a92a.appspot.com",
	messagingSenderId: "380088890988",
	appId: "1:380088890988:web:741b1c1f62fe3ac9a98a49",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// const db = getFirestore(app);

// export { db };
