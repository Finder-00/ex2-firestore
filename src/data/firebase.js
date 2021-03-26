import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAgNqnVCfNYt4HMyCUNBgeqWERRHYS6v5c",
  authDomain: "react---prog-reactive.firebaseapp.com",
  projectId: "react---prog-reactive",
  storageBucket: "react---prog-reactive.appspot.com",
  messagingSenderId: "709186676471",
  appId: "1:709186676471:web:55a5ba4fe20acc98b5d5f2"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();

/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) ci-dessous la référence à "bd" obtenue ci-dessus (pour pouvoir l'utiliser dans le composant ListeProduits)
export default bd;