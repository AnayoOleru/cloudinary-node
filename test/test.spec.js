import assert from 'assert';
describe('Test Mocha', function () {
 it('should return number of charachters in a string', () => {
        assert.equal("Hello".length, 5);
    });
 it('should return first charachter of the string', () => {
        assert.equal("Hello".charAt(0), 'H');
    });
});