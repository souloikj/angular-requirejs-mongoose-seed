// public/js/services/NerdService.js
angular.module('BusinessServices', [])
.factory('Business', ['$http', function($http) {

    return {
        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create: function(business) {
            return $http.post('/api/test', business);
        },

        getByCategory: function(category) {
            return $http.get('/api/nerds/' + category);
        },
    }

}]);
