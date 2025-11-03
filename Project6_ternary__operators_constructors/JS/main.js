// -------------------------------------------------------------
// Project 6: Ternary Operators, Constructors, and Nested Functions
// -------------------------------------------------------------

// ---------------------------
// 1️⃣ TERNARY OPERATOR FUNCTION
// ---------------------------
function Ride_Function() {
  // Get the user's height input
  var Height = document.getElementById("Height").value;

  // Use a ternary operator to determine if they can ride
  var Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";

  // Display the result
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// ---------------------------
// 2️⃣ CONSTRUCTOR FUNCTION WITH "new" AND "this"
// ---------------------------

// Define a Vehicle constructor function
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}

// Create objects using the "new" keyword
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Function to display the result of the constructor
function displayVehicle() {
  document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " +
    Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

// ---------------------------
// 3️⃣ NESTED FUNCTION EXAMPLE
// ---------------------------
function count_Function() {
  // The outer function executes the nested function
  document.getElementById("Nested_Function").innerHTML = Count();

  function Count() {
    var Starting_point = 9;

    // Nested function that modifies the variable from the outer scope
    function Plus_one() {
      Starting_point += 1;
    }

    // Call the nested function to increment the value
    Plus_one();

    // Return the updated value
    return Starting_point;
  }
}

// -------------------------------------------------------------
// END OF PROJECT
// -------------------------------------------------------------
