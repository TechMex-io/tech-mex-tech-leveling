var funcs = require('../codewars');
var assert = require('assert');


describe('Codewars challenge', function () {

  it('should take in a string of one or more words, and returns the same string, but with all five or more letter words reversed', function () {
    const given = 'Hey fellow warriors';
    const expected = 'Hey wollef sroirraw';

    const spinWords = funcs.spinWords(given);

    assert.equal(expected, spinWords);
  });

});
