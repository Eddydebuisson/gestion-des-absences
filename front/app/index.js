
// Basic/Core
import angular from 'angular'
import RouteModule from 'angular-route'
import 'bootstrap/dist/css/bootstrap.css'
import 'angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css'
import uiBootstrap from 'angular-ui-bootstrap'
import bootstrapCalendar from 'angular-bootstrap-calendar'
import { route } from './app.route'
import ngResource from "angular-resource"
import i18n from 'angular-i18n/angular-locale_fr-fr'
import jssha  from 'jssha'
import 'chart.js/dist/Chart.min.js'
import 'angular-chart.js/dist/angular-chart.js'


//Components
import AccueilComponent from './accueil/accueil.component'
import ConnexionComponent from './connexion/connexion.component'
import visualisationAbsenceComponent from "./absence/visualisation/visualisationAbsence.component"
import DemandeAbsenceComponent from './absence/demande/demandeAbsence.component'
import modifAbsenceComponent from './absence/modification/modificationAbsence.component'
import validationAbsenceComponent from './absence/validation/validationAbsence.component'
import histogrammeComponent from './rapport/histogramme/histogramme.component'
import planningAbsenceComponent from './absence/planning/planningAbsence.component'
import visualisationFerieComponent from "./ferie/visualisation/visualisationFerie.component"
import creationFerieComponent from './ferie/creation/creationFerie.component'
import modifFerieComponent from './ferie/modification/modificationFerie.component'
import vueDepJourCollabComponent from "./vueSynthetiques/vueDepartementJourCollaborateur/vueDepJourCollab.component"
import rapportComponent from "./vueSynthetiques/choixRapports/rapport.component"

// Services
import apiUrls from "./utils/apiUrls.service"
import demandeAbsenceService from "./absence/demande/demandeAbsence.service"
import frontUrls from "./utils/frontUrls.service"
import connexionService from './connexion/connexion.service'
import visualisationAbsenceService from "./absence/visualisation/visualisationAbsence.service"
import suppressionAbsenceService from "./absence/visualisation/suppression/suppressionAbsence.service"
import modifAbsenceService from "./absence/modification/modificationAbsence.service"
import validationAbsenceService from "./absence/validation/validationAbsence.service"
import histogrammeService from './rapport/histogramme/histogramme.service'
import planningAbsenceService from "./absence/planning/planningAbsence.service"
import messageService from './accueil/message.service'
import visualisationFerieService from "./ferie/visualisation/visualisationFerie.service"
import creationFerieService from "./ferie/creation/creationFerie.service"
import modifFerieService from "./ferie/modification/modificationFerie.service"
import suppressionFerieService from "./ferie/visualisation/suppression/suppressionFerie.service"
import vueDepJourCollabService from "./vueSynthetiques/vueDepartementJourCollaborateur/vueDepJourCollab.service"

//Modules
import menuModule from './menu/menu.module'


angular.module('app', [RouteModule, ngResource, menuModule.name, uiBootstrap, bootstrapCalendar, 'ngLocale', 'chart.js'])

    .value('jssha', jssha)
    .constant("apiUrls", apiUrls)

    //Services
	.service('connexionService', connexionService)
    .service("visualisationAbsenceService", visualisationAbsenceService)
	.service("demandeAbsenceService",demandeAbsenceService)
    .service("modifAbsenceService",modifAbsenceService)
    .service("validationAbsenceService",validationAbsenceService)
    .service("suppressionAbsenceService", suppressionAbsenceService)
    .service("histogrammeService", histogrammeService)
    .service("planningAbsenceService",planningAbsenceService)
	.service("messageService", messageService)
    .service("visualisationFerieService", visualisationFerieService)
	.service("creationFerieService",creationFerieService)
    .service("modifFerieService",modifFerieService)
    .service("suppressionFerieService", suppressionFerieService)
    .service("vueDepJourCollabService", vueDepJourCollabService)

    //Components
    .component('accueilComponent', AccueilComponent)
    .component('demandeAbsenceComponent',DemandeAbsenceComponent)
    .component('connexionComponent', ConnexionComponent)
    .component("visualisationAbsenceComponent", visualisationAbsenceComponent)
    .component('modifAbsenceComponent',modifAbsenceComponent)
    .component('validationAbsenceComponent',validationAbsenceComponent)
    .component('histogrammeComponent',histogrammeComponent)
    .component('planningAbsenceComponent',planningAbsenceComponent)
    .component("visualisationFerieComponent", visualisationFerieComponent)
    .component('modifFerieComponent',modifFerieComponent)
    .component('creationFerieComponent',creationFerieComponent)
    .component("vueDepJourCollabComponent", vueDepJourCollabComponent)
    .component('rapportComponent', rapportComponent)

    //manage connections and routes
    .config(route)
	.config(['uibDatepickerPopupConfig', function (config) {
		config.showButtonBar = false;
	}])

    .run(['$rootScope', '$location', 'connexionService', function ($rootScope, $location, connexionService) {
    $rootScope.$on('$routeChangeStart', function (event) {
        if (!connexionService.isConnecte()) {
            $location.path('/connexion');
        }
    });
}]);