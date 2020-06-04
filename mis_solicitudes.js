var esNuevo
var descripcionInput
var solicitudSeleccionada 
var solicitudes 
var cancelarBtn = document.getElementById('boton-cancelar')


function nuevaSolicitud(pdescripcion) {

    var f = new Date();
    nuevaFecha = (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());

    var nuevosDatos = {
        Fecha_Solicitud: nuevaFecha,
        Descripción: pdescripcion,
        Estado: "Abierto",
        Seleccionar: ""
    };

    var solicitudesViejas = JSON.parse(localStorage.getItem('solicitudes'));

    solicitudesViejas.push(nuevosDatos);

    localStorage.setItem('solicitudes', JSON.stringify(solicitudesViejas));
}

var botonGuardar = document.getElementById("button")
botonGuardar.addEventListener('click', () => {
    if(!esNuevo){
        editarSolicitud(descripcionInput.value)
    } else {
        nuevaSolicitud(descripcionInput.value)
    }

    location.href = "principal.html"
})
function editarSolicitud(descripcion) {
    solicitudes[solicitudSeleccionada].Descripción = descripcion
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes))
}

document.addEventListener('DOMContentLoaded', init());

function init(){
    solicitudes = JSON.parse(localStorage.getItem('solicitudes'))
    solicitudSeleccionada = JSON.parse(localStorage.getItem("modificarElemento"))
    esNuevo = JSON.parse(localStorage.getItem('esNuevo'))
    descripcionInput = document.getElementById('descripcion')
    console.log(typeof esNuevo)
    if(!esNuevo) {
        console.log(esNuevo)
        descripcionInput.value = solicitudes[solicitudSeleccionada].Descripción
    } else {
        console.log("entro")
    }
}

cancelarBtn.addEventListener('click', () => {
    location.href = "principal.html"
})
