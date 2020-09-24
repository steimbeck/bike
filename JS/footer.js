

class FooterController {
    constructor(onEnd) {
        this.bookDate = null;
        this.bookedStation = null;
        this.view = new FooterView()
        this.play = this.play.bind(this)
        this.onEnd = onEnd
    }

    setBookDate(date) { // millisecondes
        this.bookDate = date;
    }

    setBookedStation(station) {
        this.bookedStation = station
    }

    play() {
        const nbMinMax = 1
        const now = Date.now()
        const diffDate = now - this.bookDate
        this.view.render(diffDate);
        if (diffDate > nbMinMax * 1000 * 60) {
            
            return
                    }
        //setInterval(this.play, 1000)
 
    
    }
    

    }

    

class FooterView {
    render (diffDate) {
        console.log(diffDate)
        const minutes = Math.round(diffDate / 1000 / 60)
        const secondes = Math.round((diffDate / 1000) % 60)
       
        document.getElementById("infos").textContent = (`Votre réservation est disponible à l'adresse:  durant ${minutes} minutes et ${secondes} secondes`);
        this.play = document.getElementById('timer');
        let storageFirstName =localStorage.setItem('firstname','firstname');
        let storageName =localStorage.setItem('lastName','LastName');
        let storageStation =localStorage.setItem('station','station');
    }
}










