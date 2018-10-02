describe('cache service', () => {
    let service;

    beforeEach(() => {
        module('sample01App');
    });

    beforeEach(() => {
        inject(['cacheService', function(cacheService) {
            service = cacheService;
        }]);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    })

    
});
