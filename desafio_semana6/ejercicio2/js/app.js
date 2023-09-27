let cantidadDeGatos = window.prompt("Indique la cantidad de gatos");
let cantidadDePasos = window.prompt("Indique la cantidad de pasos");
let emojiPasos ="🐾";
let cantidadEmojis = "";


while (cantidadDePasos >0 ) { 
      cantidadEmojis= cantidadEmojis + emojiPasos
      cantidadDePasos--;
    
}
  
for (let i = 1; i <= cantidadDeGatos; i++) {
   /* window.document.write("<p>Gato #" + i + ": 🐈" + cantidadEmojis + "</p>")*/
    console.log("Gato #" + i + ": 🐈" + cantidadEmojis);
    ;
    
}

