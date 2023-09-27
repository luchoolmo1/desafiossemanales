let cantidadDeGatos = window.prompt("Indique la cantidad de Gatos");
let contador=1;
let emoji;


for (let i = 1; i <= cantidadDeGatos; i++) {
    switch (contador) { 

        case 1:
            emoji = "😺";
            contador++;
            break;
        case 2:
            emoji = "😸";
            contador++;
            break;
        case 3:
            emoji = "😹";
            contador=1;
            break;

    }
    window.document.write("<p>Gato #" + i +": "+emoji+"</p>")
    ;
    
}


