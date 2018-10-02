angular.module('sampleApp').factory('cacheService', function () {
    const cache = {};

    // cache[1] = 'abc';
    // cache[2] = 'def';
    // cache[3] = 'ghi';

    return {
        get: (key) => cache[key],
        put: (key, value) => {
            cache[key] = value;
        },
        getEverything: () => cache
    };
});
