<?php
$servidor = 'localhost';
$basedatos = 'compania';
$usuario = 'root';
$contrasena = '';

try {
    $conexion2 = new PDO("mysql:host=$servidor;dbname=$basedatos", $usuario, $contrasena);
    $conexion2->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}
?>
