const firebaseApp = firebase.initializeApp({apiKey: "AIzaSyBjnkcPoInFtZ0NM8y_ZSVl4kdqBsVApuU",
authDomain: "bookio-frontend.firebaseapp.com",
projectId: "bookio-frontend",
storageBucket: "bookio-frontend.appspot.com",
messagingSenderId: "622340831926",
appId: "1:622340831926:web:592dea2eab250e3a020417",
measurementId: "G-BSF8MWX8N6"});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


const register=()=>{
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
    .then((res)=>{
        console.log(res.user)
    })
    .catch((err)=>{
        console.log(err.code)
        console.log(err.message)
    })
}