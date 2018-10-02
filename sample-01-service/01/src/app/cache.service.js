angular.module('sampleApp').factory('cacheService', function () {
    const cache = {};

    return {
        get: (key) => cache[key],
        put: (key, value) => {
            cache[key] = value;
        }
    }
});
