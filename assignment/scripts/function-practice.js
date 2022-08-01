console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return "Hello, " + `${name}` + "!";
}
// Remember to call the function to test
console.log("Test - should say 'Hello name!', where 'name' is the variable entered into the function", helloName(Theo));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log("Test - should return the sum of 33 and 17, being 50", addNumbers(33, 17));


// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  return firstNumber * secondNumber * thirdNumber;
}
console.log("Test - should return the product of -1, 2, and 3, being -6", multiplyThree(-1, 2, 3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let emptyArray = [];
let animalArray = ["eagle", "salamander", "snake"]

function getLast( array ) {
  return (!array.length) ? "undefined" : array[array.length - 1];
}
console.log("Test - should return 'undefined' and 'snake' in that order", getLast(emptyArray), getLast(animalArray));
// Decided to try my hand at a ternary operator again!

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return true;
    }
  }
  return false;
}
console.log("Test - should return 'false' then 'true' in that order", find("otter", animalArray), find("salamander", animalArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.includes(letter, 0)) {
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let numberArray = [5, 78, 100, -33];

function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log("Test - should return '150' as the sum of all items in 'numberArray'", sumAll(numberArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let negativeArray = [0, -4, -88];
let mixedArray = [-8, 22, 300, 0, -6];

function deleteNegatives(array) {
  let newArray = [];
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray[j] = array[i];
      j++;
    }
  }
  return newArray;
}
console.log("Test - should return an empty array, then an array with containing '22, 300'", deleteNegatives(negativeArray), deleteNegatives(mixedArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

