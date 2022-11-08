//import {getEmail} from'./profilepage';
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

function register(){
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const phno = document.getElementById('phonenumber').value
    const category = document.getElementById('domain').value
    const collegename = document.getElementById('college').value
    const email = document.getElementById('emailcreate').value
    const password = document.getElementById('passwordcreate').value
    const confirm_password = document.getElementById('confirm_password').value

    if (password!=confirm_password){
        alert("Passwords do not match")
        return false;
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then((res)=>{
        console.log(res.user)
        db.collection('users')
    .add({
        name: name, 
        age: age, 
        phno: phno,
        category:category,
        collegename: collegename,
        email: email
    })
    .then((docRef)=>{
        console.log("Document written with ID: ", docRef.id)
        alert("Request submitted")
    })
    .catch((error)=>{
        console.log(error)
    });
    })
    .catch((err)=>{
        console.log(err.code)
        console.log(err.message)
    })
    .catch((err)=>{
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })


}


const login=()=>{
    const emaillogin = document.getElementById('emaillogin').value
    const passwordlogin = document.getElementById('passwordlogin').value

    auth.signInWithEmailAndPassword(emaillogin, passwordlogin)
    .then((res)=>{
        console.log(res.user)
    })
    .catch((err)=>{
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })


}

