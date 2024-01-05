const map = L.map("map").setView([40.66995747013945, -103.59179687498357], 3);

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const markers = L.markerClusterGroup();

for (let i = 0; i < campgrounds.length; i++) {
    const [latitude, longitude] = campgrounds[i].geometry.coordinates;
    const title = campgrounds[i].properties.popUpMarkup;
    const marker = L.marker(new L.LatLng(longitude, latitude), {
        title: title
    });
    marker.bindPopup(title);
    markers.addLayer(marker);
}

map.addLayer(markers);