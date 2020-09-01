class Mapview{

   render(map,lat,lng,zoom){
            this.map = map;
            this.latitude = lat;
            this.longitude = lng;
            this.zoom = zoom;


    }
}

let firstlocation =[47.2186371,-1.5541362];
//création de la map    
map = L.map("map").setView(firstlocation,13);
//création du calque image
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',{
    maxZoom:20
}).addTo(map);

//ajout d'un markeur
//let marker = L.marker (nantes).addTo(map);
// ajout de Poppup
//marker.bindPopup("<b>Bienvenue à Nantes !</b>");

let url ="https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=6d02f7b159f2738f2e25fdc25a261b8d849ec07e"

fetch(url).then (response=> response.json())
        .then( data =>{
L.geoJSON(data).addTo(map)
        });
    
    

       
        