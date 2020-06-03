document.querySelector("#button").addEventListener('click', function (event) {
    var pfechaSolicitud = document.getElementById("fecha").value;
    var pdescripcion = document.getElementById("descripcion").value;
    var pestado = document.getElementById("estado").value;

    nuevaSolicitud(pfechaSolicitud, pdescripcion, pestado);

})

function nuevaSolicitud(pfechaSolicitud, pdescripcion, pestado) {

    var nuevosDatos = {
        Fecha_Solicitud: pfechaSolicitud,
        Descripcion: pdescripcion,
        Estado: pestado
    };   

    var solicitudesViejas = JSON.parse(localStorage.getItem('solicitudes'));

    solicitudesViejas.push(nuevosDatos);
    localStorage.setItem('solicitudes', JSON.stringify(solicitudesViejas));
}
