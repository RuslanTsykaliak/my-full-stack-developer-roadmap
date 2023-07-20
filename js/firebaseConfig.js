import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDrKd6rbxo4O2VCltqnIWcIZ42lxShnR1U",
  authDomain: "full-stack-developer-roadmap.firebaseapp.com",
  databaseURL: "https://full-stack-developer-roadmap-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "full-stack-developer-roadmap",
  storageBucket: "full-stack-developer-roadmap.appspot.com",
  messagingSenderId: "1091037672203",
  appId: "1:1091037672203:web:ecf63ac922c7cb7b89680e"
};


const app = initializeApp(firebaseConfig);

// Function to handle the selection of a tutorial
export function handleTutorialSelection(topic, tutorial, isChecked) {
  const database = getDatabase();
  const tutorialsRef = ref(database, `selectedTutorials/${topic}/${tutorial}`);

  // Set the selected tutorial under the specific topic in the database
  set(tutorialsRef, isChecked);
}

export default app;