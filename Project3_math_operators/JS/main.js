// -------------------------------------------------------------
// Performs an addition operation and displays the result
// -------------------------------------------------------------
function addNumbers() {
    var sum = 25 + 17;
    document.getElementById("Math").innerHTML = "The sum of 25 + 17 is: " + sum;
}

// -------------------------------------------------------------
// Performs a subtraction operation and displays the result
// -------------------------------------------------------------
function subtractNumbers() {
    var difference = 50 - 23;
    document.getElementById("Math").innerHTML = "The result of 50 - 23 is: " + difference;
}

// -------------------------------------------------------------
// Performs a multiplication operation and displays the result
// -------------------------------------------------------------
function multiplyNumbers() {
    var product = 8 * 6;
    document.getElementById("Math").innerHTML = "The result of 8 × 6 is: " + product;
}

// -------------------------------------------------------------
// Performs a division operation and displays the result
// -------------------------------------------------------------
function divideNumbers() {
    var quotient = 48 / 6;
    document.getElementById("Math").innerHTML = "The result of 48 ÷ 6 is: " + quotient;
}

// -------------------------------------------------------------
// Performs multiple operations using order of operations
// -------------------------------------------------------------
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML =
        "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

// -------------------------------------------------------------
// Performs a modulus operation and displays the remainder
// -------------------------------------------------------------
function modulusNumbers() {
    var remainder = 25 % 7;
    document.getElementById("Math").innerHTML =
        "When 25 is divided by 7, the remainder is: " + remainder;
}

// -------------------------------------------------------------
// Utilizes the negation operator and displays the result
// -------------------------------------------------------------
function negationOperator() {
    var x = 10;
    var negatedValue = -x;
    document.getElementById("Math").innerHTML =
        "The negation of " + x + " is: " + negatedValue;
}

// -------------------------------------------------------------
// Utilizes the increment operator and displays the result
// -------------------------------------------------------------
function incrementOperator() {
    var x = 5;
    x++; // Increment by 1
    document.getElementById("Math").innerHTML =
        "After incrementing, the value of x is: " + x;
}

// -------------------------------------------------------------
// Utilizes the decrement operator and displays the result
// -------------------------------------------------------------
function decrementOperator() {
    var y = 8;
    y--; // Decrement by 1
    document.getElementById("Math").innerHTML =
        "After decrementing, the value of y is: " + y;
}
