const { sum, substract, divide, multiply } = require('./operation');

const menu = `
  This is a calculator.

  Please select an option:
  1: Sum
  2: Substract
  3: Divide
  4: Multiply
`

function start(){
  console.log(menu);
  // TODO read the option
  // Do something based on the option
  // Display the result
}

function number(){
  console.log("Please give us the numbers:")
}

function result(result){
  console.log(`The result is ${result}`)
}

module.exports = { start };
