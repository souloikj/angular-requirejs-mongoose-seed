define([
    'app'
], function(app) {
    app.controller('HomepageController', ['$scope', function($scope) {
        $scope.tagline = 'This is the homepage!';
    }]);
});
