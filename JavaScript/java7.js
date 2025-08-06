/*
Concept of Arrays in JavaScript
 
1. Definition:
    - An array is a special variable that can hold more than one value at a time.
    - Arrays are zero-indexed (first element is at index 0).

2. Declaration:
*/
let arr1 = [1, 2, 3, 4];         // Using array literal
let arr2 = new Array(5, 6, 7);   // Using Array constructor

/*
3. Accessing Elements:
*/
console.log(arr1[0]); // 1

/*
4. Modifying Elements:
*/
arr1[1] = 20; // arr1 is now [1, 20, 3, 4]

/*
5. Array Length:
*/
console.log(arr1.length); // 4

/*
6. Common Methods:
    - push(): Add to end
    - pop(): Remove from end
    - shift(): Remove from start
    - unshift(): Add to start
    - splice(): Add/remove at specific index
    - slice(): Copy part of array
    - forEach(), map(), filter(), reduce(): Iteration and transformation
*/
arr1.push(5); // [1, 20, 3, 4, 5]
arr1.pop();   // [1, 20, 3, 4]

/*
7. Arrays can hold any type of data:
*/
let mixed = [1, "hello", true, null];

/*
8. Arrays are objects:
    - typeof arr1 === 'object'
    - Arrays have special methods and properties.
*/

/*
9. Iterating over arrays:
*/
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
arr1.forEach(item => console.log(item));

/*
10. Multidimensional Arrays:
*/
let matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][0]); // 3
/*
11. Spread Operator:
    - Used to expand arrays into individual elements.
*/
let arr3 = [...arr1, 100, 200]; // [1, 20, 3, 4, 100, 200]
console.log(arr3);

/*
12. Array.of():
    - Creates a new Array instance from a variable number of arguments.
*/
let arr4 = Array.of(9, 8, 7);
console.log(arr4); // [9, 8, 7]

/*
13. Array.from():
    - Creates a new Array instance from an array-like or iterable object.
*/
let str = "hello";
let chars = Array.from(str);
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

/*
14. flat():
    - Flattens nested arrays into a single array.
*/
let nested = [1, 2, [3, 4, [5, 6]]];
let flat1 = nested.flat(); // [1, 2, 3, 4, [5, 6]]
let flat2 = nested.flat(2); // [1, 2, 3, 4, 5, 6]
console.log(flat1);
console.log(flat2);

/*
15. find() and findIndex():
    - find(): Returns the first element that satisfies the condition.
    - findIndex(): Returns the index of the first element that satisfies the condition.
*/
let found = arr1.find(x => x > 2); // 20
let foundIndex = arr1.findIndex(x => x > 2); // 1
console.log(found, foundIndex);

/*
16. includes():
    - Checks if an array contains a certain value.
*/
console.log(arr1.includes(20)); // true

/*
17. indexOf() and lastIndexOf():
    - Returns the first/last index at which a given element can be found.
*/
console.log(arr1.indexOf(20)); // 1
console.log(arr1.lastIndexOf(20)); // 1

/*
18. join():
    - Joins all elements into a string.
*/
console.log(arr1.join('-')); // "1-20-3-4"