// Mes contrôles      
class DiapoController {
    constructor() {
        this.view = new DiapoView({
            domElement: document.getElementById('diapo'),
            onPause: this.pause.bind(this),
            onPlay: this.play.bind(this)
        })
        this.diapoList = new DiapoList();
        this.diapoList.addDiapo(new Diapo({
            title: "Bienvenue à Nantes  Roulez écolo sans pression",
            description: "Venez profiter de nos vélos dernière génération",
            imgSrc:"image/bicloo20.jpg",
            
        }))
        this.diapoList.addDiapo(new Diapo({
            title: "Choisissez la station la plus proche",
            description: "Cliquez sur la borne souhaitée",
            imgSrc:"image/Station_velo.png",
            
        }))
        this.diapoList.addDiapo(new Diapo({
            title: "Remplissez le formulaire",
            description: "Aprés la signature et la confirmation vous disposez de 20 minutes pour récuperer votre vélo",
            imgSrc:"image/Form_canvas.png",
            
            
        }))
        const previous =document.getElementById("previous")
        const next =document.getElementById("next");
        previous.addEventListener("click",this.previous.bind(this));
        next.addEventListener("click", this.next.bind(this));

        

     

        this.currentIndex = 0
        this.displayCurrent();
        this.initializeKeyEvents();
        this.play();
        
    }

    

    initializeKeyEvents() {
        window.addEventListener("keydown", (evt) => {
            if (evt.key === "ArrowRight") {
                this.next()
            }
            if (evt.key === "ArrowLeft") {
                this.previous()
            }
        })
    }

    play() {
        
        this.interval=setInterval(this.next.bind(this), 5000);
    }
    pause() {

        clearInterval(this.interval);
    }
    next() {
        if (this.currentIndex + 1 === this.diapoList.diapos.length) {
            this.currentIndex = 0
        } else {
            this.currentIndex += 1
        }
        this.displayCurrent()
    }
    previous() {
        
         
       this.currentIndex--;
       if (this.currentIndex < 0) {
        this.currentIndex = this.diapoList.diapos.length-1;
    };
        this.displayCurrent()
    }
    displayCurrent() {
        this.view.render(
            this.diapoList.diapos[this.currentIndex]
        )
    }
}
 
// Ma vue



