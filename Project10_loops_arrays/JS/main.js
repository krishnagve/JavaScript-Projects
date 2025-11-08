// main.js

// This file demonstrates functions with loops, arrays, and objects,
// matching the Project10_loops_arrays requirements.

// ------------------------------------------
// FUNCTION WITH WHILE LOOP
// ------------------------------------------
function whileLoopFunction() {
    // Start at 1
    let count = 1;
    // String to store the result
    let result = "";

    // While loop that runs while count <= 5
    while (count <= 5) {
        result += "Count is: " + count + "<br>";
        count++; // increase count each time
    }

    // Display the result inside the paragraph with id="whileOutput"
    document.getElementById("whileOutput").innerHTML = result;
}

// ------------------------------------------
// FUNCTION WITH FOR LOOP
// ------------------------------------------
function forLoopFunction() {
    // String to store numbers
    let result = "";

    // For loop that runs from 1 to 5
    for (let i = 1; i <= 5; i++) {
        result += "Number is: " + i + "<br>";
    }

    // Display the result inside the paragraph with id="forOutput"
    document.getElementById("forOutput").innerHTML = result;
}

// ------------------------------------------
// FUNCTION THAT UTILIZES AN ARRAY
// ------------------------------------------
function showArray() {
    // Create an array of fruits
    let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

    // Join the array into a comma-separated string
    let fruitList = fruits.join(", ");

    // Display the array inside the element with id="arrayOutput"
    document.getElementById("arrayOutput").innerHTML = "Fruits: " + fruitList;
}

// ------------------------------------------
// OBJECT USING const (from earlier step)
// ------------------------------------------
function constant_function() {
    // Create an object using const
    const car = {
        make: "Toyota",
        model: "Camry",
        year: 2020
    };

    // Show original values
    document.getElementById("Constant").innerHTML =
        "Original Car: " + car.make + " " + car.model + " (" + car.year + ")";

    // Change a property and add a new one
    car.year = 2024;        // change existing property
    car.color = "Blue";     // add new property

    // Show updated values
    document.getElementById("Constant").innerHTML +=
        "<br>Updated Car: " + car.make + " " + car.model +
        " (" + car.year + "), Color: " + car.color;
}

// ------------------------------------------
// OBJECT CREATED WITH let (REQUIRED)
// ------------------------------------------
function showLetObject() {
    // Create an object using let, including a method
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        // Method that returns a string using the object's properties
        getDetails: function () {
            return this.firstName + " " + this.lastName +
                   " is " + this.age + " years old.";
        }
    };

    // Display the method's returned string in the HTML element
    document.getElementById("letObjectOutput").innerHTML = person.getDetails();
}
