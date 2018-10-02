describe('cache service', () => {
    let service;

    beforeEach(() => {
        module('sampleApp');
    });

    beforeEach(() => {
        inject(['cacheService', function(cacheService) {
            service = cacheService;
        }]);
    });

    it('should get what you put into it', () => {
        const item = {};
        const key = 1;
        service.put(key, item);
        const retrievedItem = service.get(key);
        expect(retrievedItem).toBe(item);
    })

    
});
