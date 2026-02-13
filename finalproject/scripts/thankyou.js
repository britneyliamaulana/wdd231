document.addEventListener("DOMContentLoaded", () => {
  const results = document.getElementById("results");
  const entry = JSON.parse(localStorage.getItem("contactEntry"));

  if (entry) {
    results.innerHTML = `
      <h2>Thank you, ${entry.name}!</h2>
      <p>We have received your message: "${entry.message}"</p>
      <p> and We’ll reply to you at <strong>${entry.email}</strong> very soon.</p>
    `;
    // Clear it so it doesn’t persist forever
    localStorage.removeItem("contactEntry");
  } else {
    results.innerHTML = "<p>No contact entry found. Please submit the form again.</p>";
  }
});
