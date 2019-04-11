//initialize the map

  var map = L.map('map').setView([45.438296, 12.333483], 13);

  //Create baselayer - tiles
  var backgroundMap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});

//Create a marker first
var geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

//create a empty geojson layer
var geojson = L.geojson(null,{
  pointToLayer: function (feature, latlng){
    return L.cirleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(map);

// new Http Request
var xhttp = new XMLHttpRequest();
// set the request method and data file
xhttp.open('GET', encodeURI("mapelbe.geojson"));
//specify what must be done with the geojson data to the layer when request is succesfull
xhttp.onload = function() {
if (xhttp.readyState === 4) {
// add the json data to the geojson layer we created before!
geojson.addData(JSON.parse(xhttp.responseText));
} else {
alert('Request failed. Returned status of ' + xhttp.status);
}
};
// send the req
