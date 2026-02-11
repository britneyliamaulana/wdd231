

// Product data
const products = [
    { name: "Blush  Flower Wrap Maxi Dress", type: "dress", img: "images/wrapdress.jpg" },
    { name: "Blush Maxi Layered Skirt", type: "skirt", img: "images/maxiskirt.jpg" },
    { name: "Chiffon Blouse", type: "top", img: "images/blouse.jpg" },
    { name: "Black Pleated Dress", type: "dress", img: "images/pleateddress.jpg" },
    { name: "Polka Dot Blouse", type: "top", img: "images/polka-dot.webp" },
    { name: "Puff Sleeved Pink Dress", type:"dress", img: "images/pink-dress.webp"}
];

// Function to build product cards
function buildCards(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(item => `
        <div class="card">
            <img src="${item.img}" loading="lazy" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.type}</p>
        </div>
    `).join("");
}

// HOME – display featured items
if (document.getElementById("featuredContainer")) {
    buildCards(products.slice(0, 3), "featuredContainer");
}

// COLLECTIONS – filtering logic
if (document.getElementById("collectionsContainer")) {

    buildCards(products, "collectionsContainer");

    const btn = document.getElementById("toggleButton");
    let showDresses = false;

    btn.addEventListener("click", () => {
        showDresses = !showDresses;

        if (showDresses) {
            const dresses = products.filter(p => p.type === "dress");
            buildCards(dresses, "collectionsContainer");
            btn.textContent = "Show All";
        } else {
            buildCards(products, "collectionsContainer");
            btn.textContent = "Show Only Dresses";
        }
    });
}

// CONTACT – form handling + localStorage
if (document.getElementById("contactForm")) {
    const form = document.getElementById("contactForm");
    const output = document.getElementById("formOutput");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const entry = {
            name: name.value,
            email: email.value,
            message: message.value
        };

        // Save to localStorage
        localStorage.setItem("contactEntry", JSON.stringify(entry));

        // Output message
        output.textContent = `Thank you! Your message has been sent.`;

        form.reset();
    });
}
