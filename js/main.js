addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
    $("#mycart").append("Mi Carrito");
    $(".cabecera").append("<div class='btn btn-warning carrito' id='vaciarcarrito'>Vaciar Carrito</div>");
    $("#mycart").click(function(){
        window.location = "./CarritoCompra.html";
    })
    presionBoton();

    $("#vaciarcarrito").click(vaciarcarrito);
}

var conexion1;
function presionBoton(e)
{
    conexion1=new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open('GET','index.php', true);
    conexion1.send();
    
    function procesarEventos()
{

    if(conexion1.readyState == 4)
    {

        var datos=JSON.parse(conexion1.responseText);
        for(var i=0;i<datos.length;i++)
        {
            $(".container").append("<div id='"+datos[i].id+"' class='datos productos carbox'></div>");
            $(".datos").append("<img src='img/"+datos[i].img+"' width='200px' height='200px' class='anadircarrito carbox-img ' id='"+datos[i].id+"'></img></div>");
            $(".datos").append("<p class='' id='nombre"+datos[i].id+"'>"+datos[i].name+"</p>");
            $(".datos").append("<p class=''> Precio: <div id='precio"+datos[i].id+"'>"+datos[i].price+"</div></p>");
            $(".datos").append("<button type='button' class='btn btn-primary btn-block anadircarrito' id='"+datos[i].id+"'>AÑADIR AL CARRITO</button><br>")


        }
        $(".anadircarrito").click(anadircarrito);
    } 
}
}



function anadircarrito(e)
{
    e.preventDefault();
    var id=$(this).attr("id");
    var nombre=$("#nombre"+id+"").text();
    var precio=$("#precio"+id+"").text();


    var cadenajson = '{"id":"'+id+'","nombre":"'+nombre+'","precio":"'+precio+'"}';



    if(sessionStorage.getItem(['carrito'])==null)
    {
        var cart = new Array;
        cadenajson= JSON.parse(cadenajson);
        cart.push(cadenajson);
        cart = JSON.stringify(cart);
        sessionStorage.setItem('carrito',cart);

    }
    else
    {
        var cart = sessionStorage.getItem(['carrito']);
        cart = JSON.parse(cart);
        cadenajson= JSON.parse(cadenajson);
        cart.push(cadenajson);
        cart = JSON.stringify(cart);
        sessionStorage.setItem('carrito',cart);
    }
  $("#mensaje").attr("class","container alert alert-success");
    $("#mensaje").html("Producto Insertado Correctamente");
}

function vaciarcarrito(){
    sessionStorage.clear();
    $("#mensaje").attr("class","container alert alert-danger");
    $("#mensaje").html("Carrito Vaciado!!!!");
}




