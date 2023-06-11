import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // ...
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db2 = getDatabase(app);
export const db = getFirestore(app);

