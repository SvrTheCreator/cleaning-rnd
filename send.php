<?php
$token = "7315861448:AAHGustXhJLcWWZI4IOK8eIMuFIppUbDAns";
$chat_id = "975689794";

// Получаем данные с защитой от XSS
$name = htmlspecialchars(trim($_POST['name']));
$phone = htmlspecialchars(trim($_POST['phone']));
$category = htmlspecialchars(trim($_POST['category']));

// Формируем сообщение
$text = "🧹 Новая заявка:\n";
$text .= "👤 Имя: $name\n";
$text .= "📞 Телефон: $phone\n";
$text .= "📦 Категория: $category";

// Готовим URL
$url = "https://api.telegram.org/bot$token/sendMessage";

// Отправка через file_get_contents
$response = file_get_contents($url . "?chat_id=$chat_id&text=" . urlencode($text));

// Перенаправление
header("Location: thankyou.html");
exit;
