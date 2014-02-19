var icm = angular.module('icm', ["ui.router",'ui.bootstrap',"leaflet-directive"])
    .run(
      [        '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ui-sref-active="active }"> will set the <li> // to active whenever
        // 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      
      }])
    .config(
        [          '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
  
  
      $urlRouterProvider
       

      //bij foute url stuur naar het begin
        .otherwise("/");
      
      $stateProvider

        // Hier moet IAAA stuff komen, maar voorlopig moet je een username invullen voor
        // COW
        .state("login", {
            url: "/",
            views: {
                'main': {
                    templateUrl: "templates/login.html",
                    controller: "LoginCtrl"
                }
            }
        })

          ////////////////
          // Incidenten //
          ////////////////

        .state('incidenten', {
            // Dit is een lijst met alle beschikbare incidenten
            url: "/incidenten",
            views: {
              'main@': {
                templateUrl: "templates/incidenten.html",
                // zorg dat de scope, state en de incidenten door worden gegeven aan de
                // controller
                controller: 'IncidentenCtrl'
                }
            }
        })

          ///////////////////////////
          // Incidenten > Incident //
          ///////////////////////////
        
        .state('incidenten.incident', {
            // With abstract set to true, that means this state can not be explicitly activated.
            // It can only be implicitly activated by activating one of it's children.
            abstract: true,
            url: '/:incidentID'
        })

          //////////////////////
          // Incident > Beeld //
          //////////////////////
        

        .state('incidenten.incident.beeld', {
            url: "/:beeldType",
            views: {

              // So this one is targeting the unnamed view within the parent state's template.
              'main@': {
                templateUrl: "templates/beeld.html",
                controller: 'BeeldCtrl'
                },
               'sidebar@': {
                templateUrl: "templates/sidebar/beeld.html"
                }
            }
        })

          ///////////////////
          // Beeld > Kaart //
          ///////////////////
        

        .state('incidenten.incident.beeld.kaart', {
            url: "/kaart",
            views: {

              // So this one is targeting the unnamed view within the parent state's template.
              'main@': {
                templateUrl: "templates/kaart.html"
                },
               'sidebar@': {
                templateUrl: "templates/sidebar/kaart.html"
                }
            }
        })

          ///////////////////
          // Beeld > Text //
          ///////////////////
        

        .state('incidenten.incident.beeld.text', {
            url: "/text",
            views: {

              // So this one is targeting the unnamed view within the parent state's template.
              'main@': {
                templateUrl: "templates/text.html"
                },
               'sidebar@': {
                templateUrl: "templates/sidebar/text.html"
                }
            }
        });       
    }]);


