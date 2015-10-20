require.config({
    baseUrl: 'public/bower/',
    paths: {
        'angular': 'angular/angular',
        'angular-route': 'angular-route/angular-route',
        'angular-animate': 'angular-animate/angular-animate',
        'angular-resource': 'angular-resource/angular-resource',
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': ['angular'],
        'angular-animate': ['angular'],
        'angular-resource': ['angular']
    }
});

define('app', ['angular', 'angular-route', 'angular-animate', 'angular-resource'],
    function(angular) {
        var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngResource']);
        return app;
    });
