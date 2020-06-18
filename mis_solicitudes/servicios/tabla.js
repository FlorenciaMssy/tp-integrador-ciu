const generarIndice = (lista) => {
    if (!lista) {
        lista = solicitudes
    }
    return lista.map((solicitud, index) => {
        solicitud.Seleccionar = index;
        return solicitud
    })
}

const crearTabla = () => {
    var table = document.getElementById("mostrarDato");
    while (table.firstChild) {
        table.removeChild(table.firstChild)
    }
    sol = generarIndice(sol);
    //sol = JSON.parse(localStorage.getItem('solicitudes'));
    var col = [];

    for (var i = 0; i < sol.length; i++) {
        for (var key in sol[i]) {
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
    for (var i = 0; i < sol.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            if (col[j] !== "Seleccionar") {
                tabCell.innerText = sol[i][col[j]];
            }

            if (j == 3) {

                var checkbox = document.createElement("input"); //Added for checkbox
                checkbox.type = "radio"; //Added for checkbox
                checkbox.className = "checkb"
                checkbox.name = "buttonCh";
                checkbox.id = [i];
                checkbox.value = sol[i][col[j]];
                tabCell.appendChild(checkbox);
                existeTabla = true;
            }
        }
    }
    localStorage.setItem("solicitudes", JSON.stringify(sol))
}
