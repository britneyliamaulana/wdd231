// ==============================
// IMPORT MODULE
// ==============================
import { getProducts } from './products.mjs';


// ==============================
// BUILD PRODUCT CARDS
// ==============================
function buildCards(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    items.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";
        card.tabIndex = 0;

        // Only minimal info on the card
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
        `;

        // Open modal when clicked
        card.addEventListener("click", () => showModal(product));

        // Keyboard accessibility
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                showModal(product);
            }
        });

        container.appendChild(card);
    });
}



// ==============================
// SHOW MODAL
// ==============================
function showModal(product) {
    const modal = document.getElementById("productModal");
    const modalInfo = document.getElementById("modalInfo");

    if (!modal || !modalInfo) return;

    modalInfo.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="modal-img">
        <h2>${product.name}</h2>
        <p><strong>Name :</strong> ${product.name}</p>
        <p><strong>Type :</strong> ${product.type}</p>
        <p><strong>Description :</strong> ${product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
    `;

    modal.style.display = "flex";
}


// ==============================
// CLOSE MODAL
// ==============================
function setupModalClose() {
    const modal = document.getElementById("productModal");
    const closeBtn = document.getElementById("closeModal");

    if (!modal || !closeBtn) return;

    // Close button
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Click outside
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
}

setupModalClose();


// ==============================
// HOME PAGE – FEATURED
// ==============================
async function displayFeatured() {
    const container = document.getElementById("featuredContainer");
    if (!container) return;

    try {
        const products = await getProducts();
        buildCards(products.slice(0, 3), "featuredContainer");
    } catch (error) {
        console.error("Error loading featured:", error);
        container.innerHTML = "<p>Featured products could not be loaded.</p>";
    }
}

displayFeatured();


// ==============================
// COLLECTIONS PAGE
// ==============================
async function displayCollections() {
    const container = document.getElementById("collectionsContainer");
    if (!container) return;

    try {
        const products = await getProducts();
        buildCards(products, "collectionsContainer");

        const btn = document.getElementById("toggleButton");
        let showDresses = false;

        if (btn) {
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

    } catch (error) {
        console.error("Error loading collections:", error);
        container.innerHTML = "<p>Collections could not be loaded.</p>";
    }
}

displayCollections();


// ==============================
// CONTACT FORM
// ==============================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const entry = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        };

        localStorage.setItem("contactEntry", JSON.stringify(entry));
        window.location.href = "thankyou.html";
    });
}
