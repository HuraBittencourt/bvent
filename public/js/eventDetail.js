getEvent();

function getEvent() {

    let idEvent = getUrlParameters();
    var database = firebase.database();
    database.ref('events').once('value', function (snapshot) {
        if (snapshot.exists()) {
            var content = '';
            snapshot.forEach(function (data) {
                var val = data.val();
                if(idEvent == val.idEvents) {
                    $('#days').text(countDays(val.dateEvent));
                    $('#spending').text(val.spending);
                    $('#getLeads').text("2");
                } 
            });
            $('.card-list').append(content);
        }
    });
}

function getUrlParameters() {
    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }

    return $.urlParam('idEvent');
}

function countDays(day) {
    console.log(day);
    console.log(Math.floor(Date.now() / 1000));
    var dayResult = (Math.floor(Date.now() / 1000)) - day;

    console.log(dayResult);
    return new Date(dayResult).getDay();
}