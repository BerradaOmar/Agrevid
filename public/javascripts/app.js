var myApp = angular.module('agrevidApp',['ui.router']);

myApp.config(function($stateProvider){

    var homeState = {
        name : 'accueil',
        url : '/accueil',
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