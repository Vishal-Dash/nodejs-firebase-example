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
function submit(){
    var material = document.getElementById('sel_mat').value;
    var layers = document.getElementById('sel_layer').value;
    var tg = document.getElementById('sel_tg').value;
    var dimx = document.getElementById('pcbdimx').value;
    var dimy = document.getElementById('pcbdimy').value;
    var pcbquan = document.getElementById('reqpcb').value;
    var pcbname = document.getElementById('pcbname').value;
    var btdthich = document.getElementById('brdthick').value;
    var cuthick = document.getElementById('cuthick').value;
    var surfinish = document.getElementById('sur-finish').value;
    var smt = document.getElementById('smt').value;
    var smb = document.getElementById('smb').value;
    var legtop = document.getElementById('ltop').value;
    var legbot = document.getElementById('lbot').value;
    var peelof = document.getElementById('peeloff').value;
    var cntr = document.getElementById('cntrshnk').value;
    var impctrl = document.getElementById('impctrl').value;
    var viafill = document.getElementById('viafill').value;
    var prodtme = document.getElementById('pcbprodldtime').value;
    var file = document.getElementById('fileselect').value;

    var data = {
        "material" : material,
        "layers" : layers,
        "tg" : tg,
        "dimension x" : dimx,
        "dimension y" : dimy,
        "pcb quantity" : pcbquan,
        "pcb name" : pcbname,
        "board thickness" : btdthich,
        "cu thickness" : cuthick,
        "surface finish" : surfinish,
        "smt" : smt,
        "smb" : smb,
        "legtop" : legtop,
        "legbottom" :legbot,
        "peeloff" : peelof,
        "control shnk" :cntr,
        "impctrl" : impctrl,
        "viafill" : viafill,
        "prod time" : prodtme
    }
    var storage = firebase.storage();
    var storageRef = storage.ref();

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(data);
            console.log(file);
        } else {
          // No user is signed in.
          result = 0;
          console.log("user not signed in");
  
        }
      });
}