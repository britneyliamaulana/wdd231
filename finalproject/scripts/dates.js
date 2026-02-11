// ===== DateS =====

// Get the current year
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Get the last modified date
const lastModifiedSpan = document.getElementById("lastModified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
}
