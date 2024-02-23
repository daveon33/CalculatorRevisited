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

let numberKey = document.querySelectorAll('.number');
numberKey.forEach((numKey) => numKey.addEventListener('click', () => {
  alert('impressed');
}));


