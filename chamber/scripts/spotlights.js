const spotlightContainer = document.querySelector("#spotlight-container");
const membersURL = "data/members.json";

async function loadSpotlights() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) throw new Error("Member data not found");

        const data = await response.json();

        // Filter Gold & Silver members
        const qualifiedMembers = data.members.filter(member =>
            member.membership === "Gold" || member.membership === "Silver"
        );

        // Shuffle array
        const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
        // Always select 3 members
        const selectedMembers = shuffled.slice(0, 3);

        displaySpotlights(selectedMembers);

    } catch (error) {
        console.error("Spotlight error:", error);
    }
}

function displaySpotlights(members) {
    const spotlightContainer = document.querySelector("#spotlight-container");
    spotlightContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p><strong>Membership Level:</strong> ${member.membership}</p>
            <p>${member.description}</p>
        `;

        spotlightContainer.appendChild(card);
    });
}


loadSpotlights();
