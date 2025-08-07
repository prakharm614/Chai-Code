// Events and Properties in JavaScript

// Example: Handling a button click event and using properties

// HTML setup (for reference, not part of JS file):
// <button id="myBtn">Click Me</button>
// <input id="myInput" type="text" value="Hello">

// Accessing DOM elements
const button = document.getElementById('myBtn');
const input = document.getElementById('myInput');

// Adding an event listener (event: 'click')
button.addEventListener('click', function() {
    // Accessing and modifying properties
    alert('Button clicked! Input value is: ' + input.value);
    input.value = 'Button was clicked!'; // Changing the value property
});

// You can also listen to other events, like 'input'
input.addEventListener('input', function() {
    console.log('Input changed to:', input.value);
});


// Class of Event listener

