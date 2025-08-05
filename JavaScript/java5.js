/**
 * Numbers and Math Concepts in JavaScript
 */

// Basic arithmetic operations
let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Modulus:", a % b);         // 1

// Exponentiation
console.log("Exponentiation:", a ** b); // 1000

// Math object usage
console.log("Math.PI:", Math.PI);
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.pow(2, 5):", Math.pow(2, 5));
console.log("Math.abs(-7):", Math.abs(-7));
console.log("Math.floor(3.7):", Math.floor(3.7));
console.log("Math.ceil(3.2):", Math.ceil(3.2));
console.log("Math.round(3.5):", Math.round(3.5));

// Random number between 0 and 1
console.log("Random number:", Math.random());

// for random number between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random number between 1 and 10:", randomNum);

//for random number between 5 and 15
let min = 5;
let max = 15;
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random number between 5 and 15:", randomInRange);

// Parsing numbers
let str = "42.7";
console.log("parseInt:", parseInt(str));   // 42
console.log("parseFloat:", parseFloat(str)); // 42.7

// Checking for NaN and finite numbers
console.log("isNaN('abc'):", isNaN('abc')); // true
console.log("isFinite(100):", isFinite(100)); // true