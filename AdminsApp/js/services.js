angular.module('app.services', ['firebase'])

.factory('CauseFactory', [function($firebase){
	var ref = new Firebase("https://hu-donation.firebaseio.com/");
	return $firebaseArray(ref);
}])

.service('BlankService', [function(){

}]);