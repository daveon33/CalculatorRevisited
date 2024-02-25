// Basic calulator operations

// Addition --- This function takes two numbers as arguments, then stores its addition inside the variable sum and returns it

function add(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber;
  return sum;
}

// Substraction --- This function takes two numbers as arguments, then stores its substractions inside the variable substraction and returns it

function substract(firstNumber, secondNumber) {
  let substraction = firstNumber - secondNumber;
  return substraction;
}

// Multiply --- This function takes two numbers as arguments, then stores its product inside the variable product and returns it

function multiply(firstNumber, secondNumber) {
  let product = firstNumber * secondNumber;
  return product;
}

// Division --- This functions takes two numbers as arguments, then stores its division inside the variable quotient and returns it, for now division by zero its not being managed

function division(firstNumber, secondNumber) {
  let quotient = firstNumber / secondNumber;
  return quotient;
}


// Simple tests

console.log(add(2, 5));
console.log(add(10, -2));
console.log(substract(5, 4));
console.log(substract(-3, 2));
console.log(multiply(2, 10));
console.log(division(10, 2));

// Variables that will store the data that is going to be used by the arithmetic funcions. These will update the display of the calculator later on

let firstNum;
let secondNum;
let operator;

// The function operate will take the values of the previous variables and call one of the operation functions above

function operate(firstNum, secondNum, operator) {
  if(operator == "+") {
    return add(firstNum, secondNum);
  } else if(operator == "-") {
    return substract(firstNum, secondNum);
  } else if(operator == "*") {
    return multiply(firstNum, secondNum);
  } else if(operator == "/") {
    return division(firstNum, secondNum);
  } else return "Syntax Error";
}

// Function to target the display everytime a button is pressed

let displayValue = 0;

/*
  What I'm understanding from the forEach loop is that first, the variable named numberKey is storing a nodelist with all of the divs that have the class number. Then the forEach loop is iterating and adding an event listener to all of these divs, in this scenario the click event is being added. After that the arrow function inside the event listener is storing the textContent of the div into the displayValue variable. This happens everytime the button is being pressed, thus the arrow functions is being called only after the button is pressed, and is not dependant on the forEach loop.

  To populate the display I am targeting the text content and then appending the strings into the displayDivContent, this way I can keep adding numbers if the operation request a larger value, because otherwise everytime a button is pressed the calculator would reset the value to the current number.
*/


let numberKey = document.querySelectorAll('.number');
numberKey.forEach((numKey) => numKey.addEventListener('click', () => {
  displayValue = numKey.textContent;
  let displayDivContent = document.querySelector('#calculatorDisplay');
  displayDivContent.textContent = displayDivContent.textContent + displayValue;
  displayValue = displayDivContent.textContent;
}));


// The chainOperationCounter helps to concatenate multiple operations, if an operatorKey has been pressed more than once it'll have the same behavior as the submit button
let chainOperationCounter = 0;

let operatorKey = document.querySelectorAll('.operator');
operatorKey.forEach((opKey) => opKey.addEventListener('click', () => {
  chainOperationCounter++;

  if(chainOperationCounter > 1) {
    submitMyNumbers();
  }

  displayValue = opKey.textContent;
  let displayDivContent = document.querySelector('#calculatorDisplay');
  displayDivContent.textContent = displayDivContent.textContent + displayValue;
  displayValue = displayDivContent.textContent;
}));

let clearButton = document.querySelector('#clearBtn');
clearButton.addEventListener('click', () => {
  let displayDivContent = document.querySelector('#calculatorDisplay');
  displayDivContent.textContent = '';
  chainOperationCounter = 0;
});


/* The submit button is very important in the overall functionality of the calculator, the following piece of code
allows the user to evaluate a pair of numbers to get the result, discriminating the operation to be used based
on the symbol that the user pressed. For this I prefered to use RegEx since it seems like an appropiate moment  to
practice this and also separate all the pieces of data that I need from the input. The 'firstOperatorRegex' is capturing
the three pieces of information we need in order to make the calculator works, these results are being stored in an array,
have in mind that this array has in the 0 position the value of the whole match, for example if I enter 12+4, the 0 position
would return 12+4.

The following functionality is basic, I'm just using the retrieved symbol from the input to call the corresponding arithmetic
function defined above.
*/

let submitButton = document.querySelector('#submitBtn');
submitButton.addEventListener('click', () => {

  submitMyNumbers();

});

function submitMyNumbers() {
  // First I define a RegEx to separate the contents of the operation
  let firstOperatorRegex = '(\\d+)([+-x\/])(\\d+)';
  let firstOperator = displayValue.match(firstOperatorRegex)[1];
  let secondOperator = displayValue.match(firstOperatorRegex)[3];
  let operation = displayValue.match(firstOperatorRegex)[2];

  let answer = 0;
  let displayedAnswer = document.querySelector('#calculatorDisplay');

  if(operation == '+') {
    answer = add(parseInt(firstOperator), parseInt(secondOperator));
    displayedAnswer.textContent = answer;
  } else if(operation == '-') {
    answer = substract(parseInt(firstOperator), parseInt(secondOperator));
    displayedAnswer.textContent = answer; 
  } else if(operation == 'x') {
    answer = multiply(parseInt(firstOperator), parseInt(secondOperator));
    displayedAnswer.textContent = answer;
  } else if(operation == '\/') {
    answer = division(parseInt(firstOperator), parseInt(secondOperator));
    displayedAnswer.textContent = answer;
  }
}





