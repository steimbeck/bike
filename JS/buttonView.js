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