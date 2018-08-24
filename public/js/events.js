getAllEvents();

function getAllEvents() {

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
    database.ref('events').once('value', function (snapshot) {
        if (snapshot.exists()) {
            var content = '';
            snapshot.forEach(function (data) {
                var val = data.val();
                content += '<div class="card-list col-xl-6 col-sm-6 mb-3">';
                content += '<div class="card text-white bg-secondary o-hidden h-100">';
                content += '<div class="card-body">';
                content += '<div class="card-body-icon">';
                content += '<i class="fas fa-fw fa-comments"></i>';
                content += '</div>';
                content += '<div id="' + val.idEvents + '" class="mr-5">' + val.name + '</div>';
                content += '</div>';
                content += '<a class="card-footer text-white clearfix small z-1" href="/event.html?idEvent=' + val.idEvents + '">';
                content += '<span class="float-left">Ver detalhes</span>';
                content += '<span class="float-right">';
                content += '<i class="fas fa-angle-right"></i>';
                content += '</span>';
                content += '</a>';
                content += '</div>';
                content += '</div>';
            });
            
            $('.card-list').append(content);
        }
    });
}
