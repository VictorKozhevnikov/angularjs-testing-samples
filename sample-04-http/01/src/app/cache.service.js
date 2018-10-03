angular.module('sampleApp').factory('cacheService', ['$http', function ($http) {
    return {
        getEverything: () => $http.get('/some/url')
    };
}]);
