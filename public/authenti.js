var firebaseConfig = {
  apiKey: "AIzaSyDpK0-9RZXzLbKqV08kWLzEn0pJGQ9BkKc",
  authDomain: "karkhana-makerspace.firebaseapp.com",
  databaseURL: "https://karkhana-makerspace.firebaseio.com",
  projectId: "karkhana-makerspace",
  storageBucket: "karkhana-makerspace.appspot.com",
  messagingSenderId: "897330186132",
  appId: "1:897330186132:web:c577e48bfbb6680e"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    if (!firebase.apps.length) {
 firebase.initializeApp({});
}
var result = 0;
//FIrebase authentication

function signup() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const submit = document.getElementById('submit');

  if(result == 0){
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function (res) {
      console.log('logged in authenti', res)
      window.location.href = "index.html";
    })
    .catch(function (error) {
    console.log('catch', error)
    });
  }
  else{
    window.location.href = "success.html";
  }
}

  function g_sign_in() {
    
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(res){
      console.log(res);
      console.log("Goggle signIn Successful");
      window.location.href = "regd.html";
    }).catch(function(error){
      console.log(error);
      console.log("failed to signIn");
    })

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        result = 1;
        console.log(result);
      } else {
        // No user is signed in.
        result = 0;
        console.log(result);

      }
    });
  }
