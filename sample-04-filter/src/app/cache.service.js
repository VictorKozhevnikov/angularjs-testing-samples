angular.module('sample01App').factory('cacheService', function () {
    const cache = {};

    return {
        get: (key) => cache[key],
        put: (key, value) => {
            cache[key] = value;
        },
        getEverything: () => cache
    }
});
