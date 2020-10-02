const info = new InfoStationController()
const map = new MapController((station) =>{
    sessionStorage.setItem('selectedStation', JSON.stringify(station));
    info.view.render(station)

})

