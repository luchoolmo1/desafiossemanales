let cantidadDeGatos = window.prompt("Indique la cantidad de gatos");
let cantidadDePasos = window.prompt("Indique la cantidad de pasos");
let emojiPasos = "🐾";
let cantidadEmojis = "";


while (cantidadDePasos > 0) {
    cantidadEmojis = cantidadEmojis + emojiPasos
    cantidadDePasos--;

}

for (let i = 1; i <= cantidadDeGatos; i++) {

    if (i % 2 === 0) {
        console.log("Gato #" + i + ": 🐈‍⬛" + cantidadEmojis);
        
    } else {
        console.log("Gato #" + i + ": 🐈‍" + cantidadEmojis);
    }
 ;

}
