// This function assigns two variables and displays them in the paragraph using getElementById
function displayMessage() {
    // Assign two variables
    var greeting = "Hello, ";
    var name = "this is JavaScript in action!";

    // Concatenate them
    var fullMessage = greeting + name;

    // Use document.getElementById to place the text inside the <p> element
    document.getElementById("output").innerHTML = fullMessage;
}

// -------------------------------------------------------------
function combineStrings() {
    // Step 1: Create a variable with an initial string
    var text = "JavaScript is fun";

    // Step 2: Use the += operator to concatenate another string
    text += " and powerful!";

    // Step 3: Use getElementById to display the concatenated result
    document.getElementById("message").innerHTML = text;
}
