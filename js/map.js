var map = L.map("map").setView([-0.3598, 34.7262], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var marker = L.marker([-0.3598, 34.7262])
  .addTo(map)
  .bindPopup("Karabondi Apida<br> Where yours trully attended his first school")
  .openPopup();

var marker2 = L.marker([-0.4425, 34.6225])
  .addTo(map)
  .bindPopup("Omboga Seconadry <br> Second School upto 2005")
  .openPopup();
