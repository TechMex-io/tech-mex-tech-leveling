# Tech-Mex Tech Leveling

`$ git clone `
`$ npm install `

### Add a challenge 
in the `chalenges.js` file, add a new challenge as a property of `module exports` like so:

```
module.exports.nameOfYourFunction = (answer) => {
  // add your description or beiginning code here
  return answer;
}
```

make sure you have `nodemon` installed globally:

`$ npm install -g nodemon`

then run `nodemon app.js`
