
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
    