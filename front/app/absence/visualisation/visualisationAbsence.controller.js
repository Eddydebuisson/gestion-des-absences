
export default class VisualisationAbsenceController {
    constructor(visualisationAbsenceService, connexionService) {
        this.visualisationAbsenceService = visualisationAbsenceService;
        this.connexionService = connexionService;
    }

    $onInit() {
        this.order = "dateDebutOriginal";
        this.triInverse = false;
		this.refreshView()
    }
	
	refreshView(){
        this.visualisationAbsenceService.findAll().then(absences => this.absences = absences);
        this.connexionService.getCongesPayesEtRttFromBase()
            .then(result => {
                let res = result.data
                this.congesPayes = res.congesPayes;
                this.rtt = res.rtt;

                this.connexionService.setCongesPayes(this.congesPayes);
                this.connexionService.setRtt(this.rtt);
            });
	}

    updateOrderEtTri(order) {
        this.order = order;
        this.triInverse = !this.triInverse;
    }

    // Partie suppression de l'absence
    supprimerAbsence(idAbsence, dateDebut, dateFin, type) {
        this.visualisationAbsenceService.supprimerAbsence(idAbsence, dateDebut, dateFin, type).result
			.then(() => {
				this.refreshView()
		})
    }

    // Partie modification de l'absence
    modification(id, dateDebut, dateFin, type, motif) {
        this.visualisationAbsenceService.modification(id, dateDebut, dateFin, type, motif);
    }
}