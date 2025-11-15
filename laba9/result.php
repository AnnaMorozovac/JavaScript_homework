<!DOCTYPE html>
<html>
<head>
<title>Результат замовлення</title>
</head>
<body>
<h3>Ваше замовлення прийнято</h3>
<?php
$product = $_POST["product"];
$material = $_POST["material"];
$quantity = $_POST["quantity"];

echo "Замовлено виріб – $product <br>";
echo "Матеріал – $material <br>";
echo "Кількість – $quantity <br>";
?>
<p><a href="order.html">Повернутися</a></p>
</body>
</html>

