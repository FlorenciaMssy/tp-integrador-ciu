var checkboxSelUsuario = document.getElementsByClassName("check-usuario");
var eliminarBtn = document.getElementById("eliminar-btn");
var modificarBtn = document.getElementById("modificar-btn");
var nuevoBtn = document.getElementById("nuevo-btn");
var cerrarSession = document.getElementById("cerrar-sesion");

var usuarios = [{
    "Avatar": "",
    "Fecha_de_nacimiento": "1991-03-12",
    "Nombre": "Pepe",
    "Contraseña": "pepe123",
    "Seleccionar": "",
    "Activo": ""
},
{"Avatar": "",
    "Fecha_de_nacimiento": "1990-03-03",
    "Nombre": "papa",
    "Contraseña": "pepe123",
    "Seleccionar": "",
    "Activo": ""
}] 

var usu = JSON.parse(localStorage.getItem('usuarios'));
document.addEventListener('DOMContentLoaded', crearTabla());


function generarIndice(lista) {
    if(!lista) {
        lista = usuarios
    }
    return lista.map((usuario, index) => {
        usuarios.Seleccionar = index;
        return usuario
    })
}

function crearTabla() {
    var table = document.getElementById("mostrarDato");
    while (table.firstChild) {
        table.removeChild(table.firstChild)
    }
    usu = generarIndice(usu);
    //sol = JSON.parse(localStorage.getItem('solicitudes'));
    var col = [];

    for (var i = 0; i < usu.length; i++) {
        for (var key in usu[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    var tr = table.insertRow(0); //table row

    for (var i = 0; i < col.length; i++) { //table header
        var th = document.createElement("th");
        th.innerText = col[i];
        tr.appendChild(th);
    }

    //add json data to the table as row
    for (var i = 0; i < usu.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            if (col[j] !== "Seleccionar") {
                tabCell.innerText =  usu[i][col[j]];
            }

            if (j == 4) {

                var checkbox = document.createElement("input"); //Added for checkbox
                checkbox.type = "radio"; //Added for checkbox
                checkbox.className = "check-usuario"
                checkbox.name = "buttonCh";
                checkbox.id = [i];
                checkbox.value = usu[i][col[j]];
                tabCell.appendChild(checkbox);
                existeTabla = true;
            }
        }
    }
    localStorage.setItem("usuarios", JSON.stringify(usu))
}


function usuarioSeleccionado() {
    var posicion;
    for (var i = 0; i < checkboxSelUsuario.length; i++) {
        if (checkboxSelUsuario[i].checked) {
            posicion = i
        }
    }
    return posicion
}

function estaSeleccionado() {
    var seleccion;
    for (var i = 0; i < checkboxSelUsuario.length; i++) {
        if (checkboxSelUsuario[i].checked) {
            seleccion = checkboxSelUsuario[i].checked
        }

    }
    return seleccion
}
modificarBtn.addEventListener('click', () =>{
    if (estaSeleccionado()) {
        localStorage.setItem('modificarUsuario', JSON.stringify(usuarioSeleccionado()));
        localStorage.setItem('esNuevo', false)
        document.location.href = "cm_usuario.html"
    } else {
        document.getElementById("error").style.display = "block"
        error.innerHTML = "Debe seleccionar un usuario para modificar."
    }
})

nuevoBtn.addEventListener('click', ()=>{
    localStorage.setItem('esNuevo', true)
    document.location.href = "cm_usuario.html"
})



eliminarBtn.addEventListener('click', () => {
    if (estaSeleccionado()) {
        usu.splice(estaSeleccionado(), 1);
        localStorage.setItem('usuarios', JSON.stringify(usu));
        crearTabla();
    } else {
        document.getElementById("error").style.display = "block"
        error.innerHTML = "Debe seleccionar un usuario para eliminar."
    }
})

cerrarSession.addEventListener('click', () => {
    document.location.href = "../login/index.html"
})