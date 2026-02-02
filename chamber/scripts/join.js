// Set timestamp when page loads
document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // Open modals
    document.querySelectorAll("[data-modal]").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const modalId = link.getAttribute("data-modal");
            document.getElementById(modalId).showModal();
        });
    });

    // Close modals
    document.querySelectorAll(".close-modal").forEach(button => {
        button.addEventListener("click", () => {
            button.closest("dialog").close();
        });
    });
});
