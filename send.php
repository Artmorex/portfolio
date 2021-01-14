<?php
$fio = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

$fio = urldecode($fio);
$email = urldecode($email);
$message = urldecode($message);

$fio = trim($fio);
$email = trim($email);
$message = trim($message);

if (mail("artmorex@artmorex.tech", "Дорогой, тебе пришло письмо с artmorex.tech", "Имя:".$fio.". E-mail: ".$email, "Текст: ".$message)) { 
	echo "Your message successfully send!";
} else {
	echo "There was an error sending your message! Please contact admin@artmorex.tech or artmorex@gmail.com";
}
?>