// Initialize Firebase
var config = {
    apiKey: "AIzaSyBab0SUTQMOWLah0cMMOHobAe6id_mrp5Y",
    authDomain: "contentshow-gama.firebaseapp.com",
    databaseURL: "https://contentshow-gama.firebaseio.com",
    projectId: "contentshow-gama",
    storageBucket: "contentshow-gama.appspot.com",
    messagingSenderId: "205921382978"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

var database = firebase.database();

//receber leads
var leadsRef = database.ref('messages');
leadsRef.on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
    });
});

//fazer algo com os dados
leadsRef.on('child_added', function (snapshot) {
    console.log(snapshot);
});