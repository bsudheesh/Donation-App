angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('causeFeed', {
    url: '/cause_feed',
    templateUrl: 'templates/causeFeed.html',
    controller: 'causeFeedCtrl'
  })

  .state('hUAdminLogin', {
    url: '/Login',
    templateUrl: 'templates/hUAdminLogin.html',
    controller: 'hUAdminLoginCtrl'
  })

  .state('addCause', {
    url: '/add_cause',
    templateUrl: 'templates/addCause.html',
    controller: 'addCauseCtrl'
  })

  

  .state('editCause', {
    url: '/edit_cause/:id',
    templateUrl: 'templates/editCause.html',
    controller: 'editCauseCtrl'
  })

  .state('feedDetail', {
    url: '/detail/:id',
    templateUrl: 'templates/feedDetail.html',
    controller: 'feedDetailCtrl'
  })

$urlRouterProvider.otherwise('/Login')

  

});