<?php
	$mysqli = new mysqli("localhost", "root", "", "tiendacliente");

    $mysqli->set_charset('utf8');

    $consulta = "Select * From productos";

	$resultado = $mysqli->query($consulta);
	$datos=Array();		

	while ($fila = $resultado->fetch_assoc()) {
        
		$dato['id']=$fila['id']; 
        $dato['name']=$fila['name'];
        $dato['price']=$fila['price'];
        $dato['img']=$fila['img'];	
        $datos[]=$dato;	
        
  	}

	echo json_encode($datos); 
	$resultado->free();
	$mysqli->close();
?>