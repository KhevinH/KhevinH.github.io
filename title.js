document.getElementById("username-display").textContent = localStorage.getItem("username");

function startGame() {
    window.location.href = "level1.html"; // Redirige al primer nivel
}