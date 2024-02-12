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

console.log(add(2, 5));
console.log(add(10, -2));
console.log(substract(5, 4));
console.log(substract(-3, 2));
console.log(multiply(2, 10));
console.log(division(10, 2));


