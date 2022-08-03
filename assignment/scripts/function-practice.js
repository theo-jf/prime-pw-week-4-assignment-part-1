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
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log("Test - should say 'Hello, name!', where 'name' is the string entered into the function", helloName("Theo"));


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
    if (array[i] === value) {
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
console.log("Test - should return an empty array, then an array with containing '22, 300' in that order", deleteNegatives(negativeArray), deleteNegatives(mixedArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// This is my solution to a problem I found on Edabit.
// The problem asks to "Convert a Number to Base-2," or in other words, to convert a decimal in our base-10 number system to its binary representation.
// The numbers it tests will be between 1025 and 0 (including 0).
// I'm sure there's an existing function to convert a number to binary in Javascript, but I decided to do a math-centric method in my solution below.

function binary(decimal) {
	let num = decimal;
	if (num === 0) {
		return "0";
	}
	const arr = [];
	while (num >= 1) {
		let remainder = num % 2;
		num = Math.floor(num / 2);
		if (remainder === 0) {
			arr.unshift(0);
		}
		else if (remainder != 0) {
			arr.unshift(1);
		}
	}
	return arr.join("");
}

// The function first assigns the decimal value to a variable "num" to allow alteration.
// Next, the function checks if "0" has been entered, in which case 0 is simply returned.
// Next, an array is created which will store the converted binary values. 
// Following the array, a while loop is created which will continue so long as the value of num is greater than or equal to 1.
// Within the loop, the variable "remainder" is set to the remainder of num divided 2, 
// after which the value of num is changed to the quotient of num / 2 with the remainder removed using Math.floor.
// If remainder is equal to 0, 0 is un-shifted to arr.
// If remainder is not equal to 0, 1 is un-shifted to arr.
// This process repeats until the value of num is less than 1, upon which arr is returned as a string with all it's values joined together. 

console.log("Test - should return '101' as conversion for 5, '101110001' as conversion for 369, and '110100' for 52 in that order", binary(5), binary(369), binary(52));

