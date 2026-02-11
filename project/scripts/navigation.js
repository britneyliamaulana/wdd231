
// Select elements
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

// Toggle the menu on click
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    // Switch icon (only once)
    hamburger.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});
