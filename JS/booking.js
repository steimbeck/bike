
    class FormulaireController {
        constructor(onConfirm) {
            this.firstName = ""
            this.lastName = ""
            this.view = new FormulaireView(
                (form) => {
                    this.firstName = form.firstName.value
                    this.lastName = form.lastName.value
                    this.view = new CanvasView(
                        () => onConfirm({
                            firstName: this.firstName,
                            lastName: this.lastName
                        })
                    )
                    this.view.render();
                }
            )
            this.view.render()
        }
    }
    
    class FormulaireView {
        constructor(onSubmit) {
            this.onSubmit = onSubmit
        }
        render() {
            const form = document.getElementById('bookingForm')
            document.getElementById('submit').addEventListener('click', () => this.onSubmit(form))
            form.firstName.value=localStorage.getItem("firstName")
            form.lastName.value=localStorage.getItem("lastName")
           
        }
    }
    
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
    

    
    const info = new InfoStationController()
    const map = new MapController((station) =>{
        sessionStorage.setItem('selectedStation', JSON.stringify(station));
        info.view.render(station)

    })
    const form = new FormulaireController(({
        firstName,
        lastName
    }) => {
        alert(`${firstName} ${lastName} confirme la réservation `)
        event.preventDefault()
                const timer = new FooterController;
                
                const selectedStation = sessionStorage.getItem('selectedStation')
                
                const form2 = document.querySelector("#form");
                const name = document.getElementById("lastName").value = localStorage.getItem("lastName");
                const surName= document.getElementById("firstName").value = localStorage.getItem("firstName");
                localStorage.setItem('firstName', firstName);
                localStorage.setItem('lastName', lastName);
                sessionStorage.setItem('station', selectedStation);
                const bookDate = Date.now()
                timer.setBookDate(bookDate)
                sessionStorage.setItem('lastBook', bookDate)
                timer.play();
                console.log(name);
                console.log(surName);
                
        
        
    })
    