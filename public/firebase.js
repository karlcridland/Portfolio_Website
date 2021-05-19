const firebaseConfig = {
    apiKey: "AIzaSyCn6yu0Vq3z0w_1iJvbys_W27j3YKllzLY",
    authDomain: "artstore-dacc2.firebaseapp.com",
    databaseURL: "https://artstore-dacc2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "artstore-dacc2",
    storageBucket: "artstore-dacc2.appspot.com",
    messagingSenderId: "5429436374",
    appId: "1:5429436374:web:123792c23b5e77260ace77",
    measurementId: "G-1TZ928TD1Y"
};

firebase.initializeApp(firebaseConfig);
const ref = firebase.database().ref();