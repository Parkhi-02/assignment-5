let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);

let arr = [12, 5, 30, 7, 18];

let largest = Math.max(...arr);
let smallest = Math.min(...arr);

console.log("Original Array:", arr);
console.log("Largest:", largest);
console.log("Smallest:", smallest);

console.log("Ascending:", [...arr].sort((a, b) => a - b));
console.log("Descending:", [...arr].sort((a, b) => b - a));
function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = Number(document.getElementById("age").value);

    if (name.trim() === "") {
        alert("Name cannot be empty");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format");
        return;
    }

    if (age < 18 || age > 100) {
        alert("Age must be between 18 and 100");
        return;
    }

    alert("Form submitted successfully!");
}
let student = {
    name: "John",
    age: 20,
    grades: 85
};

// Add new property
student.class = "10th Grade";

// Update grade
student.grades = 90;

console.log("Student Info:");
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
function processArray(arr) {
    let evenNumbers = arr.filter(num => num % 2 === 0);   // remove odd

    let multiplied = evenNumbers.map(num => num * 2);      // multiply by 2

    let sum = multiplied.reduce((total, num) => total + num, 0); // sum

    return { evenNumbers, multiplied, sum };
}

let result = processArray([1, 2, 3, 4, 5, 6]);

console.log("Even Numbers:", result.evenNumbers);
console.log("Multiplied by 2:", result.multiplied);
console.log("Sum:", result.sum);
