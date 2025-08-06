// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


// Object destructuring
const person = {
    name: "Alice",
    age: 25,
    address: {
        city: "Delhi",
        country: "India"
    }
};

// Destructuring properties
const { name, age } = person;
console.log(name); // Alice
console.log(age);  // 25

// Nested destructuring
const { address: { city } } = person;
console.log(city); // Delhi

// Array of objects destructuring
const students = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
];

const [firstStudent, secondStudent] = students;
console.log(firstStudent.name); // John
console.log(secondStudent.name); // Jane

// JSON concepts
// JSON.stringify: Convert object to JSON string
const jsonString = JSON.stringify(course);
console.log(jsonString);

// JSON.parse: Convert JSON string to object
const parsedCourse = JSON.parse(jsonString);
console.log(parsedCourse);

// Note: JSON keys and string values must be in double quotes

// Spread operator with objects
const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };
const mergedObj = { ...objA, ...objB };
console.log(mergedObj);

// Rest operator in function parameters
function printUser({ name, ...rest }) {
    console.log(name);
    console.log(rest);
}
printUser({ name: "Bob", age: 30, city: "Mumbai" });

// Optional chaining with objects
console.log(person.address?.city); // Delhi
console.log(person.contact?.phone); // undefined

// Checking property existence
if ("name" in person) {
    console.log("Name exists in person");
}