$(document).ready(inicializarEventos);

function inicializarEventos()
{
    cargarProductos();
    //$("#mycart").click("verCarrito");
}

var conexion1;
function cargarProductos()
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
    for(var f=0;f<datos.length;f++)
    {
        $("#resultado").append("<div class='col-md-4'>");
        $("#resultado").append("<p id='foto'><img src='img/"+datos[f].img+"' width='315' height='315'></p>");
        $("#resultado").append("<p id='nombre'>"+datos[f].name+"</p>");
        $("#resultado").append("<p id='precio'>"+datos[f].price+"</p>");
        $("#resultado").append("<button id='anadir' val='"+datos[f].id+"'>Añadir</button>");
        $("#resultado").append("</div>");
    }
      
  }
        llamarAnadirCarrito();
  
}

function llamarAnadirCarrito(){
        $("#anadir").click(anadirCarrito);
}

function anadirCarrito(e)
{
    e.preventDefault();
    alert("entra");
    
    console.log(this.nombre);
    
    //alert(this.id);
}