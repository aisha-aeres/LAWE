function tothetop () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


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
backgroundMap.addTo(map);

var waveicon = L.icon({
    iconUrl: 'img/icon1.png',

    iconSize: [38, 30],
    iconArchor: [22, 94],
    popupArchor: [-3, -76]
});

var marker = L.marker([45.438369, 12.318234], {icon: waveicon}).addTo(map);

// Create a marker first
var geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

//create a empty geojson layer
var elbelayer = L.geoJson(null,{
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(map);

 // new Http Request
var elbe = new XMLHttpRequest();
// set the request method and data file
elbe.open('GET', encodeURI("js/mapelbe.geojson"));
//specify what must be done with the geojson data to the layer when request is succesfull
elbe.onload = function() {

  if (elbe.readyState === 4) {
      // add the json data to the geojson layer we created before!
      elbelayer.addData(JSON.parse(elbe.responseText));
    } else {
      alert('Request failed.  Returned status of ' + elbe.status);
    }
};

elbe.send();

//create a empty geojson layer
var elbelayer = L.geoJson(null,{
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(map);
 // new Http Request
var elbe = new XMLHttpRequest();
// set the request method and data file
elbe.open('GET', encodeURI("js/mapelbe.geojson"));
//specify what must be done with the geojson data to the layer when request is succesfull
elbe.onload = function() {
  if (elbe.readyState === 4) {
      // add the json data to the geojson layer we created before!
      elbelayer.addData(JSON.parse(elbe.responseText));
    } else {
      alert('Request failed.  Returned status of ' + elbe.status);
    }
};
// send the request
elbe.send();
