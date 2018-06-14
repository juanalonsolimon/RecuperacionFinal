$(document).ready(inicializarEventos);

function inicializarEventos(){
    
    $("#vaciar").click(vaciarCarrito);
    
    var todos = localStorage.getItem("carrito");
    todos = JSON.parse(todos);
    var total = 0;
    
        for (var f=0; f<todos.length;f++)
            {
                $("#myCartData").append("<tr><td>"+todos[f].id+"</td><td>"+todos[f].nombre+"</td><td>"+todos[f].precio+"</td><td>"+todos[f].cantidad+"</td><td>"+parseInt(todos[f].precio)*parseInt(todos[f].cantidad)+"</td></tr>");
                
                 total = (parseInt(todos[f].precio)*parseInt(todos[f].cantidad)) + total;
            }
        $("#myCartData").append("<tr><td></td><td></td><td></td><td></td><td>Precio final: "+total+"</td></tr>");
}

function vaciarCarrito(){
    
    localStorage.clear();
    alert("El carrito ha sido vaciado");

}