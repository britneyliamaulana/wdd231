// ===== Responsive Menu =====
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.style.display =
            navMenu.style.display === "block" ? "none" : "block";
    });
}
