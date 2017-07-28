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

  it('should verify a prime number', function () {
    const given = 3;
    const expected = true;

    const verifyIsPrime = funcs.isPrime(given);

    assert.equal(expected, verifyIsPrime);
  });

  it('should remove all duplicates from array', function () {
    const given = [2,3,3,4,4,5,6];
    const expected = [2,3,4,5,6];

    const deduped = funcs.removeDuplicate(given);

    assert.deepEqual(expected, deduped);
  });

  it('should merge two sorted arrays', function () {
    const given1 = [2,5,6,9];
    const given2 = [1,2,3,29];
    const expected = [1, 2, 2, 3, 5, 6, 9, 29];

    const mergedAndSorted = funcs.mergeSortedArray(given1, given2);
    
    assert.deepEqual(expected, mergedAndSorted);
  });

  it('should decipher the string shifting each letter by 13', function () {
    const given = 'GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.';
    const expected = 'THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.';

    const deciphered = funcs.rot13(given);

    assert.equal(expected, given);
  });

  it('should look through an array (first argument) and return the first element in the array that passes a truth test (second argument)', function () {
    const givenArray = [1, 3, 5, 8, 9, 10];
    const givenFunc = function(num) { return num % 2 === 0; };
    const expected = 8;

    const firstElement = funcs.findElement(givenArray, givenFunc);

    assert.equal(expected, firstElement);
  });
});
