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

  var database = firebase.database();
  database.ref('leads').once('value', function(snapshot){
      if(snapshot.exists()){
          var content = '';
          snapshot.forEach(function(data){
              var val = data.val();
              content +='<tr>';
              content += '<td>' + val.cargo + '</td>';
              content += '<td>' + val.email + '</td>';
              content += '<td>' + val.empresa + '</td>';
              content += '<td>' + val.feira + '</td>';
              content += '<td>' + val.nome + '</td>';
              content += '<td>' + val.stand + '</td>';
              content += '<td>' + val.telefone + '</td>';
              content += '</tr>';
          });
          $('#ex-table').append(content);
      }
  });