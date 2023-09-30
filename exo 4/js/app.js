
// const nbCarre = 9;

let currentSide = "O";

const carre = document.createElement("div");
carre.classList.add("grid-item");

const morpionContainer = document.getElementById("morpionContainer");

const startGame = document.getElementById("inputTable");

let red = Math.floor(Math.random() * 255 );
let blue = Math.floor(Math.random() * 255 );
let green = Math.floor(Math.random() * 255 );
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowDown":
            const elements = document.getElementsByClassName("grid-item");
            for(i = 1; i <=elements.length; i++){
                return elements[0].parentNode.removeChild(elements[0]);
            }
            break;

        case "ArrowUp":
            const carreColore = carre.cloneNode();
            carreColore.classList.add("randomColorBackground");
            carreColore.style.setProperty("background-color", `rgb(${Math.floor(Math.random() * 255 )}, ${Math.floor(Math.random() * 255 )}, ${Math.floor(Math.random() * 255 )} )`)

            morpionContainer.prepend(carreColore);
            break;

        default:

            return; 
    }
} );

// eventTarget.addEventListener("keyup", (event) => {
//     if (event.isComposing || event.keyCode === 229) {
//       return;
//     }