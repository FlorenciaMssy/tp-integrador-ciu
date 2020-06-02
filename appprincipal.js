var boton = document.getElementById("cerrarSesion")
boton.addEventListener('click', function(event){

    location.href="login.html"
})



function agregarSolicitudJSON(){
 
        var solicitudes = [
            {
                "Fecha Solicitud": "30/03/2020",
                "Descripción": "Pedido de notebook",
                "Estado": "Abierta"
            },
            {
                "Fecha Solicitud": "03/04/2020",
                "Descripción": "Cambio de horario",
                "Estado": "En progreso"
            },
            {
                "Fecha Solicitud": "12/05/2020",
                "Descripción": "Pedido de una bicicleta para llegar a la universidad",
                "Estado": "Cerrada"
            }
        ]


    var col = [];

    for(var i = 0; i < solicitudes.length; i++){
        for (var key in solicitudes [i]){
            if(col.indexOf(key) === -1){
                col.push(key);
            }
        }
    }


var table = document.createElement("table");

var tr = table.insertRow(-1); //table row

for(var i=0; i < col.length; i++){  //table header
    var th = document.createElement("th");
debugger;

    th.innerHtml = col[i];
    tr.appendChild(th);
}


//add jason data to the table as row

for(var i=0; i < solicitudes.length; i++){
    tr = table.insertRow(-1);
    for(var j = 0; j < col.length; j++){
        var tabCell = tr.insertCell(-1);
        tabCell.innerHtml = solicitudes [i][col[j]];
    }

}
//finally add the new created table with json data to a container
var divContainer = document.getElementById("mostrarDato");
divContainer.innerHtml = "";
divContainer.appendChild(table);
}
