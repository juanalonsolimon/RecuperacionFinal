$(document).ready(inicializarEventos);

function inicializarEventos()
{
    cargarProductos();
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
        $("#resultado").append("<p id='foto"+f+"'><img src='img/"+datos[f].img+"' width='315' height='315'></p>");
        $("#resultado").append("<p id='nombre"+f+"'>"+datos[f].name+"</p>");
        $("#resultado").append("<p id='precio"+f+"'>"+datos[f].price+"</p>");
        $("#resultado").append("<button id='anadir"+f+"' value='"+datos[f].id+"'>Añadir</button>");
        $("#resultado").append("</div>");
        $("#anadir"+f).click(anadirCarrito);
    }

  }
          
}  

function anadirCarrito(e)
{
    e.preventDefault();
    var idd = $(this).val();
    var id = idd -1;
    var nombre = "#nombre"+id;
    var precio = "#precio"+id;
    var nombre2 = $(nombre).text();
    var precio2 = $(precio).text();
    
    if(localStorage.length == 0)
        {
            var cantidad = 1;
        }else{
            var todos = localStorage.getItem("carrito");
            todos = JSON.parse(todos);
            
            for (var f=0; f<todos.length;f++)
                {
                    var id2 = todos[f].id;
                    if(id == id2)
                        {
                            var cantidad = todos[f].cantidad;
                            cantidad = parseInt(cantidad)+1;
                        }else{
                            var cantidad = 1;
                        }
                    
                }
        }
    
    var producto = '{"id":"'+id+'", "nombre":"'+nombre2+'", "precio":"'+precio2+'", "cantidad":"'+cantidad+'"}';
    producto = JSON.parse(producto);
    
    
    if(localStorage.length == 0)
        {
            var todos = new Array;
            todos.push(producto);
            todos = JSON.stringify(todos)
            localStorage.setItem("carrito", todos);
        }else{
            var todos = localStorage.getItem("carrito");
            todos = JSON.parse(todos);
            todos.push(producto);
            todos = JSON.stringify(todos);
            localStorage.setItem("carrito", todos);      
        }
    
    alert("Se ha añadido al carrito el producto");
    
    console.log(localStorage);
    
    
}