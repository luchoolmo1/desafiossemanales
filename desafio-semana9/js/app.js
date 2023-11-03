let nombres = ["Mario", "Luigi", "Bowser", "Peach", "Yoshi", "Toad", "Toadette", "Daisy"];
//let nombreamostrar = "";
let modificadorspan = document.querySelector('span');//selecciono todo lo que tiene el elemento span
//let personajeMinuscula = "";

const buttonPlay = document.getElementById("btn");
buttonPlay.onclick = presentar;

function presentar() {
    let personaje = prompt("¿Quién se presenta hoy ? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    console.log(personaje);
    if (personaje == nombres[0] || personaje == nombres[1] || personaje == nombres[5] || personaje == nombres[6]) {
        nombreamostrar = personaje;
    } else {
        switch (personaje) {
            case nombres[2]:
                nombreamostrar = "Bowser Morton Koopa";
                break;
            case nombres[3]:
                nombreamostrar = "Princesa Peach Toadstool";
                break;
            case nombres[4]:
                nombreamostrar = "T. Yoshisaur Munchakoopas";
                break;
            case nombres[7]:
                nombreamostrar = "Princesa Daisy";
                break;
            default:
                nombreamostrar = "(desconocido)";

        }
    }


    modificadorspan.innerHTML = nombreamostrar//modifico el elemento span



    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] == personaje) {
            personajeMinuscula = personaje.toLowerCase()
        }

    }


    let id = document.getElementById(personajeMinuscula);  //obtengo el elemento html div con el id mario

    id.setAttribute("title", "Presentado"); //agrego el atributo title para que se presente el personaje ingresado

    buttonPlay.remove();//elimino el boton
}

