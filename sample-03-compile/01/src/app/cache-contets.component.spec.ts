describe('Cache contents component', () => {
    
    beforeEach(() => {
        module('sampleApp');
    });

    beforeEach(() => {
        module($provide => {
            $provide.factory('cacheService', () => ({
                getEverything: () => expectedCacheContents
            }))
        })
    })

    beforeEach(() => {

    });
});
