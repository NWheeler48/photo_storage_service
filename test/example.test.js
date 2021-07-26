import assert from 'assert';

// AN Example of how to use Mocha test.
describe('Simple Math Test', () => {
    it('should return 2', () => {
        assert.strictEqual(1 + 1, 2);
    });
    it('should return 3', () => {
        assert.strictEqual(3 * 3, 9);
    })
});