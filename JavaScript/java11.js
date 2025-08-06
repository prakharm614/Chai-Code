/**
 * 🔁 JavaScript Control Statements and Looping Constructs
 * Covers: if, switch, loops, break/continue, labels, and higher-order methods.
 */

// 1️⃣ if statement – Executes block only if condition is true
let num = 10;
if (num > 5) {
    console.log("num is greater than 5");
}

// 2️⃣ if-else – Choose between two branches based on condition
if (num % 2 === 0) {
    console.log("num is even");
} else {
    console.log("num is odd");
}

// 3️⃣ if-else if-else – Multiple conditions checked in sequence
let grade = 85;
if (grade >= 90) {
    console.log("Grade: A");
} else if (grade >= 80) {
    console.log("Grade: B");
} else if (grade >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D or below");
}

// 4️⃣ switch statement – Cleaner alternative for multiple specific cases
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
        break;
}

// 5️⃣ Ternary Operator – Short-hand for if-else
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote:", canVote);

// 6️⃣ for loop – Traditional loop with initialization, condition, increment
for (let i = 0; i < 5; i++) {
    console.log("for loop i:", i);
}

// 7️⃣ while loop – Loop until condition becomes false
let count = 0;
while (count < 3) {
    console.log("while loop count:", count);
    count++;
}

// 8️⃣ do-while loop – Executes block at least once
let n = 0;
do {
    console.log("do-while loop n:", n);
    n++;
} while (n < 2);

// 9️⃣ for...of loop – Iterate over **values** of iterable (like arrays)
const arr = [10, 20, 30];
for (const value of arr) {
    console.log("for...of value:", value);
}

// 🔟 for...in loop – Iterate over **keys** (or indexes) of object or array
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log("for...in key:", key, "value:", obj[key]);
}

// 1️⃣1️⃣ break – Exit the loop prematurely when condition is met
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log("break example i:", i);
}

// 1️⃣2️⃣ continue – Skip current iteration and move to next
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log("continue example i:", i);
}

// 1️⃣3️⃣ Labeled statements – Rarely used, allows breaking out of nested loops
outerLoop:
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        if (i === 1 && j === 1) break outerLoop;
        console.log(`labeled loop i:${i}, j:${j}`);
    }
}

/**
 * 🔁 Array Higher-Order Functions
 * These provide cleaner, more expressive ways to work with arrays.
 */

// Sample array
const numbers = [1, 2, 3, 4, 5, 6];

// 🔹 filter() – Returns a new array with elements that match the condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filtered even numbers:", evenNumbers);  // [2, 4, 6]

// 🔹 map() – Returns a new array by transforming each element
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers);  // [1, 4, 9, 16, 25, 36]

// 🔹 reduce() – Reduces the array to a single value
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of numbers:", sum);  // 21

// 🔹 forEach() – Executes a function for each element (no return value)
numbers.forEach(num => {
    console.log("forEach number:", num);
});

// 🔹 some() – Returns true if at least one element satisfies the condition
const hasEven = numbers.some(num => num % 2 === 0);
console.log("Array has even number:", hasEven);  // true

// 🔹 every() – Returns true only if **all** elements satisfy the condition
const allPositive = numbers.every(num => num > 0);
console.log("All numbers are positive:", allPositive);  // true

// 🔹 find() – Returns the first element that satisfies the condition
const firstGreaterThanThree = numbers.find(num => num > 3);
console.log("First number > 3:", firstGreaterThanThree);  // 4

// 🔹 findIndex() – Returns the index of the first match
const indexOfFive = numbers.findIndex(num => num === 5);
console.log("Index of number 5:", indexOfFive);  // 4
