// discover
import { discoverItems } from "../data/discover.mjs";

/* =========================
   Visitor Message (localStorage)
   ========================= */
const visitMessage = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";
} else {
    const lastVisitTime = Number(lastVisit);
    const timeDifference = now - lastVisitTime;
    const daysBetween = Math.floor(
        timeDifference / (1000 * 60 * 60 * 24)
    );

    if (daysBetween < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

// Save current visit
localStorage.setItem("lastVisit", now);


/* =========================
   Discover Cards
   ========================= */
const grid = document.querySelector(".discover-grid");

discoverItems.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("discover-card");

    // Image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.loading = "lazy";

    // Text wrapper
    const text = document.createElement("div");
    text.classList.add("discover-text");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const address = document.createElement("address");
    address.textContent = item.address;

    const button = document.createElement("button");
    button.classList.add("learn-more");
    button.textContent = "Learn More";

    text.append(title, description, address, button);
    card.append(img, text);
    grid.appendChild(card);
});
