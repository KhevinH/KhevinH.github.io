const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;

let player = { x: 200, y: 200, size: 20 };
let enemy = { x: Math.random() * 380, y: Math.random() * 380, size: 20 };

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Dibujar jugador
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.size, player.size);
    // Dibujar enemigo
    ctx.fillStyle = "red";
    ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
}

function movePlayer(event) {
    switch (event.key) {
        case "ArrowUp": player.y -= 10; break;
        case "ArrowDown": player.y += 10; break;
        case "ArrowLeft": player.x -= 10; break;
        case "ArrowRight": player.x += 10; break;
    }
    checkCollision();
    draw();
}

function checkCollision() {
    if (player.x < enemy.x + enemy.size &&
        player.x + player.size > enemy.x &&
        player.y < enemy.y + enemy.size &&
        player.y + player.size > enemy.y) {
        // Redirige a la pantalla de combate del nivel 1
        window.location.href = "combat1.html";
    }
}

function showHelp() {
    alert("Comparatives are used to compare two things (e.g., 'The cat is bigger than the mouse'). Superlatives compare one thing to a group (e.g., 'The elephant is the biggest animal').");
}

document.addEventListener("keydown", movePlayer);
draw();