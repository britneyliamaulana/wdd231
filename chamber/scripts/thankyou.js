const params = new URLSearchParams(window.location.search);

document.getElementById("fname").textContent = params.get("fname");
document.getElementById("lname").textContent = params.get("lname");
document.getElementById("email").textContent = params.get("email");
document.getElementById("phone").textContent = params.get("phone");
document.getElementById("business").textContent = params.get("business");

const rawTimestamp = params.get("timestamp");

if (rawTimestamp) {
    const formatted = new Date(rawTimestamp).toLocaleString();
    document.getElementById("timestamp").textContent = formatted;
}
