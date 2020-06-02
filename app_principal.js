var boton = document.getElementById("cerrarSesion");

boton.addEventListener('click', function (event) {

    location.href = "login.html"
})

document.addEventListener('DOMContentLoaded', function (event) {
    var solicitudes = [{
            "Fecha Solicitud": "30/03/2020",
            "Descripción": "Pedido de notebook",
            "Estado": "Abierta",
            "Seleccionar": " "
        },
        {
            "Fecha Solicitud": "03/04/2020",
            "Descripción": "Cambio de horario",
            "Estado": "En progreso",
            "Seleccionar": " "
        },
        {
            "Fecha Solicitud": "12/05/2020",
            "Descripción": "Pedido de una bicicleta para llegar a la universidad",
            "Estado": "Cerrada",
            "Seleccionar": " ",
        }
    ]

    var col = [];

    for (var i = 0; i < solicitudes.length; i++) {
        for (var key in solicitudes[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    var table = document.getElementById("mostrarDato");

    var tr = table.insertRow(-1); //table row

    for (var i = 0; i < col.length; i++) { //table header
        var th = document.createElement("th");
        th.innerText = col[i];
        tr.appendChild(th);
    }

    //add jason data to the table as row

    for (var i = 0; i < solicitudes.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerText = solicitudes[i][col[j]];

            if (j == 3) {

                var checkbox = document.createElement("input"); //Added for checkbox
                checkbox.type = "checkbox"; //Added for checkbox
                tabCell.appendChild(checkbox);
            }
        }

        function check() {
            document.getElementById(checkbox).checked = true;
            

        }
    }

    function uncheck() {
        document.getElementById(checkbox).checked = false;
    }

});