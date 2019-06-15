var express = require('express');
var path = require('path'); 
// var firebaseapp = require("firebase/app");
// var mAuth = require("firebase/auth");
var firebase = require("firebase-admin");
var bodyParser = require('body-parser');
var crypto = require('crypto');
                                    
var app = express();
var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://karkhana-makerspace.firebaseio.com"
});


//Create the server and set the default routes

app.get('/',function(req,res){
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/public/index.html');
}).listen(3000);

console.log("Server listening at : 3000");
app.use('/public', express.static(__dirname + '/public'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));
const db = firebase.firestore();
// Sign-up function starts here. . .
app.post('/sign_up' ,function(req,res){
	var name = req.body.name;
	var email= req.body.email;
	var pass = req.body.password;
  var phone = req.body.phone;
  // var dob = req.body.dob;
  var college = req.body.college;
  var branch = req.body.branch;
//   var sem = req.body.sem;
// var password = getHash( pass , phone ); 				
	
	var data = {
		"name":name,
		"email":email,
		"password": pass, 
    	"phone" : phone,
    // "dob" : dob
		"college" : college,
		"branch" : branch,
    // "semester" : sem
	}

const docRef = db.collection("user").doc(email);
docRef.set(data).then(function(){
  console.log("Text saved");
  return res.redirect('/public/login.html');  
}).catch(function(error){
  console.log("Error : ", error);
}); 
});

//SignIn function strats here
app.post('/sign_in', function(req,res){
	var email = req.body.email;
	var password = req.body.pass;

	//Read value from firestore
	// let docRef = db.collection('user').doc(email);
	// let getDoc = docRef.get()
	//   .then(doc => {
	// 	if (!doc.exists) {
	// 	  console.log('No such document!');
	// 	} else {
	// 	//   console.log('Document data:', doc.data());
	// 		if(password == doc.data().pass){
	// 			console.log('Login Successful !!');
	// 			return res.redirect('/public/index.html');  
	// 		}
	// 	}
	//   })
	//   .catch(err => {
	// 	console.log('Error getting document', err);
	//   });

	var auth = firebase.auth();
	firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function (response) {
			console.log('Successful');
		})
		.catch(function (error) {
			console.log(error);
		});
	// firebaseClient.auth().signInWithEmailAndPassword(email, password).catch(function(error){
	// 	console.log(error);
	// })
	  
});

