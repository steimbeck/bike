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
