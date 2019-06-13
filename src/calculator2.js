const { sum, substract, divide, multiply } = require('./operation');

const menu = `
This is a calculator.

Please select an option:
1: Sum
2: Substract
3: Divide
4: Multiply
`

async function start(){
  console.log(menu);
  const asking = await ask("Number", /[1-4]/)
  select(asking)
}

function readLine() {
  return new Promise((resolve, reject) => {
    process.stdin.once('data', (data) => {
      resolve(data)
    })
  })
}

async function ask(question, format) {
  const stdInData = await readLine()
  const data = stdInData.toString().trim();

  if (format.test(data)) {
    return data
  }
    stdout.write(`It should match: ${format} \n`);
    stdout.write(question + ": ");
    ask(question, format);
}

async function askForDigit(format) {
  const stdInData = await readLine()
  // const data = data.toString().trim();
  //
  format.test(data)
  return data
  select(data)
  // } else {
  //   stdout.write("It should match a number \n");
  //   stdout.write("Try again: ");
  //   ask(format);
  // }
}

async function select(value){
  let answer = ""
  let answer1 = ""
  let answer2 = ""

  switch (value) {
    case "1":
    console.log(`
      You asked for a sum operation.
      Give me two numbers: ${answer1} + ${answer2}`)
      answer1 = askForDigit(/[0-9]/)
      answer2 = askForDigit(/[0-9]/)
      // answer = await sum(answer1, answer2)

      answer =  await answer1 + answer2;
      console.log(answer)
      // result(answer)
    break;

    case "2":
    console.log("You asked for a substraction operation. Give me two numbers:")
      answer1 = askForDigit("Give me a number", /[0-9]/)
      answer2 = askForDigit("Give me a number", /[0-9]/)
      answer = await substract(answer1, answer2)
    break;

    case "3":
    console.log("You asked for a division operation. Give me two numbers:")
      answer1 = askForDigit("Give me a number", /[0-9]/)
      answer2 = askForDigit("Give me a number", /[0-9]/)
      answer = await divide(answer1, answer2)
    break;

    case "4":
    console.log("You asked for a multiplication operation. Give me two numbers:")
    await number()
      answer1 = askForDigit("Give me a number", /[0-9]/)
      answer2 = askForDigit("Give me a number", /[0-9]/)
      answer = multiply(answer1, answer2)
    break;
  }
  // return result(answer)
  // result(answer)
}

function number(){
  console.log("Please give us the numbers:")
}

function result(result){
  console.log(`The result is ${result}`)
  process.exit();
}

module.exports = { start };
