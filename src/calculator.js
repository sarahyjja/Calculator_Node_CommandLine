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
    // stdout.write(`It should match: 12354 \n`);
    // stdout.write(`try again`);
    // start(menu)
  })
}

async function menuNumber(){
  const chosenNumber = await userInput()
  console.log(`You choose ${chosenNumber}Please, now, give us a number, hit enter and give us another one:`)
  askForOperationNumbers(Number(chosenNumber))
}

async function askForOperationNumbers(chosenNumber){
  const userInput1 = await userInput();
  const userInput2 = await userInput();
  //console.log(`The first number is: ${userInput1} The second number is: ${userInput2}`)

  if(chosenNumber == "1")
  return console.log(`The result is`, sum(Number(userInput1), Number(userInput2)))
  else if(chosenNumber == "2") return console.log(`The result is:`, substract(Number(userInput1), Number(userInput2)))
  else if(chosenNumber == "3") return console.log(`The result is:`, divide(Number(userInput1), Number(userInput2)))
  else if(chosenNumber == "4") return console.log(`The result is:`, multiply(Number(userInput1), Number(userInput2)))
  else {
    console.log(`It should match 1/2/3/4/`)
  }
    process.exit();
}


module.exports = { start, userInput, menuNumber, askForOperationNumbers };
