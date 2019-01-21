var map = L.geoJson(null,{
  pointToLayer: function (feature, latlng) {
    return L.circleMarkers (latlng, geojsonMarkerOptions2);
  }
}).addTo(map);

var xhttp2 = new XMLHttpRequest();

xhttp2.open ('GET',
encodeURI ("mapelbe.geojson"));

xhttp2.onload = function () {
  if (xhttp2.readyState === 4) {

      map.addData(JSON.parse(xhttp2.responseText));
  } else {
    alert('Request Failed. Return status of' + xhttp2.status);
  }
};

xhttp2.send();
