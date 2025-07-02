const form = document.getElementById("feedbackForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission (page reload)

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Basic validation
  if (name === "" || email === "" || message === "") {
    status.textContent = "⚠️ Please fill in all fields.";
    status.style.color = "crimson";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    status.textContent = "⚠️ Please enter a valid email address.";
    status.style.color = "crimson";
    return;
  }

  // If all good
  status.textContent = "✅ Thank you for your feedback!";
  status.style.color = "green";

  // Optional: clear form
  form.reset();
});
