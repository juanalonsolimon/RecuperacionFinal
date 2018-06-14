addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
    $("#mycart").append("Volver a la tienda");
    $(".cabecera").append("<div class='btn btn-warning carrito' id='vaciarcarrito'>Vaciar Carrito</div>");
    $("#mycart").click(function(){
        window.location.href = "./tienda.html";
    })
    presionBoton();

    $("#vaciarcarrito").click(vaciarcarrito);
}

function vaciarcarrito(){
    sessionStorage.clear();
    location.reload(true);
}

function presionBoton(){
    var cantidad=1;
    var carrito = sessionStorage.getItem(['carrito']);
    cart = JSON.parse(carrito);
    
    var total = cart.length;
    var totaltodo=0;
    $("#myCartData").append('<td>Producto</td>    <td>Cantidad</td>  <td>Precio</td>  <td>Total</td>   ');
    for(var i=0;i<total;i++){
        var totall=cantidad*cart[i].precio;
        totaltodo=parseInt(totaltodo)+parseInt(cart[i].precio);
        $("tfoot").append('<tr><td>'+cart[i].nombre+'</td><td><button class="btn btn-primary" type="button" id="menos">-</button><input type="text" value="'+cantidad+'" name="cantidad"><button type="button" id="mas" class="btn btn-primary">+</button></td><td>'+cart[i].precio+'</td><td>'+totall+'</td></tr>');
        
    }
$("tfoot").append('<tr><td></td><td></td><td></td><td>Total : '+totaltodo+'<td></tr>');
}
