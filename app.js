const funcs = require('./challenges');
const cw = require('./codewars');

console.log(
  // funcs.findLongestWord("The quick brown fox jumped over the lazy dog")
  // funcs.findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; })
  // funcs.findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })
  funcs.pairwise([1,4,2,3,0,5], 7)
  // cw.makePairs('abcdef')
);
