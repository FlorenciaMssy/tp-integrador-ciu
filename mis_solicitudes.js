

document.querySelector("#button").addEventListener('click', function (event) {
    //var pfechaSolicitud = document.getElementById("fecha").value;
    var pdescripcion = document.getElementById("descripcion").value;
    //var pestado = document.getElementById("estado").value;

    nuevaSolicitud(pdescripcion);

})



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
    location.href = "principal.html"
})

console.log(solicitudes);
console.log(solicitudes.length);