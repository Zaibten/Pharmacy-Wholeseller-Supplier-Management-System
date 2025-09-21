import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const  config = {
  apiKey: "AIzaSyBDtmCqkkqlmzGuNqHe-PehhDg5tZiPSsQ",
  authDomain: "pharma-sync-project.firebaseapp.com",
  projectId: "pharma-sync-project",
  storageBucket: "pharma-sync-project.firebasestorage.app",
  messagingSenderId: "928044969233",
  appId: "1:928044969233:web:5b00111741f83c32bef0b0",
  measurementId: "G-JVFXC10383"
};
const app = initializeApp(config);
const db = getFirestore(app);
const storage = getStorage(app);  // Initialize storage

export { app, db, storage };
