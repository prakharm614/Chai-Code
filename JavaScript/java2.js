/**
 * Demo for const, let, and var in JavaScript
 */

// var: function-scoped or globally-scoped, can be re-assigned and re-declared
var x = 10;
console.log("var x:", x); // 10
x = 20;
console.log("var x after reassignment:", x); // 20
var x = 30;
console.log("var x after redeclaration:", x); // 30

// let: block-scoped, can be re-assigned but not re-declared in the same scope
let y = 5;
console.log("let y:", y); // 5
y = 15;
console.log("let y after reassignment:", y); // 15
// let y = 25; // Error: Identifier 'y' has already been declared

// const: block-scoped, cannot be re-assigned or re-declared
const z = 100;
console.log("const z:", z); // 100
// z = 200; // Error: Assignment to constant variable
// const z = 300; // Error: Identifier 'z' has already been declared

// Block scope demo
if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
    console.log("Inside block: a =", a, ", b =", b, ", c =", c);
}
console.log("Outside block: a =", a); // 1
// console.log("Outside block: b =", b); // Error: b is not defined
// console.log("Outside block: c =", c); // Error: c is not defined