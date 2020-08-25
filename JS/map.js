let nantes =[47.2186371,-1.5541362];
//création de la map    
let map = L.map("map").setView(nantes,10);
//création du calque image
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',{
    maxZoom:22
}).addTo(map);

//ajout d'un markeur
let marker = L.marker (nantes).addTo(map);
// ajout de Poppup
marker.bindPopup("<b>Bienvenue à Nantes !</b>");