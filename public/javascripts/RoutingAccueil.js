var myApp = angular.module('routeApp',['ui.router']);



myApp.config(function($stateProvider){

    var homeState = {
        name : 'accueil',
        url : '/accueil',
        template : '<h3>Page d\'acceuil</h3>'
    };


    var page1State = {
        name : 'inscription',
        url : '/inscription',
        templateUrl : 'inscription.html',
    };




    $stateProvider.state(homeState);
    $stateProvider.state(page1State);





});
