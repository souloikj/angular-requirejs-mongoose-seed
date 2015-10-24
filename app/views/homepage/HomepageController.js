define([
    'angular'
], function(angular) {
    'use strict';

    angular.module('app.views.controller.homePage', [])
        .controller('HomepageController', function($scope) {
            $scope.tagline = 'This is the homepage';
        });
});
