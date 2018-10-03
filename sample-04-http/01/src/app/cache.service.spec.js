describe('cache service', () => {
    let cacheService;
    let $httpBackend;

    const expectedResponse = {};

    beforeEach(() => module('sampleApp'));

    beforeEach(() => inject(['cacheService', '$httpBackend', function (service, httpBackend) {
        cacheService = service;
        $httpBackend = httpBackend;
    }]));

    it('should fetch data', (done) => {
        $httpBackend.when('GET', '/some/url').respond(200, expectedResponse);

        cacheService.getEverything().then(
            response => {
                expect(response.data).toEqual(expectedResponse)
                done();
            },
            () => fail()
        );

        $httpBackend.flush();
    })
});
