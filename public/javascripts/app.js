var myApp = angular.module('agrevidApp',['ui.router']);

myApp.config(function($stateProvider){

    var homeState = {
        name : 'accueil',
        url : '/accueil',
        controller : 'accueilController'

    };


    var pageAdministrationState = {
        name : 'administration',
        url : '/administration',
        templateUrl : 'administration.html',
        controller : 'administrationController'
    };




    $stateProvider.state(homeState);
    $stateProvider.state(pageAdministrationState);

});


/*Controllers*/

myApp.controller("administrationController",["$scope",function ($scope) {
}]);

myApp.controller("accueilController",["$scope",function ($scope) {
}]);