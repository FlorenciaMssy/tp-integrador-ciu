var checkboxSelUsuario = document.getElementsByClassName("check-usuario");
var eliminarBtn = document.getElementById("eliminar-btn");
var modificarBtn = document.getElementById("modificar-btn");
var nuevoBtn = document.getElementById("nuevo-btn");
var cerrarSession = document.getElementById("cerrar-sesion");
var banderaLogin = 0

var usuarios = [{
    "Avatar": md5("acrodri991@gmail.com"),
    "Fecha_de_nacimiento": "1991-03-12",
    "Usuario": "Pepe",
    "Email" : "acrodri991@gmail.com",
    "Seleccionar": "",
    "Activo": false,
    "Contraseña": "pepe123",
    /*"Solicitudes": [{ /*   "Fecha_Solicitud": "30/03/2020",
    "Descripción": "Pedido de notebook",
    "Estado": "Abierta",
    "Seleccionar": 0}]*/

},
{   "Avatar": md5("juanmadaria92@gmail.com"),
    "Fecha_de_nacimiento": "1990-03-03",
    "Usuario": "papa",
    "Email" : "juanmadaria92@gmail.com",
    "Seleccionar": "",
    "Activo": true,
    "Contraseña": "pepe123"
}] 




function generarIndice(lista) {
    if(!lista) {
        lista = usuarios
    }
    return lista.map((usuario, index) => {
        usuarios.Seleccionar = index;
        return usuario
    })
}

var usu = JSON.parse(localStorage.getItem('usuarios')) || [];
usu = usu.concat(usuarios)
document.addEventListener('DOMContentLoaded', crearTabla());

function crearTabla() {
    debugger
    var table = document.getElementById("mostrarDato");
    while (table.firstChild) {
        table.removeChild(table.firstChild)
    }
    usu = generarIndice(usu);
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
        if(col[i]!== 'Contraseña') {
            var th = document.createElement("th");
            th.innerText = col[i];
            tr.appendChild(th);
        }
    }

    for (var i = 0; i < usu.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            if(col[j] !== 'Contraseña' ) {
                if (col[j] !== "Seleccionar") {
                    tabCell.innerText =  usu[i][col[j]];
                }
                if(j==0){
                    var imagen = "<img src=\""+"https://www.gravatar.com/avatar/"+usu[i][col[j]]+"\"/>"
                    tabCell.innerHTML = imagen;
                }
                if (j == 4) {
                    var checkbox = document.createElement("input"); //Added for checkbox
                    checkbox.type = "radio"; //Added for checkbox
                    checkbox.className = "check-usuario"
                    checkbox.name = "buttonCh";
                    checkbox.id = [i];
                    checkbox.value = usu[i][col[j]];
                    tabCell.appendChild(checkbox);
                }
                if( j == 5 ) {
                    if(usu[i][col[j]]){
                        var punto = "<img src=\""+"../imagenes/greenPoint.PNG"+"\"id='point'/>"
                        tabCell.innerHTML = punto;
                    } else {
                        var punto = "<img src=\""+"../imagenes/redPoint.png"+"\"id='point'/>"
                        tabCell.innerHTML = punto;
                    }
                }
            }            
        }
    }
}


function usuarioSeleccionado() {
    for (var i = 0; i < checkboxSelUsuario.length; i++) {
        if (checkboxSelUsuario[i].checked) {
            var posicion = i
        }
    }
    return posicion
}

function estaSeleccionado() {
    for (var i = 0; i < checkboxSelUsuario.length; i++) {
        if (checkboxSelUsuario[i].checked) {
            var seleccion = checkboxSelUsuario[i].checked
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
        usu.splice(usu[usuarioSeleccionado], 1);
        localStorage.setItem('usuarios', JSON.stringify(usu));
        crearTabla();
        //banderaLogin +=1
    } else {
        document.getElementById("error").style.display = "block"
        error.innerHTML = "Debe seleccionar un usuario para eliminar."
    }
})

cerrarSession.addEventListener('click', () => {
    document.location.href = "../login/index.html"
})