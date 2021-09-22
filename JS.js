
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAXhmcphfvlGOq3e7rw2RXVLNoYBhZCk24",
  authDomain: "monkeyexp.firebaseapp.com",
  projectId: "monkeyexp",
  storageBucket: "monkeyexp.appspot.com",
  messagingSenderId: "26334743334",
  appId: "1:26334743334:web:939bf9031b244b4afd0fe7",
  measurementId: "G-2C52FTPG45"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);