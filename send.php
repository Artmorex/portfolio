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

if (mail("admin@artmorex.com", "My Dear, myself, you have a new message from artmorex.com", "Имя:".$fio.". E-mail: ".$email, "Текст: ".$message)) { 
	echo "Your message successfully send!";
} else {
	echo "There was an error sending your message! Please contact artmorex@gmail.com";
}
?>