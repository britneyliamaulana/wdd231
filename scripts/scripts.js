// ===== Responsive Menu =====
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.style.display =
            navMenu.style.display === "block" ? "none" : "block";
    });
}


// getdates.js

// ✅ Get the current year and display it in the footer span
document.getElementById("currentyear").textContent = new Date().getFullYear();

// ✅ Get the last modified date of the document
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;



// ===== Certificate Courses =====
const courses = [
    { code: "WDD 130", type: "WDD", credits: 3, completed: true },
    { code: "WDD 131", type: "WDD", credits: 3, completed: false },
    { code: "WDD 231", type: "WDD", credits: 3, completed: false },
    { code: "CSE 110", type: "CSE", credits: 2, completed: true },
    { code: "CSE 111", type: "CSE", credits: 2, completed: false }
];

const courseList = document.getElementById("courseList");
const totalCredits = document.getElementById("totalCredits");
const filterButtons = document.querySelectorAll(".course-filters button");

function displayCourses(filter) {
    courseList.innerHTML = "";
    let total = 0;

    courses.forEach(course => {
        if (filter === "all" || course.type === filter) {
            const div = document.createElement("div");
            div.textContent = course.code;
            div.classList.add("course-item");

            if (course.completed) {
                div.classList.add("completed");
            }

            courseList.appendChild(div);
            total += course.credits;
        }
    });

    totalCredits.textContent = total;
}

// Filter buttons
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        displayCourses(button.dataset.filter);
    });
});

// Default display
displayCourses("all");
