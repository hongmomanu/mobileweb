angular.module('starter', [ 'ngRoute', 'starter.controllers'])



    .config(function($routeProvider) {
        /*$stateProvider

            .state('', {
                url: '/',
                //abstract: true,
                //templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            });


        $urlRouterProvider.otherwise('');*/

        $routeProvider
            .when('/', {
                templateUrl: 'templates/main.html',
                controller: 'AppCtrl'
            });
    });