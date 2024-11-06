<?php
include 'db.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $password = $_POST['password'];
    
    $sql = "SELECT * FROM users WHERE username = :username";
    $stmt = $conexion2->prepare($sql);
    $stmt->execute(['username' => $username]);
    
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['username'] = $user['username'];
        header("Location: form.html");  // Redirige al formulario de la agencia
        exit();
    } else {
        // Guardar el mensaje de error en una variable de sesión
        $_SESSION['error'] = "Usuario o contraseña incorrectos.";
        header("Location: login.php");  // Recargar la página para mostrar el mensaje de error
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio de sesión</title>
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

        form {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            padding: 30px;
            width: 100%;
            max-width: 400px;
            border: 1px solid #e0e0e0;
            transition: transform 0.3s ease-in-out;
        }

        form:hover {
            transform: scale(1.02);
        }

        h2 {
            text-align: center;
            color: #333;
            font-weight: 600;
            margin-bottom: 20px;
        }

        label {
            font-size: 15px;
            color: #444;
            margin-bottom: 8px;
            display: block;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 2px solid #ddd;
            border-radius: 8px;
            box-sizing: border-box;
            font-size: 14px;
            background: #f7f7f7;
            transition: border-color 0.3s ease;
        }

        input[type="text"]:focus,
        input[type="password"]:focus {
            border-color: #007bff;
            outline: none;
            box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
        }

        button {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #007bff, #0056b3);
            border: none;
            border-radius: 8px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        button:hover {
            background: linear-gradient(135deg, #0056b3, #004494);
            box-shadow: 0 8px 16px rgba(0, 123, 255, 0.4);
        }

        .form-help {
            font-size: 12px;
            color: #888;
            text-align: center;
            margin-top: 10px;
        }

        /* Estilo para el mensaje de error */
        .error-message {
            color: #ff4d4d;
            background-color: #ffe6e6;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            border: 1px solid #ff9999;
            box-shadow: 0 0 8px rgba(255, 77, 77, 0.1);
        }
    </style>
</head>
<body>

    <div class="form-container">
        <form action="login.php" method="post">
            <h2>Iniciar sesión</h2>

            <!-- Mostrar el mensaje de error si existe -->
            <?php if (isset($_SESSION['error'])): ?>
                <div class="error-message">
                    <?php
                    echo $_SESSION['error'];
                    unset($_SESSION['error']);  // Limpiar el mensaje después de mostrarlo
                    ?>
                </div>
            <?php endif; ?>

            <label for="username">Usuario:</label>
            <input type="text" name="username" required><br>
            <label for="password">Contraseña:</label>
            <input type="password" name="password" required><br>
            <button type="submit">Iniciar sesión</button>
            <div class="form-help">Introduce tu usuario y contraseña para acceder.</div>
        </form>
    </div>

</body>
</html>
