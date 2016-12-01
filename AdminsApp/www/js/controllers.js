angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  // App Controller
})

.controller('addCauseCtrl', function ($scope, $stateParams, $ionicPopup, $kinvey) {

var store = $kinvey.DataStore.collection('Causes');

$scope.funding_goal = 50; 

$scope.name = "";
$scope.short = "";
$scope.detail = "";
$scope.remaining = $scope.funding_goal;
$scope.raised = 0;
$scope.image  = "6";
$scope.upVotes = 0;
$scope.downVotes = 0;

var funding_chage = 50;

$scope.change_funding = function (changed) {
  funding_change = changed;
}

$scope.addCause = function (name, short, detail) {
  console.log("function called");
  if (name && short && detail) {
    var funds = funding_change;
    var confirmPopup = $ionicPopup.confirm({
         title: 'Add Cause: ' + name,
         template: 'With Funding goal: $' + funds
       });

    confirmPopup.then(function(res) { 
      if(res) {
          console.log('here2');
          console.log(name, short, detail);
           var promise = store.save({
              name: name,
              short: short,
              detail: detail,
              goals: funding_change,
              remaining: funding_change,
              raised: 0,
              image: "3",
              upvote: 0,
              downvote: 0
        }).then(function onSuccess(entity) {
          console.log("here");
          console.log(entity);
          // ...
        }).catch(function onError(error) {
          console.log('fail');
          console.log(error);
          // ...
        });
         } else {
           console.log('You are not sure');
         }
       });

  } else {
  var alertPopup = $ionicPopup.alert({
         title: 'Please fill in all fields!',
         template: 'They are all required.'
       });
    alertPopup.then(function(res) {
   });
 }
  }

})

.controller('feedDetailCtrl', function ($scope, $stateParams, $kinvey) {
  $scope.cause = {};
  $scope.init = function () {
  $scope.id = $stateParams.id;
  console.log($scope.id);
  var store = $kinvey.DataStore.collection('Causes');
  var stream = store.findById($scope.id);
  stream.subscribe(function onNext(entity) {
    $scope.cause = entity;
    console.log(entity);
    console.log($scope.cause);
    $scope.percent_raised = entity.raised / entity.goals * 100;
}, function onError(error) {
  console.log(error);
}, function onComplete() {
  console.log('onComplete');
});
}
})

.controller('BooksCtrl', function($scope, $kinvey, $ionicPopup) {
  var store = $kinvey.DataStore.collection('Causes');
  store.useDeltaFetch = false;

  $scope.refresh = function() {
    store.find().subscribe(function(books) {
      $scope.books = books;
      $scope.$digest();
    });
  };
  $scope.removeCause = function (_id, name) {
    var confirmPopup = $ionicPopup.confirm({
         title: 'Deleting Cause: ' + name,
         template: 'Are you sure?'
       });

    confirmPopup.then(function(res) { 
      if(res) {
          console.log('here2');
    var promise = store.removeById(_id)
    promise = promise.then(function onSuccess(result) {
  // ...
    console.log(result);
    $scope.refresh();
    }).catch(function onError(error) {
  // ...
    console.log(error);
  });
  }
})
  }
  $scope.$on('$ionicView.enter', function() {
    $scope.books = [];
    $scope.refresh();
  });
})


.controller('editCauseCtrl', function($scope, $stateParams, $kinvey) {
 $scope.cause = {};
  $scope.init = function () {
  $scope.id = $stateParams.id;
  console.log($scope.id);
  var store = $kinvey.DataStore.collection('Causes');
  var stream = store.findById($scope.id);
  stream.subscribe(function onNext(entity) {
    $scope.cause = entity;
    console.log(entity);
    console.log($scope.cause);
    $scope.percent_raised = entity.raised / entity.goals * 100;
}, function onError(error) {
  console.log(error);
}, function onComplete() {
  console.log('onComplete');
});
}

});