// discover
import { discoverItems } from "../data/discover.mjs";

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
