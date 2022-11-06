const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

function savedata(){
    const ratings = document.getElementById("ratings").value
    console.log(ratings)
    const title = document.getElementById("title").value
    const review = document.getElementById("review").value

    db.collection('review')
    .add({
        ratings: ratings,
        title: title,
        review: review
    })
    .then((docRef)=>{
        console.log("Document written with ID: ", docRef.id)
        alert("Review submitted")
    })
    .catch((error)=>{
        console.log(error)
    });
}


var titletext=document.getElementsByClassName("card-title");
var reviewtext=document.getElementsByClassName("card-text");
var i=0;

db.collection('review').get().then((querySnapshot)=>{
    querySnapshot.docs.forEach((doc) =>{
        var title=doc.data().title;
        var review=doc.data().review;
        
        titletext.item(i).innerText=title;
        reviewtext.item(i).innerText=review;
        i++;
        
    })
}).catch((error)=>{
    console.log(error);
});

