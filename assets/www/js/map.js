var load = function() {
    getMyLocation();
}

var getMyLocation = function() {

    var showMyPositionInMap = function(position) {
        // TODO: Bytt ut <breddegrad> og <lengdegrad> med din breddegrad og lengdegrad
        var myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        
        var map  = new google.maps.Map(document.getElementById('map_canvas'), {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: myLocation,
            zoom: 17
        }); 
        
        var marker = new google.maps.Marker({
            position: myLocation,
            map: map,
            title: "Du er her!"
        });

        marker.setMap(map);
    };

    var suc = function(position) {
        // TODO: Oppgave 2b: Vis kartet og din posisjon i kartet.
        // showMyPositionInMap(position);

        // TODO: Oppgave 2c: Lag en notification.alert 
        var alertDismissed = function() {
            showMyPositionInMap(position);
        };
        navigator.notification.alert(
            'Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude,  // message
            alertDismissed,         // callback
            'Din posisjon',            // title
            'Vis i kart'                  // buttonName
        );
    };

    var locFail = function() {
        alert("Fant ikke din lokasjon");

    };
    navigator.geolocation.getCurrentPosition(suc, locFail);
};