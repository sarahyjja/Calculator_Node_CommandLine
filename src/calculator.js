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

function ask(question, format, callback) {
 let stdin = process.stdin, stdout = process.stdout;

 stdin.resume();
 stdout.write(question + ": ");

 stdin.once('data', function(data) {
   data = data.toString().trim();

   if (format.test(data)) {
     callback(data);
   } else {
     stdout.write("It should match: "+ format +"\n");
     ask(question, format, callback);
   }
 });
}
ask("Number", /[1-4]/, function(number) {
    console.log("The operation you want to do is: ", number);

    process.exit();
});

function select(value){
  let answer = ""

  switch (value) {
    case 1:
    answer = "1"
    // return sum()
    break;

    case 2:
    answer = "2"
    // return substract()
    break;

    case 3:
    answer = "3"
    // return divide()
    break;

    case 4:
    answer = "4"
    // return multiply()
    break;
  }
  return answer
}

function number(){
  console.log("Please give us the numbers:")
}

function result(result){
  console.log(`The result is ${result}`)
}

module.exports = { start };
