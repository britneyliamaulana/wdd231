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
    if (!courseList || !totalCredits) return;

    courseList.innerHTML = "";

    // Filter courses based on user selection
    const filteredCourses = courses.filter(course =>
        filter === "all" || course.type === filter
    );

    // Display filtered courses
    filteredCourses.forEach(course => {
        const div = document.createElement("div");
        div.textContent = course.code;
        div.classList.add("course-item");

        if (course.completed) {
            div.classList.add("completed");
        }

        courseList.appendChild(div);
    });

    // ✅ Calculate total credits using reduce (rubric requirement)
    const total = filteredCourses.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    totalCredits.textContent = `The total credits for courses listed above is ${total}`;
}

// Filter buttons
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        displayCourses(button.dataset.filter);
    });
});

// Default display
displayCourses("all");