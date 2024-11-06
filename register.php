<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Escapando el input para evitar ataques XSS
    $username = htmlspecialchars($_POST['username']);
    // Encriptando la contraseña con BCRYPT
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    
    // Preparando la consulta SQL para insertar el nuevo usuario
    $sql = "INSERT INTO users (username, password) VALUES (:username, :password)";
    $stmt = $conexion2->prepare($sql);
    
    // Ejecutando la consulta SQL
    if ($stmt->execute(['username' => $username, 'password' => $password])) {
        // Si el registro fue exitoso, muestra el siguiente HTML con estilo
        echo "<!DOCTYPE html>
        <html lang='es'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Registro Exitoso</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #e0eafc, #cfdef3);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .message-container {
                    background-color: #fff;
                    border-radius: 12px;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                    padding: 30px;
                    max-width: 400px;
                    width: 100%;
                    text-align: center;
                    border: 1px solid #e0e0e0;
                }
                h2 {
                    color: #333;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 16px;
                    color: #555;
                    margin-bottom: 30px;
                }
                a {
                    display: inline-block;
                    padding: 10px 20px;
                    background: linear-gradient(135deg, #007bff, #0056b3);
                    border-radius: 8px;
                    color: white;
                    text-decoration: none;
                    font-size: 16px;
                    transition: background 0.3s ease;
                }
                a:hover {
                    background: linear-gradient(135deg, #0056b3, #004494);
                }
            </style>
        </head>
        <body>
            <div class='message-container'>
                <h2>Registro Exitoso</h2>
                <p>Tu cuenta ha sido creada correctamente.</p>
                <a href='login.php'>Iniciar sesión</a>
            </div>
        </body>
        </html>";
    } else {
        // Si hay un error, muestra un mensaje sencillo
        echo "Error al registrar.";
    }
}
?>
