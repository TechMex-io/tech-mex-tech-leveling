# Tech-Mex Tech Leveling

```
$ git clone
$ npm install
$ mocha
```

### Add your own challenge 
Hopefully, this repo will also get us into the art and habit of unit testing. 

To add a challenge or problem to solve, write your function in the `chalenges.js` file as a property of `module exports` like so:

```
module.exports.nameOfYourFunction = (answer) => {
  // add your description or beiginning code here
  return answer;
}
```

You then want to add a test using [mocha's](http://mochajs.org/) syntax. We are using [NodeJS' Assert](https://nodejs.org/api/assert.html) module to check the tests. As these problems or challenges will get more complex, and as we get better at unit testing, we will move over to the [Chai Assertion Library](http://chaijs.com/).

#### ...To Be Continued
