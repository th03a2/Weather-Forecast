import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAvO1uVBPCwJO625gWmXVg2UFnbIQUpRto",
    authDomain: "weather-forecast-b96b9.firebaseapp.com",
    projectId: "weather-forecast-b96b9",
    storageBucket: "weather-forecast-b96b9.appspot.com",
    messagingSenderId: "367111519838",
    appId: "1:367111519838:web:9280191ccc42a408803ecf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
