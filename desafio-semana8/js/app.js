let idestilo = 1;

function prenderaudio() {

    setTimeout(function () {
        const pregunta = confirm("Todo campeon algun dia tuvo que dar su primer paso el cual fue el mas importante de todos. Dá el primer paso de todo campeon");
        if (pregunta) {
            const audioElement = new (Audio);

            // Configurar la fuente de audio (reemplaza 'SE PEGA LA CARPETA DEL AUDIO' con la ruta correcta a tu archivo MP3)
            audioElement.src = './music/Survivor.mp3';
            audioElement.id = 'sonido';

            // Agregar controles de reproducción
            audioElement.controls = true;
            audioElement.style.backgroundColor = 'rgba(1, 2, 3, 0.80);'


            const audiodiv = document.createElement('div');
            audiodiv.style.display = 'flex';
            audiodiv.style.justifyContent = 'center';
            audiodiv.style.alignItems = 'flex-end';
            audiodiv.appendChild(audioElement)//agrego al div el elemento de audio

            document.body.appendChild(audiodiv);//agrego al body el div creado

            audioElement.play();
        } else {
            document.getElementById('cambiarEstilo').click();
        }

    }, 800);


}

function borrarAudio() {
    var audioElement = document.getElementById("sonido");
    if (audioElement) {
        audioElement.remove();
    }
}


function cambiarEstilo() {
    //guardo el nombre de los estilos disponibles en el vector estilos
    let estilos = ["./css/estilos.css", "css/estilos-retro.css", "./css/estilos-urbano.css"]
    //obtengo el elemento style
    let css = document.getElementById("idestilo");
    //seteo el archivo .css con el atributo href, cambiando por el que se encuentra en el indice (idestilo) y luego incremento hasta llegar a 2 y ahi lo reinicio
    css.setAttribute("href", estilos[idestilo]);

    if (idestilo == 1) {
        prenderaudio();
    } if (idestilo == 2) {
        borrarAudio();
        idestilo = 0;
    } else {
        idestilo++;

    }

}
