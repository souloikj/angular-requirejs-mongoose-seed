angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

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

}]);
