const [latitude, longitude] = campground.geometry.coordinates;
const map = L.map("map").setView([longitude, latitude], 13);

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([longitude, latitude]).addTo(map);
marker.bindPopup(`<h3>${campground.title}</h3><p>${campground.location}</p>`).openPopup();