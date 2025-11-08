// JavaScript_1.js
// Demonstrates: switch statement, getElementsByClassName(), and drawing with gradient on canvas.

// -----------------------------------------------------------
// FUNCTION: showFruitMessage()
// -----------------------------------------------------------
function showFruitMessage() {
    // Get the selected fruit value from the dropdown
    let fruit = document.getElementById("fruitSelect").value;
    let message = "";

    // Switch statement to display different messages
    switch (fruit) {
        case "apple":
            message = "Apples are rich in fiber and great for snacks!";
            break;
        case "banana":
            message = "Bananas are high in potassium and perfect for energy.";
            break;
        case "mango":
            message = "Mangoes are sweet tropical fruits — the king of fruits!";
            break;
        case "orange":
            message = "Oranges are full of Vitamin C and refreshing to eat.";
            break;
        case "grape":
            message = "Grapes make excellent juice and are great antioxidants.";
            break;
        default:
            message = "Please select a fruit from the list above.";
    }

    // Display the message on the webpage
    document.getElementById("output").innerHTML = message;

    // Use getElementsByClassName() to modify all elements with class "fruitInfo"
    let fruitElements = document.getElementsByClassName("fruitInfo");
    for (let i = 0; i < fruitElements.length; i++) {
        fruitElements[i].style.color = "green";
        fruitElements[i].style.fontWeight = "bold";
    }

    console.log("Updated all elements with class 'fruitInfo'");
}

// -----------------------------------------------------------
// DRAW GRAPHIC WITH GRADIENT ON THE CANVAS
// -----------------------------------------------------------
window.onload = function () {
    // Get the canvas element by ID
    let canvas = document.getElementById("myCanvas");

    // Make sure the browser supports canvas
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");

        // ---------------------------
        // Create a linear gradient
        // ---------------------------
        // Gradient from top (y=0) to bottom (y=200)
        let gradient = ctx.createLinearGradient(0, 0, 0, 200);

        // Add color stops to the gradient
        gradient.addColorStop(0, "#FFD700"); // gold at top
        gradient.addColorStop(1, "#FF4500"); // orange-red at bottom

        // Fill the entire canvas with the gradient background
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw a bordered rectangle on top
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.strokeRect(40, 40, 220, 100);

        // Add text in the center
        ctx.font = "18px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("Gradient Canvas Example", 55, 100);
    }
};
