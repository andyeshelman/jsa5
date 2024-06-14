/*
1. Document Manipulation with JavaScript

Objective:
The aim of this assignment is to enhance proficiency in manipulating HTML documents dynamically using JavaScript,
focusing on the manipulation of arrays and objects to modify document content and structure.

Problem Statement:
You are tasked with creating a web page that dynamically updates its content based on user interaction.
The page should utilize JavaScript to manipulate the document structure and content using arrays and objects.

Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

Task 2: Write a function to display the product information on the webpage dynamically.

Task 3: Implement an event listener to trigger the display of products when the page loads.
*/

const products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you go" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience go" }
];

function hawk() {
    const div = document.getElementById('part1');
    products.forEach(product => {
        const line = document.createElement('p');
        line.innerText = `We got ${product.name} for $${product.price}: ${product.description}!`
        div.appendChild(line)
    })
}

document.addEventListener('DOMContentLoaded', hawk)

/*
2. Form Manipulation with JavaScript

Objective: The aim of this assignment is to practice manipulating HTML forms dynamically using JavaScript,
with a focus on handling arrays, objects, and form elements to capture user input and modify form behavior.

Problem Statement: You are tasked with creating a web page containing a form that allows users to input their information.
The page should utilize JavaScript to dynamically handle form submissions, store input data in arrays and objects,
and modify form behavior based on user interaction.

Task 1: Create an HTML form with input fields for the user's name, email, and message.

Task 2: Write JavaScript code to handle form submissions and store user input in an object. Display the object in the console.

Task 3: Implement form validation to ensure that all required fields are filled before submission.
*/

function handleSubmit(event) {
    event.preventDefault();
    const data = {
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        message: event.target.elements.message.value,
    }
    console.log(data)
}

/*
3. Styling with JavaScript

Objective:
The objective of this assignment is to practice manipulating CSS styles dynamically using JavaScript.
By the end of this assignment, students should be able to apply various styling changes to HTML elements based on user interaction or other events.

Problem Statement:
You are tasked with creating a web page that demonstrates dynamic styling using JavaScript.
The page should include HTML elements that change their appearance in response to user actions or events triggered by JavaScript functions.

Task 1: Create an HTML structure with at least 5 elements that will be styled dynamically.

Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.

Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.
*/

for (const row of "tmb") {
    for (const col of "lmr") {
        const cell = document.getElementById(row+col);
        cell.setAttribute("onclick", `newSelection("${row+col}")`);
        const shape = document.getElementById(row+col+"-shape");
        shape.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16).padStart(6,'0');
        shape.style.rotate = Math.random()*90 + "deg"
        shape.style.borderRadius = Math.random()*50 + "%"
    }
}

let selected = "mm";
selectify(selected);

function newSelection(sel) {
    deselectify(selected);
    selectify(sel);
    selected = sel;
}

const colorSelect = document.querySelector("#color-select");
const rotSelect = document.querySelector("#rot-select");
const radSelect = document.querySelector("#rad-select");

colorSelect.addEventListener("change", (event) => {
    const shape = document.getElementById(selected+"-shape");
    shape.style.backgroundColor = event.target.value;
});

rotSelect.addEventListener("change", (event) => {
    const shape = document.getElementById(selected+"-shape");
    shape.style.rotate = `${event.target.value}deg`;
});

radSelect.addEventListener("change", (event) => {
    const shape = document.getElementById(selected+"-shape");
    shape.style.borderRadius = `${event.target.value}%`;
});

function selectify(sel) {
    const cell = document.getElementById(sel);
    cell.style.borderColor = "gold";
    const shape = document.getElementById(sel+"-shape");
    const colorInput = document.getElementById("color-select");
    colorInput.value = rgbToHex(shape.style.backgroundColor);
    const rotInput = document.getElementById("rot-select");
    rotInput.value = shape.style.rotate.match(/^\d+(\.\d+)?/)[0] ?? 0;
    const radInput = document.getElementById("rad-select");
    radInput.value = shape.style.borderRadius.match(/^\d+(\.\d+)?/)[0] ?? 0;
}

function deselectify(sel) {
    const cell = document.getElementById(sel);
    cell.style.borderColor = "";
}

function rgbToHex(rgb) {
    const result = rgb.match(/^rgb\((\d+), (\d+), (\d+)\)$/);
    const r = (+result[1]).toString(16).padStart(2, '0');
    const g = (+result[2]).toString(16).padStart(2, '0');
    const b = (+result[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}