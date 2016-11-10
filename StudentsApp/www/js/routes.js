angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('hUDonationAppStudents', {
    url: '/page1',
    templateUrl: 'templates/hUDonationAppStudents.html',
    controller: 'hUDonationAppStudentsCtrl'
  })

  .state('donationCampaign', {
    url: '/page2',
    templateUrl: 'templates/donationCampaign.html',
    controller: 'donationCampaignCtrl'
  })

  .state('confirmation', {
    url: '/page3',
    templateUrl: 'templates/confirmation.html',
    controller: 'confirmationCtrl'
  })

  .state('wifiProblem', {
    url: '/page4',
    templateUrl: 'templates/wifiProblem.html',
    controller: 'wifiProblemCtrl'
  })

  .state('welcome', {
    url: '/page5',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});