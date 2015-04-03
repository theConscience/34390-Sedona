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

(function () {

    function showMenu() {
        var menu = document.querySelector('.page-header');
        console.log('click on menu show');
        menu.classList.remove('collapsed');
    }
    function collapseMenu() {
        var menu = document.querySelector('.page-header');
        console.log('click on menu collapse');
        menu.classList.add('collapsed');
    }


    var menu_show = document.querySelector('.menu-show');
    var menu_collapse = document.querySelector('.menu-collapse');


    menu_show.addEventListener("click", showMenu);
    menu_collapse.addEventListener("click", collapseMenu);

    window.addEventListener("resize", function() {
        console.log('resizing window!');
        var menu = document.querySelector('.page-header');
        if (menu.classList.contains('collapsed')) {
            if (window.innerWidth >= 768) {
                console.log('oops, more than 768px !');
                menu.classList.remove('collapsed');
            }
        }
    });


})();
