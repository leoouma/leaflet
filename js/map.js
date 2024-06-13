var map = L.map("map").setView([-0.3598, 34.7262], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let data = [
  {
    title: "FIFA World Cup 2022",
    description: "Lusail Stadium; Qatar",
    lat: 25.4209,
    lon: 51.4904,
  },
  {
    title: "Olympics 2021",
    description: "Japan National Stadium; Tokyo, Japan",
    lat: 35.6779,
    lon: 139.7145,
  },
  {
    title: "Tour De France 2021",
    description: "Champs-Élysées; Paris, France",
    lat: 48.870502,
    lon: 2.304897,
  },
  {
    title: "The Super Bowl 2021",
    description: "Raymond James Stadium; Tampa, Florida",
    lat: 27.9759,
    lon: -82.5033,
  },
  {
    title: "Wimbledon 2021",
    description: "All England Club; London, England",
    lat: 51.4343,
    lon: 0.2145,
  },
  {
    title: "Rugby World Cup 2021",
    description: "Eden Park; Auckland, New Zealand",
    lat: -36.87166318,
    lon: 174.740163706,
  },
];

var marker = L.marker([-0.3598, 34.7262])
  .addTo(map)
  .bindPopup("Karabondi Apida<br> Where yours trully attended his first school")
  .openPopup();

var marker2 = L.marker([-0.4425, 34.6225])
  .addTo(map)
  .bindPopup("Omboga Seconadry <br> Second School upto 2005")
  .openPopup();

var marker3 = L.marker([35.6779, 139.7145])
  .addTo(map)
  .bindPopup("Olympics 2021<br>Japan National Stadium; Tokyo, Japan")
  .openPopup();
data.forEach(function (item) {
  var marker = L.marker([item.lat, item.lon])
    .addTo(map)
    .bindPopup(item.title + "<br>" + item.description)
    .openPopup();
});
