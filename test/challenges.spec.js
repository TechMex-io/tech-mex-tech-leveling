var funcs = require('../challenges');
var assert = require('assert');

describe('Tech-Mex Tech Leveling', function () {

  it('should find the longest word in a string', function () {
    const given = 'The quick brown fox jumped over the lazy dog';
    const expected = 'jumped';

    const longest = funcs.findLongestWord(given);

    assert.equal(expected, longest);
  });

  it('should deuplicate the array and add it to the end of itself', function () {
    const given = [1,2,3,4,5];
    const expected = [1,2,3,4,5,1,2,3,4,5];

    const duplciated = funcs.duplicate([1,2,3,4,5]);

    assert.deepEqual(expected, duplciated);
  });

  it('should take two number arguments and return their sum', function () {
    const given1 = 1;
    const given2 = 2;
    const expected = 3;

    const addTwoResult = funcs.addTwo(given1, given2);

    assert.equal(expected, addTwoResult);
  });

  it('should take one argument at a time and return their sum', function () {
    const given1 = 1;
    const given2 = 2;
    const expected = 3;

    const addTwoResult = funcs.addTwo(1)(2);

    assert.equal(expected, addTwoResult);
  });
});

  it('should verify a prime number', function () {
    const given = 3;
    const expected = true;

    const verifyIsPrime = funcs.isPrime(given);

    assert.equal(expected, verifyIsPrime);
  });
});
