define([
    'angular'
], function(angular) {
    'use strict';

    angular.module('app.views.controller.businessAdd', [])
        .controller('BusinessAddController', function($scope) {
            $scope.tagline = 'Let\'s add a business!';
        });
});
