const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

function savedata(){
    const email = document.getElementById("email").value
    const namebook = document.getElementById("namebook").value
    const author = document.getElementById("nameauthor").value
    const domain = document.getElementById("domain").value
    const isbn = document.getElementById("isbn").value

    db.collection('requestedbooks')
    .add({
        email: email, 
        namebook:namebook,
        author: author,
        domain: domain, 
        isbn: isbn
    })
    .then((docRef)=>{
        console.log("Document written with ID: ", docRef.id)
        alert("Request submitted")
    })
    .catch((error)=>{
        console.log(error)
    });
}
