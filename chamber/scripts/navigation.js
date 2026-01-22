// menu button
const menuButton = document.querySelector(".menu-toggle");
const nav = document.getElementById("primaryNav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}
