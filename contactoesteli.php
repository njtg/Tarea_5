<?php

	$nombre= $_POST['nombre'];
	$mail = $_POST['email'];
	$msj = $_POST['mensaje'];

	$header = 'From: ' . $mail . "\r\n";
	$header.= "X-Mailer: PHP/". phpversion(). "\r\n";
	$header.= "Mine-Version: 1.0 \r\n";		
	$header.= "Content-Type: text/plain";

	$mensaje = "De: " . $nombre . "\r\n";
	$mensaje.= "Correo Electrónico: " . $mail . "\r\n";
	$mensaje.= "Mensaje: " . $_POST['mensaje'] . "\r\n";

	$correounn= 'jubelk13@gmail.com';
	$asunto= 'Asunto';

	mail($correounn, $asunto, utf8_decode($mensaje), $header);

	header("contactoesteli.html");
?>