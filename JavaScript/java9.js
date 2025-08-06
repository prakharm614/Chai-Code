/*
# JavaScript Functions: Key Concepts

## 1. Function Declaration
Defines a named function.
*/
function greet(name) {
    return `Hello, ${name}!`;
}

/*
## 2. Function Expression
Assigns a function to a variable.
*/
const add = function(a, b) {
    return a + b;
};

/*
## 3. Arrow Functions
Shorter syntax, no own `this`.
*/
const multiply = (a, b) => a * b;

/*
## 4. Parameters & Arguments
Functions can have parameters; arguments are values passed.
*/
function say(message = "Hi") { // default parameter
    console.log(message);
}
say("Hello");

/*
## 5. Rest Parameters
Allows variable number of arguments.
*/
function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}
sum(1, 2, 3, 4); // 10

/*
## 6. Return Statement
Returns a value from a function.
*/
function square(x) {
    return x * x;
}

/*
## 7. Anonymous Functions
Functions without a name, often used as callbacks.
*/
setTimeout(function() {
    console.log("Timeout!");
}, 1000);

/*
## 8. Callback Functions
Functions passed as arguments.
*/
function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}
processUserInput(greet);

/*
## 9. IIFE (Immediately Invoked Function Expression)
Runs as soon as it is defined.
*/
(function() {
    console.log("IIFE runs!");
})();

/*
## 10. Closures
Functions remember variables from their scope.
*/
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2

/*
## 11. Higher-Order Functions
Functions that take or return other functions.
*/
function repeat(n, action) {
    for (let i = 0; i < n; i++) action(i);
}
repeat(3, console.log);

/*
## 12. Function Hoisting
Function declarations are hoisted, expressions are not.
*/
hoisted(); // works
function hoisted() {
    console.log("Hoisted!");
}
// notHoisted(); // Error
const notHoisted = function() {};

/*
## 13. The `this` Keyword
Refers to the object calling the function.
*/
const obj = {
    value: 42,
    show: function() {
        console.log(this.value);
    }
};
obj.show();

/*
## 14. Methods
Functions as object properties.
*/
const person = {
    name: "Bob",
    sayHi() {
        console.log(`Hi, I'm ${this.name}`);
    }
};
person.sayHi();

/*
## 15. Generator Functions
Functions that can pause and resume.
*/
function* gen() {
    yield 1;
    yield 2;
}
const g = gen();
g.next(); // { value: 1, done: false }

/*
## 16. Async Functions
Return a Promise, use `await`.
*/
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    return response.json();
}

/*
## Summary
- Functions are first-class objects in JS.
- Can be declared, assigned, passed, and returned.
- Support closures, callbacks, async, generators, and more.
*/