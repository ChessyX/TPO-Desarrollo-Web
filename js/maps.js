function initMap(){
    var coord = {lat: 22.7589592 ,lng: 75.8862574};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord,
      zoomControl: false,
      scaleControl: false
    });
}