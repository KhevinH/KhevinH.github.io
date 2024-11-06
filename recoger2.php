<?php
$nombre = $_POST['nombre'];
$Edad = $_POST['Edad'];
$Fecha = $_POST['Fecha'];
$VIP = $_POST['VIP'];
$Provincia = $_POST['Provincia'];

include 'db.php';
$consulta = $conexion2->prepare("INSERT INTO compania (nombre, Edad, Fecha, VIP, Provincia) VALUES (?, ?, ?, ?, ?)");
$consulta->execute([$nombre, $Edad, $Fecha, $VIP, $Provincia]);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factura de Reserva</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .factura-container {
            background-color: #fff;
            width: 80%;
            max-width: 800px;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-top: 4px solid #007bff;
        }

        /* Encabezado de la factura */
        .factura-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }

        .factura-header h1 {
            font-size: 36px;
            color: #333;
            margin: 0;
        }

        .factura-header div {
            text-align: right;
        }

        .factura-header div p {
            margin: 2px 0;
            font-size: 14px;
            color: #555;
        }

        /* Detalles de la factura */
        .factura-details {
            margin-bottom: 30px;
        }

        .factura-details table {
            width: 100%;
            border-collapse: collapse;
        }

        .factura-details th, .factura-details td {
            padding: 12px;
            text-align: left;
            font-size: 16px;
            border: 1px solid #ddd;
        }

        .factura-details th {
            background-color: #f2f2f2;
            color: #333;
        }

        .factura-details td {
            color: #555;
        }

        /* Totales */
        .totales {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            font-size: 18px;
        }

        .totales .total {
            font-weight: bold;
            font-size: 20px;
        }

        /* Botones */
        .botones {
            display: flex;
            justify-content: center;
            margin-top: 30px;
        }

        .botones a {
            text-decoration: none;
            background-color: #007bff;
            color: #fff;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 16px;
            margin: 0 10px;
            transition: background-color 0.3s;
        }

        .botones a:hover {
            background-color: #0056b3;
        }

        .cerrar-sesion {
            background-color: #e74c3c;
        }

        .cerrar-sesion:hover {
            background-color: #c0392b;
        }
    </style>
</head>
<body>

    <div class="factura-container">
        <div class="factura-header">
            <h1>Factura</h1>
            <div>
                <p><strong>Nº de factura:</strong> ES-001</p>
                <p><strong>Fecha:</strong> 29/01/2019</p>
                <p><strong>Nº de pedido:</strong> 1730/2019</p>
                <p><strong>Fecha vencimiento:</strong> 29/01/2019</p>
            </div>
        </div>

        <div class="factura-details">
            <table>
                <tr>
                    <th>Cliente</th>
                    <td><?php echo htmlspecialchars($nombre); ?></td>
                </tr>
                <tr>
                    <th>Edad</th>
                    <td><?php echo htmlspecialchars($Edad); ?></td>
                </tr>
                <tr>
                    <th>Fecha de Viaje</th>
                    <td><?php echo htmlspecialchars($Fecha); ?></td>
                </tr>
                <tr>
                    <th>VIP</th>
                    <td><?php echo htmlspecialchars($VIP); ?></td>
                </tr>
                <tr>
                    <th>Provincia</th>
                    <td><?php echo htmlspecialchars($Provincia); ?></td>
                </tr>
            </table>
        </div>

        <div class="totales">
            <div><strong>Subtotal:</strong> 165.00 €</div>
            <div><strong>IVA 21%:</strong> 34.65 €</div>
            <div class="total"><strong>TOTAL:</strong> 199.65 €</div>
        </div>

        <div class="botones">
            <a href="form.html">Hacer otro viaje</a>
            <a href="logout.php" class="cerrar-sesion">Cerrar sesión</a>
        </div>
    </div>

</body>
</html>
