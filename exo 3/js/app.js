function switchSides() {
    if(currentSide == sideO) {
        currentSide = sideX;
    } else {
        currentSide = sideO;
    }

    turnMessage.innerHTML  = ("C'est le tour de "+currentSide) ;
}

function gameOver() {
    turnMessage.classList.toggle("textOff");
    resetGame.classList.remove("btnTurnOff");
    alert("Partie terminé !");
    resetGame.addEventListener("click", () => restartTheGame("grid-item"));
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
let currentSide = "O";

const turnMessage = document.getElementById("textTurn");

const carre = document.createElement("div");

carre.classList.add("grid-item");

const morpionContainer = document.getElementById("morpionContainer");

const startGame = document.getElementById("btnStartGame");
const resetGame = document.getElementById("btnResetGame");
turnMessage.classList.toggle("textOff");

const winningPositions = [
    // ligne vertical
    {
        posOne: 0,
        posTwo: 3,
        posThree: 6,
    },
    {
        posOne: 1,
        posTwo: 4,
        posThree: 7,
    },
    {
        posOne: 2,
        posTwo: 5,
        posThree: 8,
    },
    // ligne horizontal
    {
        posOne: 0,
        posTwo: 1,
        posThree: 2,
    },
    {
        posOne: 3,
        posTwo: 4,
        posThree: 5,
    },
    {
        posOne: 6,
        posTwo: 7,
        posThree: 8,
    },
    // ligne diagonal 
    {
        posOne: 0,
        posTwo: 4,
        posThree: 8,
    },
    {
        posOne: 2,
        posTwo: 4,
        posThree: 6,
    }
];

startGame.addEventListener("click", function() {
    const nbCarre = 9;

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
                carreMorpion.innerText = currentSide;
                carreMorpion.classList.add("clicked"+currentSide);

                winningPositions.forEach((position) => {

                    const clickedSides = document.getElementsByClassName("grid-item");

                    for (let i = 0; i < clickedSides.length; i++) {

                        // const openClickedSides = clickedSides[i];

                        if (clickedSides[position.posOne].classList.contains("clicked"+currentSide) 
                        && clickedSides[position.posTwo].classList.contains("clicked"+currentSide) 
                        && clickedSides[position.posThree].classList.contains("clicked"+currentSide)) {

                            alert(currentSide+" gagne la partie !");

                            clickedSides[position.posOne].classList.add("carreWinner");
                            clickedSides[position.posTwo].classList.add("carreWinner");
                            clickedSides[position.posThree].classList.add("carreWinner");

                            return gameOver();
                        }
                    }
                });


                if(nbClicked == nbCarre) {
                    gameOver();
                }
                switchSides();
                nbClicked++;
            }           

        })
        
    }
})
