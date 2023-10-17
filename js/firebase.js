import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ####################################################################
// ||                                                                ||
// ||                      Firebase Goes Below                       ||
// ||                                                                ||
// ####################################################################

// ####################################################################
// ||                                                                ||
// ||                      Firebase Goes Above                       ||
// ||                                                                ||
// ####################################################################
let db = null;
try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch {
  console.error('Failed to initialize Firebase.');
}

export default db;

