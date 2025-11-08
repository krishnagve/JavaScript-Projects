// =========================
// Pizza Menu Script
// =========================

/**
 * Main function triggered when the "Place Order" button is clicked.
 * Calculates pizza size cost, then calls getTopping() for additional toppings.
 */
function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var selectedSize = "";

    // Get all pizza sizes
    var sizeArray = document.getElementsByClassName("size");

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 += "<br>" + selectedSize;
        }
    }

    // Price based on pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;

    console.log("Selected Size: " + selectedSize + " | Price: $" + sizeTotal);
    console.log("Subtotal before toppings: $" + runningTotal);

    // Pass on to next function
    getTopping(runningTotal, text1);
}

/**
 * Collects selected toppings (vegetables and meats),
 * calculates topping cost (first free, rest $1 each),
 * and updates total + receipt.
 */
function getTopping(runningTotal, text1) {
    var selectedToppings = [];

    // Collect selected vegetables
    var veggieArray = document.getElementsByClassName("veggies");
    for (var i = 0; i < veggieArray.length; i++) {
        if (veggieArray[i].checked) {
            selectedToppings.push(veggieArray[i].value);
        }
    }

    // Collect selected meats
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedToppings.push(meatArray[j].value);
        }
    }

    // Add each topping to receipt
    for (var k = 0; k < selectedToppings.length; k++) {
        text1 += "<br>" + selectedToppings[k];
    }

    // Pricing rule: 1st topping free, others $1 each
    var toppingCount = selectedToppings.length;
    var toppingTotal = toppingCount > 1 ? toppingCount - 1 : 0;

    runningTotal += toppingTotal;

    console.log("Toppings: " + selectedToppings.join(", "));
    console.log("Topping Count: " + toppingCount);
    console.log("Final Total: $" + runningTotal);

    // Output results
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML =
        "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}
