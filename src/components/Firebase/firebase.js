import app from "firebase/app";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCdBIwsN59Imfl4xDPb2-QFR-diYAA63g0",
  authDomain: "react-auth-f7979.firebaseapp.com",
  databaseURL: "https://react-auth-f7979.firebaseio.com",
  projectId: "react-auth-f7979",
  storageBucket: "react-auth-f7979.appspot.com",
  messagingSenderId: "754787651166",
  appId: "1:754787651166:web:02056756a47a23ec"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
