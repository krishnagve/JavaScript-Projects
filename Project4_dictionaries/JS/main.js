// Create a dictionary (JavaScript object) with key-value pairs
let Person = {
    Name: "Alice",
    Age: 28,
    Occupation: "Software Engineer",
    Country: "Canada"
};

// Function to display a value from the dictionary
function showDictionary() {
    // Display multiple values from the dictionary
    document.getElementById("Dictionary").innerHTML =
        "Name: " + Person.Name + "<br>Occupation: " + Person.Occupation +
        "<br>Country: " + Person.Country + "<br>Age: " + Person.Age;
}

// -------------------------------------------------------------
// Function to delete a value from the dictionary using delete operator
// -------------------------------------------------------------
function deleteValue() {
    // Delete a key-value pair (for example, remove Age)
    delete Person.Age;

    // Try to display the deleted property (will return undefined)
    document.getElementById("Dictionary").innerHTML =
        "The 'Age' property has been deleted. Current value: " + Person.Age;
}
