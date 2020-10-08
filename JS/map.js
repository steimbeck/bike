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
    
    
    
    
    