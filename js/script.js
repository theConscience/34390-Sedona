function initialize() {
    var myLatlng = new google.maps.LatLng(35.0562031,-112.5852536);
    var myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new   google.maps.Map(document.getElementById("map_canvas"), myOptions);
    var theSedona = new google.maps.LatLng(34.8649372,-111.7643594,13);
    var contentString = '<div id="content">Замечательный городок Седона!</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        position: theSedona,
        map: map,
        title:"Hello World!"
    });
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
});

}


