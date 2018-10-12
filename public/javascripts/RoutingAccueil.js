var myApp = angular.module('agrevidApp',['ui.router']);

myApp.config(function($stateProvider){

    var homeState = {
        name : 'accueil',
        url : '/accueil',
    };


    var page1State = {
        name : 'testRouting',
        url : '/testRouting',
        templateUrl : 'testRouting.html',
    };




    $stateProvider.state(homeState);
    $stateProvider.state(page1State);

});
