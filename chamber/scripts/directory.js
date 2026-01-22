const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#gridView");
const listButton = document.querySelector("#listView");

const membersURL = "data/members.json";

// Fetch member data
async function getMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

// Display members
function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        const img = document.createElement("img");
        img.src = `images/${member.image}`;
        img.alt = `${member.name} logo`;
        img.loading = "lazy";

        const name = document.createElement("h3");
        name.textContent = member.name;

        const address = document.createElement("p");
        address.textContent = member.address;

        const phone = document.createElement("p");
        phone.textContent = member.phone;

        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = member.website;
        website.target = "_blank";

        const level = document.createElement("p");
        level.textContent = `Membership Level: ${member.membership}`;

        card.append(img, name, address, phone, website, level);
        membersContainer.appendChild(card);
    });
}

// View toggle
gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view");
});


// Initialize
getMembers();
