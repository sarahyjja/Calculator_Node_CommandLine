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
  console.log(`You choose ${chosenNumber}Please, now, give us a number, hit enter and give us another one:`)
  // process.exit()
  askForOperationNumbers(Number(chosenNumber))
}

async function askForOperationNumbers(chosenNumber){
  const userInput1 = await userInput(); // returns a string, you want integers
  const userInput2 = await userInput();
  console.log(`you choose number ${userInput1} and ${userInput2}`)
  console.log("CHOSEN NUMBER-----", chosenNumber)
  if(chosenNumber === 1) return console.log(sum(Number(userInput1), Number(userInput2)))
  else if(chosenNumber == "2") return console.log(substract(userInput1, userInput2))
  else if(chosenNumber == "3") return console.log(divide(userInput1, userInput2))
  else if(chosenNumber == "4") return multiply(userInput1, userInput2)
  console.log("heeyeyeyeyeye")
}


module.exports = { start, userInput, menuNumber, askForOperationNumbers };
