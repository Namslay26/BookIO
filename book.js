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

/*const elem = document.createElement("div");
elem.setAttribute("class","card card-body");
var reviewTitle;
var reviewBody;
*/
var review1title=document.getElementsByClassName(" card-title review1");
var review1text=document.getElementsByClassName(" card-text review1");
var review2title=document.getElementsByClassName("card-title review2");
var review2text=document.getElementsByClassName("card-text review2");
var review3title=document.getElementsByClassName("card-title review3");
var review3text=document.getElementsByClassName("card-text review3");
firebaseApp.firestore().collection('review').get().then((querysnapshot)=>{
    querysnapshot.docs.forEach(doc =>{
        //get the classes with name of "card-title"
        //running a for loop 
        //console.log(doc.data())

        
        review1title.item(0).innerText = doc.data().title;
        review1text.item(0).innerText=doc.data().review;

        review2title.item(1).innerText = doc.data().title;
        review2text.item(1).innerText=doc.data().review;

        review3title.item(2).innerText = doc.data().title;
        review3text.item(2).innerText=doc.data().review;
        





        console.log(doc.data().title)
        console.log(doc.data().ratings);
        console.log(doc.data().review);
    })
});
