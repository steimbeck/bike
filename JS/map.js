class Mapview {
        constructor(onClick) {
            this.onClick = onClick
        }
        render(stations) {
            let firstLocation = [47.2186371, -1.5541362];
    
            let map = L.map("map").setView(firstLocation, 15);
    
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                maxZoom: 20
            }).addTo(map) 
    
          
    
            let greenIcon = new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
    
            let orangeIcon = new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
            let redIcon = new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
    
    
    
            for (let {
                    position: {
                        lat,
                        lng
                    },
                    ...station
                } of stations) {
                L.marker([lat, lng], {
                    icon: greenIcon
                }).on("click", () => this.onClick(station)).addTo(map).bindPopup( `Station :   ${station.name},<br><br>  Adresse: ${station.address},<br><br> Nombre de vélos disponibles  : ${station.available_bikes}`)

    
    
                  if (station.available_bikes === 0) {
    
                    L.marker([lat, lng], {
                        icon: redIcon
                    }).on("click", () => this.onClick(station)).addTo(map).bindPopup( `Station :   ${station.name},<br><br>  Adresse: ${station.address},<br><br> Nombre de vélos disponibles  : ${station.available_bikes}`)

                    
    
                } else if (station.available_bikes < 5){
    
                        L.marker([lat, lng], {
                            icon: orangeIcon
                        }).on("click", () => this.onClick(station)).addTo(map).bindPopup( `Station :   ${station.name},<br><br>  Adresse: ${station.address},<br><br> Nombre de vélos disponibles  : ${station.available_bikes}`)

                    
                };
    
            }
    
    
        }
    
    
    }
    
    
    
    class MapController {
    
        constructor(whenStationSelected = () => undefined) {
    
            this.stations = [];
    
            this.view = new Mapview(
                (station) => whenStationSelected(station)
            )
    
            let url = "https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=6d02f7b159f2738f2e25fdc25a261b8d849ec07e"
    
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.stations = data;
                    this.view.render(this.stations)
                });
    
        }
    
    
    }
    
    
    
    
    