addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
    presionBoton();
    $(".anadircarrito").click(anadircarrito);
}

var conexion1;
function presionBoton(e)
{
    conexion1=new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open('GET','index.php', true);
    conexion1.send();
}

function procesarEventos()
{

    if(conexion1.readyState == 4)
    {

        var datos=JSON.parse(conexion1.responseText);
        for(var i=0;i<datos.length;i++)
        {
            $(".container").append("<img src='img/"+datos[i].img+"' width='200px' height='200px'></img></div>");
            $(".container").append("<p class='' id='nombre'>"+datos[i].name+"</p>");
            $(".container").append("<p > Precio: <div id='precio'>"+datos[i].price+"</div></p>");
            $(".container").append("<button type='button' class='btn btn-primary btn-block anadircarrito' id='"+datos[i].id+"'>AÑADIR AL CARRITO</button><br>")


        }
        $(".anadircarrito").click(anadircarrito);
    } 
}

function anadircarrito(e)
{
    e.preventDefault();
    var id=$(this).attr("id");
    alert(id);
    
}   
    
    
   /* var nombre = $("#nombre").val();
    var precio = $("#precio").val();

    var cadenajson = '{"nombre":"'+nombre+'","precio":"'+precio+'"}';

    if(sessionStorage.getItem(['carrito'])=="nulo")
    {
        var cart = new Array;
        cadenajson= JSON.parse(cadenajson);
        cart.push(cadenajson);
        cart = JSON.stringify(vacas);
        sessionStorage.setItem('carrito',cart);
    }
    else
    {
        var cart = sessionStorage.getItem(['carrito']);
        cart = JSON.parse(vacas);
        cadenajson= JSON.parse(cadenajson);
        cart.push(cadenajson);
        cart = JSON.stringify(cart);
        sessionStorage.setItem('carrito',cart);
    }
    iniciarEventos();*/


