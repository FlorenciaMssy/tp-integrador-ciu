document.addEventListener('DOMContentLoaded', function (event) {
    var solicitudes = [{
            "Fecha_Solicitud": "30/03/2020",
            "Descripción": "Pedido de notebook",
            "Estado": "Abierta",
            "Seleccionar": " "
        },
        {
            "Fecha_Solicitud": "03/04/2020",
            "Descripción": "Cambio de horario",
            "Estado": "En progreso",
            "Seleccionar": " "
        },
        {
            "Fecha_Solicitud": "12/05/2020",
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

    //add json data to the table as row

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
    }
});

document.getElementById("button").addEventListener('click', saveSolicitud);

function saveSolicitud() {
    var pfechaSolicitud = document.getElementById("fecha").value;
    var pdescripcion = document.getElementById("descrpcion").value;
    var pestado = document.getElementById("estado").value;

    nuevaSolicitud(pfechaSolicitud, pdescripcion, pestado);
}

function nuevaSolicitud(pfechaSolicitud, pdescripcion, pestado) {

    var nuevosDatos = {
        Fecha_Solicitud: pfechaSolicitud,
        Descripcion: pdescripcion,
        Estado: pestado
    };
    solicitudes.push(nuevosDatos);

}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}