define([
    'angular',
    'angular-route',
    'angular-animate',
    'angular-resource'
], function(angular) {
    var app = angular.module('sampleApp', ['ngRoute', 'ngAnimate', 'ngResource']);
    app.init = function() {
        angular.bootstrap(document, ['sampleApp']);
    };

    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'app/views/homepage/templates/Homepage.html',
            controller: 'app/views/homepage/HomepageController'
        })
        .when('/join', {
            templateUrl: 'app/views/businessAdd/templates/BusinessAdd.html',
            controller: 'app/views/businessAdd/BusinessAddController'
        });

        $locationProvider.html5Mode(true);
    });

    return app;
});
