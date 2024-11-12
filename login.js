function login() {
    const username = document.getElementById("username").value;
    if (username) {
        // Guarda el nombre de usuario en localStorage para accederlo en otras páginas
        localStorage.setItem("username", username);
        window.location.href = "title.html"; // Redirige a la pantalla de título
    } else {
        alert("Please enter a username.");
    }
}