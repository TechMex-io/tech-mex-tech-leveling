module.exports.findLongestWord = (str) => {
  const strArray = str.split(' ');
  const numArray = strArray.map(word => word.length);
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
  const allDivisors = [];
  for (var i = num; i >= 1; i--) {
    if (num % i === 0) {
      allDivisors.push(i);
    }
  }
  // return all prime factors
  /* allDivisors.shift();
  allDivisors.pop();
  return allDivisors; */

  if (allDivisors.length > 2) {
    return false;
  }
  return true;
}


module.exports.removeDuplicate = (arr) => {
  const deduped = [];
  for (var i = 0; i < arr.length; i++) {
    if (deduped.indexOf(arr[i]) === -1) {
      deduped.push(arr[i]);
    }
  }
  return deduped;
}


module.exports.mergeSortedArray = (arr1, arr2) => {
  function sortNumber(a,b) {
    return a - b;
  }
  // return arr1.concat(arr2).sort(sortNumber);
  return arr1.concat(arr2).sort((a,b) => a - b);
}



module.exports.rot13 = (str) => {
  const strArray = str.split('');
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const deciphered = strArray.map(function (ltr) {
    const letterPosition = alphabet.indexOf(ltr);
    let actualLetterPosition = letterPosition > 13 ? 13 - (26 - letterPosition) : letterPosition + 13;
    if (actualLetterPosition === 26) actualLetterPosition = 0;
    return letterPosition > -1 ? alphabet[actualLetterPosition] : ltr;
  });

  return deciphered.join('');

}


/* function rot13(str) {
  var strArr = str.split('');
  var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  var phrased = strArr.map(function (letter, i) {
    var letterPosition = alphabet.indexOf(letter) > 13 ? 13 - (26 - alphabet.indexOf(letter)) : alphabet.indexOf(letter) + 13;
    if (letterPosition === 26) letterPosition = 0;
    return alphabet.indexOf(letter) >= 0 ? alphabet[letterPosition] : letter;
  });

  return phrased.join('');
} */


module.exports.findElement = (arr, func) => {
  const num = arr.filter(function (n) {
    return func(n);
  });
  return (num.length > 0) ? num.slice(0,1).join('') : undefined;
}



module.exports.pairwise = (arr, arg) => {
  const findPairs = arr.reduce(num => {
    return num > 10;
  });
  return findPairs;
}

/* 
  // for just in case. es6 only.
  Object.entries(myObj).forEach(
    ([key, value]) => arr.push({key: value})
  );
*/

