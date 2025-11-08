// JavaScript_2.js
// Form validation for contact form fields

function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "") {
    alert("Please enter your full name.");
    document.getElementById("name").focus();
    return false;
  }

  if (email === "") {
    alert("Please enter your email address.");
    document.getElementById("email").focus();
    return false;
  } else if (!email.match(emailPattern)) {
    alert("Please enter a valid email address (e.g., name@example.com).");
    document.getElementById("email").focus();
    return false;
  }

  if (message === "") {
    alert("Please type a message before submitting.");
    document.getElementById("message").focus();
    return false;
  }

  alert("Thank you, " + name + "! Your message has been sent successfully.");
  return true;
}
