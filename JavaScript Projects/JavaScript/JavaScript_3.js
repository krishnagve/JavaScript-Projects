// JavaScript_3.js
// Demonstrates using HTML5 data-* attributes with JavaScript

// Run after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "tour"
    const tours = document.querySelectorAll(".tour");
    const output = document.getElementById("dataOutput");

    // Add a click event to each tour card
    tours.forEach(function (tour) {
        tour.addEventListener("click", function () {
            // Read custom data attributes using dataset
            const location = tour.dataset.location;
            const price = tour.dataset.price;
            const duration = tour.dataset.duration;

            // Build a custom message
            const message =
                `You selected: ${location} — ${duration}, starting at $${price}.`;

            // Display the message on the page
            output.textContent = message;
        });
    });
});
