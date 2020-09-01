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
            title: "diapo 1",
            description: "Ma première diapo",
            imgSrc:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80",
            
        }))
        this.diapoList.addDiapo(new Diapo({
            title: "diapo 2",
            description: "Ma deuxième diapo",
            imgSrc:"image/bicloo20.jpg",
            
        }))
        this.diapoList.addDiapo(new Diapo({
            title: "diapo 3",
            description: "Ma troisème diapo",
            imgSrc:"https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            
            
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
        this.interval=0
        this.interval=setInterval(this.next.bind(this), 5000);
    }
    pause() {

        clearInterval(this.interval);
    }
    next() {
        if (this.currentIndex + 1 === this.diapoList.diapos.length) {
            this.currentIndex = 0
        } else {
            this.currentIndex += 1;
        }
        this.displayCurrent()
    }
    previous() {
        
         
        if (this.currentIndex  <= 0) {
            this.currentIndex  === (this.diapoList.diapos.length)
        } else {
            this.currentIndex --;
        }

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


