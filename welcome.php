<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
header("Location: form.html");  // Redirige al formulario de la agencia
exit();
?>
