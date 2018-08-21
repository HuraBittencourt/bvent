let scanner = new Instascan.Scanner(
    {
        video: document.getElementById('preview'),
        mirror: false
    }
);

scanner.addListener('scan', function(content){
    let scannedCode = content.split(',');
    writeUserData(scannedCode);
    console.log(scannedCode);
});

Instascan.Camera.getCameras().then(cameras =>
{
    if(cameras.length > 1){
        scanner.start(cameras[1]);
    }else if(cameras.length > 0){
        scanner.start(cameras[0]);
    }else{
        console.error("Não existe câmera no dispositivo");
    }
})

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDlYN9L9RjetF1PN8BEWXcMSxQOArC1FNc",
    authDomain: "bvent-55e01.firebaseapp.com",
    databaseURL: "https://bvent-55e01.firebaseio.com",
    projectId: "bvent-55e01",
    storageBucket: "bvent-55e01.appspot.com",
    messagingSenderId: "484288242152"
};
firebase.initializeApp(config);

//Referenciar
var database = firebase.database();

//Gravar dados no firebase
function writeUserData(scannedCode) {
firebase.database().ref('leads/' + scannedCode[6]).set({
    //feira,empresaStand,Euclydes,Developer,Microsoft,euclydesbsn@gmail.com,13996221752
    feira: scannedCode[0],
    stand: scannedCode[1],
    nome : scannedCode[2],
    cargo : scannedCode[3],
    empresa : scannedCode[4],
    email : scannedCode[5],
    telefone : scannedCode[6]
});
}
