// ============================
//  PART 1: JavaScript Basics
// ============================

// Variables & Conditionals
let userAge = 20;
if (userAge >= 18) {
  console.log("You are an adult ");
  document.getElementById("output").innerText = "You are an adult ";
} else {
  console.log("You are a minor ");
  document.getElementById("output").innerText = "You are a minor ";
}

// ============================
//  PART 2: Functions
// ============================

// Function 1: Greet User
function greetUser(name) {
  return `Hello, ${name}! Welcome `;
}

// Function 2: Calculate Total
function calculateTotal(price, qty) {
  return price * qty;
}

// Example usage
console.log(greetUser("Erick"));
console.log("Total: $" + calculateTotal(50, 3));

// ============================
//  PART 3: Loops
// ============================

// Loop 1: For Loop - Countdown
for (let i = 5; i >= 1; i--) {
  console.log("Countdown: " + i);
}

// Loop 2: forEach Loop - Array Iteration
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => {
  console.log("Fruit: " + fruit);
});

// ============================
//  PART 4: DOM Manipulation
// ============================

const title = document.getElementById("page-title");
const greetBtn = document.getElementById("greetBtn");
const toggleBtn = document.getElementById("toggleBtn");
const listBtn = document.getElementById("listBtn");

// DOM Interaction 1: Change text on button click
greetBtn.addEventListener("click", () => {
  document.getElementById("output").innerText = greetUser("Erick");
});

// DOM Interaction 2: Toggle class (color change)
toggleBtn.addEventListener("click", () => {
  title.classList.toggle("highlight");
});

// DOM Interaction 3: Create new elements dynamically
listBtn.addEventListener("click", () => {
  let ul = document.createElement("ul");
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.innerText = fruit;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
});

// Extra CSS for toggle effect
document.styleSheets[0].insertRule(`
  .highlight { color: crimson; }
`, 0);
