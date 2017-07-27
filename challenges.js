module.exports.findLongestWord = (str) => {
  const strArray = str.split(' ');

  const numArray = [];
  strArray.forEach(function(i) {
    numArray.push(i.length);
  });
  const largest = Math.max.apply(Math, numArray);

  return strArray.filter(function (word) {
    return word.length === largest;
  }).join('');

};

module.exports.duplicate = (arr) => {
  return arr.concat(arr);
}

// using fat arrow does not allow access to `argumets` obj
module.exports.addTwo = function addTwo() {
  // add(2, 5); // 7
  // add(2)(5); // 7
  const arg1 = arguments[0];
  const arg2 = arguments[1];

  if (arguments.length > 1) {
    return arg1 + arg2;
  }
  return function (arg2) {
    return arg1 + arg2;
  }
}

module.exports.isPrime = (num) => {
  // a prime number is only divisible by itself and 1.
  return num;
}
