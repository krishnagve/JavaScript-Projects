// -------------------------------------------------------------
// Example 1: Display the data type using typeof
// -------------------------------------------------------------
var myVariable = "Hello, World!";
document.write("The data type of myVariable is: " + typeof myVariable + "<br><br>");

// -------------------------------------------------------------
// Example 2: Demonstrate Type Coercion
// -------------------------------------------------------------
var coercedValue = "10" + 5;
document.write("Result of '10' + 5 is: " + coercedValue + "<br>");
document.write("The data type of coercedValue is: " + typeof coercedValue + "<br><br>");

var booleanExample = true + 2;
document.write("Result of true + 2 is: " + booleanExample + "<br>");
document.write("The data type of booleanExample is: " + typeof booleanExample + "<br><br>");

// -------------------------------------------------------------
// Example 3: Display NaN
// -------------------------------------------------------------
document.write("This is an example of NaN: " + 0 / 0 + "<br><br>");

// -------------------------------------------------------------
// Example 4: isNaN() returning true
// -------------------------------------------------------------
document.write("isNaN('Hello') returns: " + isNaN("Hello") + "<br><br>");

// -------------------------------------------------------------
// Example 5: isNaN() returning false
// -------------------------------------------------------------
document.write("isNaN(123) returns: " + isNaN(123) + "<br><br>");

// -------------------------------------------------------------
// Example 6: Display Infinity using document.getElementById()
// -------------------------------------------------------------
function showInfinity() {
    let bigNumber = 2E310; // 2 × 10^310 exceeds JS limit
    document.getElementById("infinity").innerHTML =
        "A very large number results in: " + bigNumber;
}

// -------------------------------------------------------------
// Example 7: Display -Infinity using document.getElementById()
// -------------------------------------------------------------
function showNegativeInfinity() {
    let smallNumber = -3E310; // -3 × 10^310 is too small
    document.getElementById("negInfinity").innerHTML =
        "A very large negative number results in: " + smallNumber;
}

// Automatically run both functions when page loads
showInfinity();
showNegativeInfinity();

// -------------------------------------------------------------
// Example 8: Boolean Logic (Greater Than / Less Than)
// -------------------------------------------------------------
var greaterComparison = 10 > 5;   // true
var lesserComparison = 3 < 1;     // false

document.write("Is 10 greater than 5? " + greaterComparison + "<br>");
document.write("Is 3 less than 1? " + lesserComparison + "<br><br>");

// -------------------------------------------------------------
// Example 9: Math Operation using console.log()
// -------------------------------------------------------------
var num1 = 15;
var num2 = 4;
var result = num1 * num2;

console.log("The result of " + num1 + " × " + num2 + " is: " + result);

// -------------------------------------------------------------
// Example 10: Equality Operator (==) returning true and false
// -------------------------------------------------------------
var equalTrue = (5 == "5");   // true (same value, different type)
var equalFalse = (10 == "20"); // false (different value)

document.write("Does 5 == '5'? " + equalTrue + "<br>");
document.write("Does 10 == '20'? " + equalFalse + "<br><br>");

// -------------------------------------------------------------
// Example 11: Strict Equality Operator (===) returning true and false
// -------------------------------------------------------------

// True — same data type (number) and same value
var strictTrue = (10 === 10);

// False — different data type and different value
var strictFalse1 = (10 === "20");

// False — same value, but different data type (number vs string)
var strictFalse2 = (10 === "10");

// False — same data type but different values
var strictFalse3 = (5 === 10);

document.write("10 === 10 returns: " + strictTrue + "<br>");
document.write("10 === '20' returns: " + strictFalse1 + "<br>");
document.write("10 === '10' returns: " + strictFalse2 + "<br>");
document.write("5 === 10 returns: " + strictFalse3 + "<br><br>");

// -------------------------------------------------------------
// Example 12: Logical AND (&&) Operator
// -------------------------------------------------------------
var andTrue = (10 > 5 && 8 < 12);    // true && true → true
var andFalse = (10 > 5 && 15 < 10);  // true && false → false

document.write("Result of (10 > 5 && 8 < 12): " + andTrue + "<br>");
document.write("Result of (10 > 5 && 15 < 10): " + andFalse + "<br><br>");

// -------------------------------------------------------------
// Example 13: Logical OR (||) Operator
// -------------------------------------------------------------
var orTrue = (10 > 20 || 5 < 8);     // false || true → true
var orFalse = (3 > 10 || 2 > 8);     // false || false → false

document.write("Result of (10 > 20 || 5 < 8): " + orTrue + "<br>");
document.write("Result of (3 > 10 || 2 > 8): " + orFalse + "<br><br>");

// -------------------------------------------------------------
// Example 14: Logical NOT (!) Operator
// -------------------------------------------------------------
var notTrue = !(5 > 10);   // !(false) → true
var notFalse = !(10 > 5);  // !(true) → false

document.write("Result of !(5 > 10): " + notTrue + "<br>");
document.write("Result of !(10 > 5): " + notFalse + "<br>");
