
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
