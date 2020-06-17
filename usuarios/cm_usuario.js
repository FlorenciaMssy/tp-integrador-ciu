var exit = document.getElementById("cerrar-sesion");
exit.addEventListener('click', () => {
    document.location.href = "../login/index.html"
})

var esNuevo
var fechaInput
var nombreInput
var contraseñaInput
var solicitudSeleccionada
var solicitudes
var cancelarBtn = document.getElementById('boton-cancelar')
var error = document.getElementById('error')
var nombre = document.getElementById('nombre-input')
var avatar = "https://avatars.dicebear.com/api/identicon/" + nombre.value + ".svg"
var avatarImg = new Image(avatar)

function nuevoUsuario(fechaNacimiento, nombre, contraseña, avatar) {
    /*var misSolicitudes = []*/

    var nuevosDatos = {
        Avatar: avatar,
        Fecha_de_nacimiento: fechaNacimiento,
        Nombre: nombre,
        Contraseña: contraseña,
        Seleccionar: "",
        Activo: ""
    };
    

    var usuariosViejos = JSON.parse(localStorage.getItem('usuarios'));

    usuariosViejos.push(nuevosDatos);

    localStorage.setItem('usuarios', JSON.stringify(usuariosViejos));
}
var botonGuardar = document.getElementById("button")
botonGuardar.addEventListener('click', () => {

    if(!esNuevo){
        editarUsuario(fechaInput.value, nombreInput.value, contraseñaInput.value)
    } else {
        nuevoUsuario(fechaInput.value, nombreInput.value, contraseñaInput.value, avatarImg)
        console.log('blabla')
        console.log(typeof avatarImg)
    }

    location.href = "usuarios.html"
})

function editarUsuario(fechaNacimiento, nombre, contraseña, ) {

    usuarios[usuarioSeleccionado].Fecha_de_nacimiento = fechaNacimiento,
        usuarios[usuarioSeleccionado].Nombre = nombre,
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
    console.log(usuarioSeleccionado)
    esNuevo = JSON.parse(localStorage.getItem('esNuevo'))
    fechaInput = document.getElementById('fecha-input')
    nombreInput = document.getElementById('nombre-input')
    contraseñaInput = document.getElementById('contraseña-input')
    if (!esNuevo) {
        fechaInput.value = usuarios[usuarioSeleccionado].Fecha_de_nacimiento
        nombreInput.value = usuarios[usuarioSeleccionado].Nombre
        contraseñaInput.value = usuarios[usuarioSeleccionado].Contraseña
    }
}