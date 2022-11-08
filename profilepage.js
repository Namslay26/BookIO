const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//dom elements
var reviewsget = document.getElementsByClassName("reviewgiven");
var bookreqs = document.getElementsByClassName("bookreq");

var i =0;
var j=0;

db.collection('users')
.get()
.then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        document.getElementById("username").innerText = doc.data().name;
        document.getElementById("email").innerText=doc.data().email;
        document.getElementById("phone").innerText=doc.data().phno;
        document.getElementById("college").innerText=doc.data().collegename;
        document.getElementById("category").innerText=doc.data().category;
        document.getElementById("age").innerText=doc.data().age;

    })
})
.catch((error)=>{
    console.log(error)
})

db.collection('review')
.get()
.then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        var title=doc.data().title;
        reviewsget.item(i).innerText=title;
        i++;
    })
})
.catch((error)=>{
    console.log(error);
})

db.collection('requestedbooks')
.get()
.then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        var book = doc.data().namebook;
        bookreqs.item(j).innerText=book;
        j++;
    })
})




