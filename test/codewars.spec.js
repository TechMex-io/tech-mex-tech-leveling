var funcs = require('../codewars');
var assert = require('assert');


describe('Codewars challenge', function () {

  it('should take in a string of one or more words, and returns the same string, but with all five or more letter words reversed', function () {
    const given = 'Hey fellow warriors';
    const expected = 'Hey wollef sroirraw';

    const spinWords = funcs.spinWords(given);

    assert.equal(expected, spinWords);
  });

  it('should buld a tower (array of asterisks) based on given number of floors', function () {
    assert.equal(JSON.stringify(funcs.towerBuilder(3)), JSON.stringify(["  *  "," *** ","*****"]));
  });


  it('should make pairs of characters in a string.', function () {
    const given = 'abcdef';
    const expected = ['ab','cd','ef'];

    const makePairs = funcs.makePairs(given);

    assert.deepEqual(expected, makePairs);
  });


  it('should make pairs of characters in a string. if the string has odd number of character, make the last pair with an underscore (_)', function () {
    const given = 'abcde';
    const expected = ['ab','cd','e_'];

    const makePairs = funcs.makePairs(given);

    assert.deepEqual(expected, makePairs);
  });
  

});
