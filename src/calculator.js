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
}

function userInput() {
  return new Promise((resolve, reject) => {
    process.stdin.once('data', (data) => {
      resolve(data)
    })
  })
}

async function menuNumber(){
  const chosenNumber = await userInput()
  console.log(chosenNumber)
}

async function askForNumbers(chosenNumber){
  const userInput1 = await userInput(); // returns a string, you want integers
  const userInput2 = await userInput();

  if(chosenNumber == "1") return sum(userInput1, userInput2)
  else if(chosenNumber == "2") return substract(userInput1, userInput2)
  else if(chosenNumber == "3") return divide(userInput1, userInput2)
  else if(chosenNumber == "4") return multiply(userInput1, userInput2)
}
