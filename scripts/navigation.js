//  Hamburger menu toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    toggleBtn.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
});
