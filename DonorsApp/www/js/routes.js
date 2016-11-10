angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('listOfDonations', {
    url: '/page1',
    templateUrl: 'templates/listOfDonations.html',
    controller: 'listOfDonationsCtrl'
  })

  .state('howardSWifiProblem', {
    url: '/page2',
    templateUrl: 'templates/howardSWifiProblem.html',
    controller: 'howardSWifiProblemCtrl'
  })

  .state('donationWifi', {
    url: '/page3',
    templateUrl: 'templates/donationWifi.html',
    controller: 'donationWifiCtrl'
  })

  .state('thankYou', {
    url: '/page4',
    templateUrl: 'templates/thankYou.html',
    controller: 'thankYouCtrl'
  })

  .state('cSLabPrinterProblem', {
    url: '/page5',
    templateUrl: 'templates/cSLabPrinterProblem.html',
    controller: 'cSLabPrinterProblemCtrl'
  })

  .state('hUDONATION', {
    url: '/page6',
    templateUrl: 'templates/hUDONATION.html',
    controller: 'hUDONATIONCtrl'
  })

  .state('donationPrinter', {
    url: '/page7',
    templateUrl: 'templates/donationPrinter.html',
    controller: 'donationPrinterCtrl'
  })

$urlRouterProvider.otherwise('/page6')

  

});