<?php

$mysqli = new mysqli("localhost", "root", "", "examencarritoec") or die("Error de connexion a la base de dades ".$mysqli->connect_error);
	$mysqli->set_charset('utf8');

		$consulta = "select * from productos";

	$rs = $mysqli->query($consulta)  or die ("No se ha podido ejecutar la consulta");
	$productos=Array();		
	while ($registre = $rs->fetch_assoc()) {
        $producto['id']=$registre['id']; 
        $producto['name']=$registre['name'];
        $producto['price']=$registre['price'];
        $producto['img']=$registre['img'];
		$productos[]=$producto;	
  	}
	echo json_encode($productos); 
	$rs->free();
	$mysqli->close();
?>