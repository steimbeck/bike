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
class DiapoView {
    constructor({domElement, onPause = () => undefined, onPlay = () => undefined, onNext, onPrevious}) {
        this.domElement = domElement;
        this.imageElement = document.createElement("img")
        this.titleElement = document.createElement("h2")
        this.descriptionElement = document.createElement("p")
        this.domElement.innerHTML = ""
        this.domElement.appendChild(this.imageElement)
        this.domElement.appendChild(this.titleElement)
        this.domElement.appendChild(this.descriptionElement)
        this.domElement.appendChild(new ButtonView({
            title :"Pause",
            onClick: onPause
        }).render())
    
        this.domElement.appendChild(new ButtonView({
            title: "Play",
            onClick: onPlay
        }).render())
        
    }

    render({imgSrc, title, description}) {
        this.imageElement.src = imgSrc;
        this.imageElement.alt = title;
        this.titleElement.textContent = title;
        this.descriptionElement.textContent = description;
        

        
        return this.domElement
    }


}

class ButtonView {
    constructor({title, onClick,}) {
        this.title = title;
        this.onClick = onClick;
    }
    render() {
        const buttonElement = document.createElement("button")
        buttonElement.textContent = this.title;
        buttonElement.addEventListener("click", this.onClick);
        buttonElement.classList.add("nav")
        return buttonElement;
    }
}

// Modèles
class Diapo {
    constructor({title, description, imgSrc}) {
        this.title = title;
        this.description = description;
        this.imgSrc = imgSrc;
    }
}

class DiapoList {
    constructor() {
        this.diapos = []
    }
    addDiapo(diapo) {
        if (!diapo.title) throw new Error("attention, il faut un titre à votre diapo")
        this.diapos.push(diapo)
    }
}

new DiapoController()


