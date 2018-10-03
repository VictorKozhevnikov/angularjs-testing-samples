describe('Cache contents component', () => {
    const expectedCacheContents = {
        a: 'apricot',
        b: 'banana',
        c: 'carrot'
    };
    let testElement;
    
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
});
