//FIrebase authentication

(function() {

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

      const email = document.getElementById(email);
      const password = document.getElementById(password);
      const submit = document.getElementById(submit);

      submit.addEventListener('click', e =>{
            const auth = firebase.auth();
            firebase.auth().createUserWithEmailAndPassword(email.nodeValue, password.nodeValue)
                .then(function (response) {
            
                })
                .catch(function (error) {
            
                });
      });
});