class FooterView {
    render (rest,station) {
        
        const minutes = Math.floor(rest / 1000 / 60)
        const secondes = Math.floor((rest/ 1000) % 60)
       document.getElementById("infos").textContent = (`Votre réservation de la station ${station.name}  est disponible à l'adresse : ${station.address}  durant ${minutes} minutes et ${secondes} secondes`);
        document.getElementById("infos").classList.add("infos");
       
    }
    clear(){
        document.getElementById("infos").textContent = (" " );

    }
}

