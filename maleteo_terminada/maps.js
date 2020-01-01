


function initiateGoogleMap() {
    fetch("https://jsonblob.com/api/jsonBlob/68f0896f-224a-11ea-b6f9-fda03b8457bd")
        .then(res => res.json())
        .then(datos => {
            console.log ("datos");
            //Some properties we want to pass to the map  
            var options = {
                mapTypeId: google.maps.MapTypeId.ROADMAP //Other map types are -- SATELLITE/HYBRID/TERRAIN
            };
            //Initializing the map  
            var map = new google.maps.Map(document.getElementById('google_map'), options);

            var markers = [];
            var info = [];
            for (i = 0; i < datos.length; i++) {
                markers[i] = [datos[i].name, datos[i].location.latitude, datos[i].location.longitude];
                info[i] = [datos[i].user.name + " " + datos[i].user.surname, datos[i].name, datos[i].rating, datos[i].size];
            };
            var bounds = new google.maps.LatLngBounds();
            //Create an object of InfoWindow class
            var infoWindow = new google.maps.InfoWindow();
            var marker, i;

            // recorre el array y coloca cada marcador en el mapa  
            for (i = 0; i < markers.length; i++) {
                var marker_position = new google.maps.LatLng(markers[i][1], markers[i][2]);
                bounds.extend(marker_position);
                marker = new google.maps.Marker({
                    position: marker_position,
                    map: map,
                    title: markers[i]
                });

                //Asigna a cada marcador su informacion que aparece en el evento click  
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infoWindow.setContent('<strong>' + "Guardián: " + info[i][0] + '</strong><br/><br/>' + '<strong>' + "Nombre :" + info[i][1] + '</strong><br/><br/>' +'<strong>' + "Puntuación: " + info[i][2] + '</strong><br/><br/>' +'<strong>' + "Distancia: " + info[i][3] + '</strong><br/><br/>');
                        infoWindow.open(map, marker);
                    }
                })(marker, i));
                //Centra el mapa para que se vean todos los marcadores
                map.fitBounds(bounds);
            }

            //Zoom sobre el marcador seleccionado
            var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
                this.setZoom(12);
                google.maps.event.removeListener(boundsListener);
            });
        });
}

document.addEventListener("DOMContentLoaded", function () {
    console.log('Your document is ready!');

    


});