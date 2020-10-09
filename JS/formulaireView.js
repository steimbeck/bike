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
