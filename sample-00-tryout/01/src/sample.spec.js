describe('sample test suite', () => {
    
    it('should pass', () => {
        // nothing to do here
    });

    it('should pass', () => {
        expect(true).toBeTruthy();
    });

    it('should fail', () => {
        fail();
    });

    it('should fail', () => {
        expect('something').toBe('something else');
    });

});
