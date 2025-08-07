/*
DOM Concepts and Implementations:

1. Accessing the Document Object
2. Selecting Elements 
3. Changing Content 
4. Changing Styles 
5. Creating, Appending, and Removing Elements 
6. Event Listeners 
7. Traversing the DOM 
8. Attributes and Properties
9. Class Manipulation
10. Dataset (data-* attributes)
11. Cloning Nodes
12. Inserting Elements at Specific Positions
13. Querying Parent/Child/Sibling Relationships
14. Handling Forms and Input Values
*/

// 1. Accessing the Document Object
console.log(document); // The root of the DOM



// 1. Selecting Elements
const heading = document.getElementById('main-heading');
const items = document.getElementsByClassName('item'); // HTMLCollection
const firstItem = document.querySelector('.item');
const allItems = document.querySelectorAll('.item'); // NodeList

// Convert HTMLCollection or NodeList to Array if needed
const itemsArray = Array.from(items); // HTMLCollection to Array
const allItemsArray = Array.from(allItems); // NodeList to Array

// 2. Changing Content
heading.textContent = 'New Heading';
firstItem.innerHTML = '<strong>First Item Updated</strong>';

// 3. Changing Styles
heading.style.color = 'blue';
firstItem.style.backgroundColor = 'yellow';

// 4. Creating and Appending Elements
const newDiv = document.createElement('div');
newDiv.textContent = 'I am a new div!';
document.body.appendChild(newDiv);

// 5. Removing Elements
const toRemove = document.getElementById('remove-me');
if (toRemove) {
    toRemove.remove();
}

// 6. Event Listeners
const button = document.getElementById('my-button');
if (button) {
    button.addEventListener('click', function() {
        alert('Button clicked!');
    });
}

// 7. Traversing the DOM
const parent = firstItem.parentElement;
const children = parent ? parent.children : [];
const childrenArray = Array.from(children); // HTMLCollection to Array
const next = firstItem.nextElementSibling;
const prev = firstItem.previousElementSibling;

// 8. Attributes and Properties
const img = document.createElement('img');
img.setAttribute('src', 'https://via.placeholder.com/100');
img.setAttribute('alt', 'Placeholder Image');
document.body.appendChild(img);
console.log(img.getAttribute('src')); // Get attribute value
img.alt = 'Updated Alt Text'; // Set property

// 9. Class Manipulation
const box = document.createElement('div');
box.className = 'box';
box.classList.add('highlight');
box.classList.toggle('active');
box.classList.remove('highlight');
document.body.appendChild(box);

// 10. Dataset (data-* attributes)
box.dataset.info = 'This is a data attribute';
console.log(box.dataset.info);

// 11. Cloning Nodes
const clonedBox = box.cloneNode(true); // true for deep clone
clonedBox.textContent = 'I am a clone!';
document.body.appendChild(clonedBox);

// 12. Inserting Elements at Specific Positions
const refNode = document.body.firstChild;
const specialDiv = document.createElement('div');
specialDiv.textContent = 'Inserted at the top!';
document.body.insertBefore(specialDiv, refNode);

// 13. Querying Parent/Child/Sibling Relationships
console.log(specialDiv.parentNode); // Parent node
console.log(specialDiv.nextSibling); // Next sibling
console.log(specialDiv.previousSibling); // Previous sibling

// 14. Handling Forms and Input Values
const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.value = 'Hello!';
form.appendChild(input);
const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Submit';
form.appendChild(submitBtn);
document.body.appendChild(form);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Input value: ' + input.value);
});
