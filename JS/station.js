
class InfoStationView {
    render(station) {
        document.getElementById("detail").textContent = "Détail de la station"
        document.getElementById("infostation").style.cssText="border:2px solid black;background-color: rgba( 58, 221, 180, 0.195 );"
        document.getElementById("stationName").textContent =  `Station :   ${station.name}`
        document.getElementById("status_station").textContent = `Status:  ${station.status}` 
        document.getElementById("stationAddress").textContent = `Adresse: ${station.address}`
        document.getElementById("bike_space").textContent = `Nombre d'emplacements : ${station.bike_stands}`
        document.getElementById("number_bike").textContent = `Nombre de vélos disponibles  : ${station.available_bikes}`
          
    }
}