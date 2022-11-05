const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

function register(){
    const name = document.getElementById('name').value
    const uname = document.getElementById('username').value
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
    })
    .catch((err)=>{
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
