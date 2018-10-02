console.log('duration filter tests');

describe('duration filter', () => {
    let durationFilter;

    beforeEach(() => {
        module('sample01App');
    });

    beforeEach(inject(function($filter){
        durationFilter = $filter('duration');
    }));

    it('should format 60 min as 1h', () => {
        const result = durationFilter(60);
        expect(result).toBe('1h');
    })
});
