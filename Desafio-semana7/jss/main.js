
/*ejercicio 1*/
let titulo = document.querySelector("title");
console.log(titulo.innerHTML);


/*ejercicio 3: el mismo ya contempla a la vez el punto 5: uso de funciones*/
let nombrecompleto1 = document.querySelectorAll(".integrante1");
let nombrecompleto2 = document.querySelectorAll(".integrante2");
let nombreintegrante1 = "";
let nombreintegrante2 = "";

function MostrarIntegrantes(arr,nombress,nombreintegrantess) {
    for (let i = 0; i < arr; i++) {
        if (nombress[i].innerHTML != "") {
            if (i == 2 || i == 3) {
                nombreintegrantess += nombress[i].innerHTML.toUpperCase() + " ";
            } else { nombreintegrantess += nombress[i].innerHTML + " "; }
        }
    }
    return nombreintegrantess;
}

nombreintegrante1 = MostrarIntegrantes(nombrecompleto1.length, nombrecompleto1, nombreintegrante1);
nombreintegrante2 = MostrarIntegrantes(nombrecompleto2.length, nombrecompleto2, nombreintegrante2);


console.log("-----" + "\nIntegrante 1: " + "\"" + nombreintegrante1.trim()
    + "\"" + "\nIntegrante 2: " + "\"" + nombreintegrante2.trim() + "\"" + "\n-----");


/* ejercicio 4: el mismo ya contempla a la vez el punto 5: uso de funciones*/
let varcharcoincidencia = "Hubo coincidencias en algun nombre de los integrantes, elige un color para destacar el nombre coincidente";
let varcharcoincidencia2 = "Hubo coincidencias en algun apellido de los integrantes, elige un color para destacar el apellido coincidente";
let coincidencianombre = [];
let coincidenciaApellido = [];

/*funcion para comparar los nombres y marcar los coincidentes con el color seleccionado*/ 
function buscarCoincidencias(datosDelIntegrante1, datosDelIntegrante2) {
    for (let i = 0; i < datosDelIntegrante1.length; i++) {

        if (i === 0 || i === 1) {
            for (let j = 0; j < datosDelIntegrante2.length; j++) {

                if (j === 0 || j === 1) {
                    if (datosDelIntegrante1[i].innerHTML === datosDelIntegrante2[j].innerHTML) {
                        coincidencianombre.push(datosDelIntegrante1[i].id);
                        coincidencianombre.push( datosDelIntegrante2[j].id);
                    }
                }
            }
        }
    }
    if (coincidencianombre.length > 0) {
        console.log("Hubo coincidencias en algun nombre de los integrantes");
        let elegircolor = prompt(varcharcoincidencia);
        for (let i = 0; i < coincidencianombre.length; i++) {
            let nombresDuplicados = document.getElementById(coincidencianombre[i]);
            nombresDuplicados.style.color = elegircolor;
        }
    
    } else {
        console.log("No hubo coincidencias en los nombres de los integrantes");
    }
    
}
/*funcion para comparar los apellidos y marcar los coincidentes con el color seleccionado*/ 
function buscarCoincidenciasApellido(datosDelIntegrante1, datosDelIntegrante2) {
    for (let i = 0; i < datosDelIntegrante1.length; i++) {

        if (i === 2 || i === 3) {
            for (let j = 0; j < datosDelIntegrante2.length; j++) {

                if (j === 2 || j === 3) {
                    if (datosDelIntegrante1[i].innerHTML === datosDelIntegrante2[j].innerHTML) {
                        coincidenciaApellido.push(datosDelIntegrante1[i].id);
                        coincidenciaApellido.push(datosDelIntegrante2[j].id);
                    }
                }
            }
        }
    }
    if (coincidenciaApellido.length > 0) {
        console.log("Hubo coincidencias en algun apellido de los integrantes");
        let elegircolor = prompt(varcharcoincidencia2);
        for (let i = 0; i < coincidenciaApellido.length; i++) {
            let nombresDuplicados = document.getElementById(coincidenciaApellido[i]);
            nombresDuplicados.style.color = elegircolor;
        }

    } else {
        console.log("No hubo coincidencias en alguno de los apellido de los integrantes");
    }
}

/*ejercuto la funcion de coincidente de nombres y pregunto si desea comparar apellidos: si desea se compara sino no se hace nada*/ 
buscarCoincidencias(nombrecompleto1, nombrecompleto2);
let comparaapellido = confirm("¿Desea comparar los apellidos?");
if (comparaapellido) {
    buscarCoincidenciasApellido(nombrecompleto1, nombrecompleto2)  
};

