// -------------------------------------------------------------------
// Global variable 
var appName = "IfElse+Time Demo"; // Accessible anywhere in this file

// -------------------------------------------------------------------
// 1) <p id + onclick> handler that uses an IF statement 
// -------------------------------------------------------------------
function showClickMessage() {
  // Local variable (minimum requirement #1)
  let clickedText = document.getElementById("Click_Output").innerHTML;

  // IF toggle: if there's already text, clear it; otherwise show it
  if (clickedText) {
    document.getElementById("Click_Output").innerHTML = "";
  } else {
    document.getElementById("Click_Output").innerHTML =
      "You clicked the paragraph—welcome to " + appName + "!";
  }
}

// -------------------------------------------------------------------
// 2) Time_function() 
// -------------------------------------------------------------------
function Time_function() {
  // Local variable storing the current hour 0–23
  let hour = new Date().getHours();
  let reply;

  // Basic time ranges (morning/afternoon/evening)
  if (hour < 12) {
    reply = "Good morning!";
  } else if (hour < 18) {
    reply = "Good afternoon!";
  } else {
    reply = "Good evening!";
  }

  document.getElementById("Time_of_day").innerHTML =
    reply + " (current hour: " + hour + ")";
}

// -------------------------------------------------------------------
// 3) function with IF...ELSE 
// -------------------------------------------------------------------
function checkAge() {
  // Read number from the input
  let age = Number(document.getElementById("ageInput").value);

  // Simple validation + IF/ELSE logic
  if (isNaN(age) || age < 0) {
    document.getElementById("ageResult").innerHTML = "Please enter a valid age.";
  } else if (age >= 18) {
    document.getElementById("ageResult").innerHTML = "You are an adult.";
  } else {
    document.getElementById("ageResult").innerHTML = "You are a minor.";
  }
}

// -------------------------------------------------------------------
// 4) Intentional error function + console.log() for debugging (required)
//    Console to see logs and the intentional error.
// -------------------------------------------------------------------
function buggyFunction() {
  console.log("buggyFunction() starting…"); // log: entering function
  let a = 5;
  console.log("Value of a before error:", a);

  return ab + 1; // <-- intentional bug
}

// Call once on load so can see console logs + the error
buggyFunction();
