var checkboxSeleccionado = document.getElementsByClassName("checkb");
var eliminarBtn = document.getElementById("eliminar-btn");
var modificarBtn = document.getElementById("modificar-btn");
var nuevoBtn = document.getElementById("nuevo-btn");
var cerrarSession = document.getElementById("cerrar-sesion");

var solicitudes = [{
        "Fecha_Solicitud": "30/03/2020",
        "Descripción": "Pedido de notebook",
        "Estado": "Abierta",
        "Seleccionar": 0
    },
    {
        "Fecha_Solicitud": "03/04/2020",
        "Descripción": "Cambio de horario",
        "Estado": "En progreso",
        "Seleccionar": 0
    },
    {
        "Fecha_Solicitud": "12/05/2020",
        "Descripción": "Pedido de una bicicleta para llegar a la universidad",
        "Estado": "Cerrada",
        "Seleccionar": 0
    }
]


var sol = JSON.parse(localStorage.getItem('solicitudes'));
document.addEventListener('DOMContentLoaded', crearTabla());

function solicitudSeleccionada() {
    var posicion;
    for (var i = 0; i < checkboxSeleccionado.length; i++) {
        if (checkboxSeleccionado[i].checked) {
            posicion = i
        }
    }
    return posicion
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
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

function estaSeleccionado() {
    var seleccion;
    for (var i = 0; i < checkboxSeleccionado.length; i++) {
        if (checkboxSeleccionado[i].checked) {
            seleccion = checkboxSeleccionado[i].value
        }
    }
    return seleccion
}

nuevoBtn.addEventListener('click', () => {
    localStorage.setItem('esNuevo', true)
    document.location.href = "nueva_solicitud.html"
})

modificarBtn.addEventListener('click', () => {
    if (estaSeleccionado()) {
        localStorage.setItem('modificarElemento', JSON.stringify(estaSeleccionado()));
        localStorage.setItem('esNuevo', false)
        document.location.href = "nueva_solicitud.html"
    } else {
        document.getElementById("error").style.display = "block"
        error.innerHTML = "Debe seleccionar una solicitud para modificar."
    }
})


eliminarBtn.addEventListener('click', () => {
    if (estaSeleccionado()) {
        sol.splice(estaSeleccionado(), 1);
        localStorage.setItem('solicitudes', JSON.stringify(sol));
        crearTabla();
    } else {
        document.getElementById("error").style.display = "block"
        error.innerHTML = "Debe seleccionar una solicitud para eliminar."
    }
})

cerrarSession.addEventListener('click', () => {
    document.location.href = "../login/index.html"
})