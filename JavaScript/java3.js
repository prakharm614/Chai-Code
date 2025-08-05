/**
 * Demonstrating various JavaScript data types and confusing conversions.
 */

// Primitive data types
let num = 42;                // Number
let str = "42";              // String
let bool = true;             // Boolean
let undef = undefined;       // Undefined
let nul = null;              // Null
let sym = Symbol("id");      // Symbol
let bigInt = 9007199254740991n; // BigInt

console.log(typeof num);     // "number"
console.log(typeof str);     // "string"
console.log(typeof bool);    // "boolean"
console.log(typeof undef);   // "undefined"
console.log(typeof nul);     // "object" (confusing!)
console.log(typeof sym);     // "symbol"
console.log(typeof bigInt);  // "bigint"

// Confusing conversions
console.log(Number("42"));         // 42
console.log(Number("42abc"));      // NaN
console.log(Number(true));         // 1
console.log(Number(false));        // 0
console.log(Number(null));         // 0
console.log(Number(undefined));    // NaN

console.log(String(42));           // "42"
console.log(String(null));         // "null"
console.log(String(undefined));    // "undefined"
console.log(String(false));        // "false"

console.log(Boolean(""));          // false
console.log(Boolean("0"));         // true
console.log(Boolean(0));           // false
console.log(Boolean([]));          // true (confusing!)
console.log(Boolean({}));          // true

// == vs === confusion 
// strict and loose comparison
console.log(0 == "0");             // true
console.log(0 === "0");            // false
console.log(null == undefined);    // true
console.log(null === undefined);   // false
console.log([] == false);          // true (confusing!)
console.log([] === false);         // false

// Object conversions
console.log([1,2] + [3,4]);        // "1,23,4" (arrays to strings)
console.log({} + []);              // 0 (confusing!)
// To avoid confusion, wrap in parentheses:
console.log(({}) + []);            // "[object Object]"

// NaN confusion
console.log(typeof NaN);           // "number"
console.log(NaN == NaN);           // false

// Infinity
console.log(1/0);                  // Infinity
console.log(typeof Infinity);      // "number"