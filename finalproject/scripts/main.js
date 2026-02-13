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

    container.innerHTML = items.map(item => `
    <div class="card">
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <h3>${item.name}</h3>
      <p>${item.type}</p>
      <p>${item.price}</p>
    </div>
  `).join('');

    addModalEvents(items);
}

// ==============================
// MODAL FUNCTIONALITY
// ==============================
function addModalEvents(products) {
    const modal = document.getElementById("productModal");
    const modalInfo = document.getElementById("modalInfo");
    const closeBtn = document.getElementById("closeModal");

    if (!modal || !modalInfo || !closeBtn) return;

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            const product = products[index];

            modalInfo.innerHTML = `
        <img src="${product.img}" alt="${product.name}" style="width:100%;">
        <h2>${product.name}</h2>
        <p><strong>Type:</strong> ${product.type}</p>
        <p><strong>Price:</strong> ${product.price}</p>
      `;

            modal.style.display = "block";
            modal.setAttribute("aria-hidden", "false");
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
        }
    });

    // Accessibility: close modal with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
        }
    });
}

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
        console.error("Error fetching featured products:", error);
        container.innerHTML = "<p>Sorry, featured products could not be loaded.</p>";
    }
}
displayFeatured();

// ==============================
// COLLECTIONS PAGE – FILTER
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
        console.error("Error fetching collections:", error);
        container.innerHTML = "<p>Sorry, collections could not be loaded.</p>";
    }
}
displayCollections();

// ==============================
// CONTACT FORM (LOCAL STORAGE)
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
