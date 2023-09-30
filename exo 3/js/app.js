function switchSides() {
    if(currentSide == sideO) {
        currentSide = sideX;
    } else {
        currentSide = sideO;
    }
    turnMessage.innerHTML  = ("C'est le tour de "+currentSide) ;
}

function restartTheGame(className){

    const elements = document.getElementsByClassName(className)

    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0])
    }
    startGame.classList.remove("btnTurnOff");
    resetGame.classList.add("btnTurnOff");
}

const sideO = "O";
const sideX = "X";

const turnMessage = document.getElementById("textTurn");

// const nbCarre = 9;

let currentSide = "O";

const carre = document.createElement("div");
carre.classList.add("grid-item");

const morpionContainer = document.getElementById("morpionContainer");

const startGame = document.getElementById("btnStartGame");
const resetGame = document.getElementById("btnResetGame");
turnMessage.classList.toggle("textOff");


startGame.addEventListener("click", function() {

    const nbCarre = prompt("Combien de carré ?", "9");
    let nbClicked = 0;
    currentSide = "O";
    turnMessage.innerHTML  = ("C'est le tour de "+currentSide) ;
    turnMessage.classList.toggle("textOff");

    for(i = 1; i <= nbCarre; i++) {

        startGame.classList.add("btnTurnOff");
        
        const carreMorpion = carre.cloneNode();

        morpionContainer.appendChild(carreMorpion);

        carreMorpion.addEventListener("click", function() {

            if(carreMorpion.classList.contains("clickedO")||carreMorpion.classList.contains("clickedX")) {
                alert("Case déjà occupée !");
            } else {
                carreMorpion.insertAdjacentText("afterbegin", currentSide);
                carreMorpion.classList.add("clicked"+currentSide);
                switchSides();
                nbClicked++;

                if(nbClicked == nbCarre) {
                    turnMessage.classList.toggle("textOff");
                    resetGame.classList.remove("btnTurnOff");
                    alert("Partie terminé !");
                    resetGame.addEventListener("click", () => restartTheGame("grid-item"));
                }
            }           

        })
        
    }
})



// const sides = [
//     {
//         // O
//         side1: "O",
//         side2: "X"
//     }
// ];

