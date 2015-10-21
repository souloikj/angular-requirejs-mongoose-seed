define([
    'angular',
    'views/homepage/HomepageController',
    'views/businessAdd/BusinessAddController'
], function(angular, HomepageController, BusinessAddController) {
    var app = angular.module('sampleApp', [
        'app.views.controller.homePage',
        'app.views.controller.businessAdd',
        'ngRoute',
        'ngAnimate',
        'ngResource']);
    app.init = function() {
        angular.bootstrap(document, ['sampleApp']);
    };

    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'app/views/homepage/templates/Homepage.html',
            controller: 'HomepageController'
        })
        .when('/join', {
            templateUrl: 'app/views/businessAdd/templates/BusinessAdd.html',
            controller: 'BusinessAddController'
        });

        $locationProvider.html5Mode(true);
    });

    return app;
});
