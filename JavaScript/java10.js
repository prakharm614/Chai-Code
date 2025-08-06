/**
 *  Looping with for...of
 * - Works with iterables like arrays, strings, maps, sets.
 */

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num); // Logs each number in the array
}

const greetings = "Hello world!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`); // Logs each character in the string
}

/**
 *  Looping over a Map using for...of
 */

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

for (const [key, value] of map) {
    console.log(key, ':-', value); // Destructuring key and value
}

/**
 *  for...of on Object throws error – not iterable
 * So, use for...in for objects.
 */

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

/**
 *  for...in on Arrays iterates over index keys
 */

const programming = ["js", "rb", "py", "java", "cpp"];

for (const index in programming) {
    console.log(programming[index]); // Accesses elements using index
}

/**
 *  for...in on Map – Not recommended; doesn't work as expected
 */

/*
for (const key in map) {
    console.log(key); // Won't work – map is not enumerable like objects
}
*/

/**
 *  Array forEach – modern and clean
 */

const coding = ["js", "ruby", "java", "python", "cpp"];

// Using anonymous function
coding.forEach(function (val) {
    console.log(val);
});

// Using arrow function
coding.forEach((item) => {
    console.log(item);
});

// Using named function
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);

// Accessing item, index, and array
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

/**
 *  Looping through array of objects
 */

const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java", languageFileName: "java" },
    { languageName: "python", languageFileName: "py" }
];

myCoding.forEach((item) => {
    console.log(item.languageName); // Accessing property inside object
});

/**
 *  forEach returns undefined – cannot chain like map/filter
 */

// const values = coding.forEach((item) => {
//     return item;
// });
// console.log(values); // undefined

/**
 *  filter() – returns a new array with matched condition
 */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to get values > 4
const filteredNums = myNums.filter((num) => num > 4);
console.log(filteredNums); // [5,6,7,8,9,10]

// Same using forEach (not recommended for filtering)
const newNums = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});
console.log(newNums); // [5,6,7,8,9,10]

/**
 *  Filtering array of objects based on conditions
 */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filter books by genre
let userBooks = books.filter((bk) => bk.genre === 'History');
console.log(userBooks);

// Filter books by genre + publish year
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);

/**
 *  map() – transform each item and returns new array
 * filter() – filters based on condition
 */

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chaining map and filter
const transformedNums = myNumbers
    .map((num) => num * 10)        // Multiply each by 10
    .map((num) => num + 1)         // Add 1 to each
    .filter((num) => num >= 40);   // Filter values >= 40

console.log(transformedNums); // [ 41, 51, 61, 71, 81, 91, 101 ]

/**
 *  reduce() – reduce array to a single value (sum, product, etc.)
 */

const myNumsForReduce = [1, 2, 3];

// Using reduce with arrow function
const myTotal = myNumsForReduce.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal); // 6

// With log inside for understanding
/*
myNumsForReduce.reduce(function (acc, curr) {
    console.log(`acc: ${acc}, curr: ${curr}`);
    return acc + curr;
}, 0);
*/

/**
 *  Practical reduce example – total cart price
 */

const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay); // 22996
