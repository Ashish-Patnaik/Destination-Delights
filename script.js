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
