var boton = document.getElementById('nombre-input')
var error = document.getElementById('error')

var exit = document.getElementById("cerrar-sesion");
exit.addEventListener('click', () => {
    document.location.href = "../login/index.html"
})

var solicitudSeleccionada
var solicitudes
var cancelarBtn = document.getElementById('boton-cancelar')
var error = document.getElementById('error')
var nombre = document.getElementById('nombre-input')

function nuevoUsuario(fechaNacimiento, nombre, contraseña, email) {
    /*var misSolicitudes = []*/

    var nuevosDatos = {
        Avatar: md5(email),
        Fecha_de_nacimiento: fechaNacimiento,
        Usuario: nombre,
        Email: email,
        Seleccionar: "",
        Activo: "",
        Contraseña: contraseña
    };


    var usuariosViejos = JSON.parse(localStorage.getItem('usuarios'));

    usuariosViejos.push(nuevosDatos);

    localStorage.setItem('usuarios', JSON.stringify(usuariosViejos));
}


var botonGuardar = document.getElementById("button")
botonGuardar.addEventListener('click', () => {
    var usuario = document.getElementById("nombre-input").value;
    var contraseña = document.getElementById("contraseña-input").value
    var fecha = document.getElementById('fecha-input').value
    var email = document.getElementById('email-input').value


    if (validacionUsuario(usuario) && validacionContraseña(contraseña)) {
        if (!esNuevo) {
            editarUsuario(fecha, usuario, contraseña, email)
    
        } else {
            nuevoUsuario(fecha, usuario, contraseña, email)
    
        }
        location.href = "usuarios.html"; 
    }else {
        document.getElementById("error").style.display = "block"
        error.innerHTML = "El usuario debe tener 8 numeros y la contrasena al menos 3 letras y 3 numeros"
    }

})

function validacionUsuario(usuario) {
    return /^\d{8}$/.test(usuario)
}

function validacionContraseña(contraseña) {

    tieneLetra = false
    tieneNumero = false
    caracterIncorrecto = false

    if (contraseña.length >= 6) {
        for (var i = 0; i < contraseña.length; i++) {

            valorCaracter = contraseña.charCodeAt(i)

            if ((valorCaracter >= 65 && valorCaracter <= 90) || (valorCaracter >= 97 && valorCaracter <= 122)) {

                tieneLetra = true;
            } else if (contraseña.charCodeAt(i) >= 48 && contraseña.charCodeAt(i) <= 57)

            {
                tieneNumero = true;
            } else {

                caracterIncorrecto = true;
            }
        }
    }
    return !caracterIncorrecto && tieneLetra && tieneNumero
}


function editarUsuario(fechaNacimiento, nombre, contraseña, email) {
    if(email !== usuarios[usuarioSeleccionado].Email) {
        usuarios[usuarioSeleccionado].Avatar = md5(email)
    }
    usuarios[usuarioSeleccionado].Fecha_de_nacimiento = fechaNacimiento,
    usuarios[usuarioSeleccionado].Usuario = nombre,
    usuarios[usuarioSeleccionado].Email = email,
    usuarios[usuarioSeleccionado].Contraseña = contraseña,
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

document.addEventListener('DOMContentLoaded', init());

cancelarBtn.addEventListener('click', () => {
    location.href = "usuarios.html"
})

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

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.addEventListener('DOMContentLoaded', init());

function init() {
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
    usuarioSeleccionado = JSON.parse(localStorage.getItem("modificarUsuario"))
    esNuevo = JSON.parse(localStorage.getItem('esNuevo'))

    if (!esNuevo) {
        document.getElementById('fecha-input').value = usuarios[usuarioSeleccionado].Fecha_de_nacimiento
        document.getElementById('nombre-input').value = usuarios[usuarioSeleccionado].Usuario
        document.getElementById('contraseña-input').value = usuarios[usuarioSeleccionado].Contraseña
        document.getElementById('email-input').value = usuarios[usuarioSeleccionado].Email
    }
}