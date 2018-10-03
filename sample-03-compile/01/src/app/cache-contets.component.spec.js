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

    beforeEach(() => {
        inject(['$compile', '$rootScope', function($compile, $rootScope) {
            testElement = $compile('<cache-contents></cache-contents>')($rootScope);
            $rootScope.$digest();
        }]);
    });

    it('displays every item', () => {
        const numberOfItems = testElement.find('div').length;

        expect(numberOfItems).toBe(3);
    })

});
