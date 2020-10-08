class CanvasView {
    constructor(onConfirm) {
        this.onConfirm = onConfirm
    }
    render() {
        event.preventDefault()
        const confirm = document.getElementById("confirmation")
        confirm.addEventListener("click", this.onConfirm)
        document.getElementById("beware").textContent = "N'oubliez pas de signer et de confirmer la réservation"
         document.getElementById("bsign").style = "display : block";
    }
}