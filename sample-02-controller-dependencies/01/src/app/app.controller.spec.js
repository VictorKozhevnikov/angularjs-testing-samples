describe('app controller', () => {
    const expectedCacheContents = {};
    let appController;
    
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
        inject(['$controller', function($controller) {
            appController = $controller('appController');
        }]);
    });

    it('should get cache contents', () => {
        expect(appController.cacheData).toBe(expectedCacheContents);
    });
});
