document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

const toggleButton = document.getElementById("dark-mode-toggle");
const icon = document.getElementById("dark-mode-icon");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  icon.src = "sun.png"; // Light mode icon
}

// Add click event
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    icon.src = "sun.png"; // Light mode icon
  } else {
    localStorage.setItem("darkMode", "disabled");
    icon.src = "moon.png"; // Dark mode icon
  }
});


function login() {
  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;
  let message = document.getElementById("login-message");

  let storedPassword = localStorage.getItem(username);
  if (storedPassword === password) {
    localStorage.setItem("loggedInUser", username);
    message.style.color = "green";
    message.innerText = "Login successful! Redirecting...";
    setTimeout(() => (window.location.href = "index.html"), 2000);
  } else {
    message.style.color = "red";
    message.innerText = "Invalid credentials!";
  }
}

function resetfield() {
  document.getElementById("signup-name").value = "";
  document.getElementById("signup-dateofbirth").value = "";
  document.getElementById("signup-username").value = "";
  document.getElementById("signup-phone").value = "";
  document.getElementById("signup-password").value = "";
  document.getElementById("signup-confirmpassword").value = "";
  document.getElementById("profilepic").value = "";

  // Reset radio buttons
  let genderInputs = document.getElementsByName("gender");
  genderInputs.forEach((input) => (input.checked = false));

  // Show reset message
  let message = document.getElementById("signup-message");
  message.style.color = "blue";
  message.innerText = "All fields are reset";

  // Remove message after 2 seconds
  setTimeout(() => (message.innerText = ""), 2000);
}

function signup() {
  let username = document.getElementById("signup-username").value;
  let password = document.getElementById("signup-password").value;
  let confirmPassword = document.getElementById("signup-confirmpassword").value;
  let message = document.getElementById("signup-message");

  if (password !== confirmPassword) {
    message.style.color = "red";
    message.innerText = "Both passwords do not match!";
    return; // Stop execution if passwords don't match
  }

  if (localStorage.getItem(username)) {
    message.style.color = "red";
    message.innerText = "User already exists!";
  } else {
    localStorage.setItem(username, password);
    message.style.color = "green";
    message.innerText = "Signup successful! Redirecting to Home...";
    setTimeout(() => (window.location.href = "index.html"), 2000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");

      question.addEventListener("click", function () {
          item.classList.toggle("active");

          // Collapse other open items
          faqItems.forEach((otherItem) => {
              if (otherItem !== item) {
                  otherItem.classList.remove("active");
              }
          });
      });
  });
});