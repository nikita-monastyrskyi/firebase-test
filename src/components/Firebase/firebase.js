import app from "firebase/app";
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
  }
}

export default Firebase;
