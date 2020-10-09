class FooterController {
    constructor(onEnd) {
        this.bookDate = JSON.parse(sessionStorage.getItem('lastBook'));
        this.bookedStation = JSON.parse(sessionStorage.getItem('selectedStation'))||{ };
        this.view = new FooterView()
        this.play = this.play.bind(this)
        this.onEnd = onEnd
        this.play()
        
    }

    setBookDate(date) { // millisecondes
        this.bookDate = date;
    }

    setBookedStation(station) {
        this.bookedStation = station;
    }

    play() {
        const nbMinMax = 20
        const now = Date.now()
        const diffDate = now - this.bookDate
        this.bookedStation = JSON.parse(sessionStorage.getItem('station'))||{}
        
        if (diffDate > nbMinMax * 1000 * 60) {
            this.view.clear()
            return
                    }

     this.view.render(nbMinMax * 60 * 1000 - diffDate,this.bookedStation)
        this.nextPlay = setTimeout(this.play,1000)
    }
    clear(){
        clearTimeout(this.nextPlay)
        this.view.clear()
    }

    }

    