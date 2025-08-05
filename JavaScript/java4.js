// String Concepts in JavaScript

// 1. Creating Strings
let str1 = "Hello, World!";
let str2 = 'JavaScript Strings';
let str3 = `Template literals allow ${str2}`;

// 2. String Length
console.log(str1.length); // 13

// 3. Accessing Characters
console.log(str1[0]); // 'H'
console.log(str1.charAt(1)); // 'e'

// 4. String Methods
console.log(str1.toUpperCase()); // 'HELLO, WORLD!'
console.log(str1.toLowerCase()); // 'hello, world!'
console.log(str1.indexOf('World')); // 7
console.log(str1.includes('Hello')); // true
console.log(str1.replace('World', 'JavaScript')); // 'Hello, JavaScript!'

// 5. Substring and Slice
console.log(str1.substring(0, 5)); // 'Hello'
console.log(str1.slice(-6)); // 'World!'

// 6. Splitting and Joining
let words = str1.split(', ');
console.log(words); // ['Hello', 'World!']
console.log(words.join(' - ')); // 'Hello - World!'

// 7. Trimming
let padded = '   padded string   ';
console.log(padded.trim()); // 'padded string'

// 8. Template Literals
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // 'Hello, Alice!'

// 9. Escape Characters
let quote = "He said, \"JavaScript is awesome!\"";
console.log(quote);

// 10. Comparing Strings
let a = "apple";
let b = "banana";
console.log(a === b); // false
console.log(a < b); // true (lexicographical order)