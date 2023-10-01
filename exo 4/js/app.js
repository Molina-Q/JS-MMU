// base des carrés qui seront clonés
const carre = document.createElement("div");
carre.classList.add("grid-item");

const pixelArtContainer = document.getElementById("pixelArtContainer");

let countCarre = 0;

// couleur appliqué au background-color lors d'un clic
            
// lorsque j'appuie sur une touche de mon clavier cet event va "listen"  
window.addEventListener("keydown", (event) => {   
    switch (event.key) {
        //si la touche est la flèche du haut le code de ce case sera exécuté 
        case "ArrowUp":
            if(countCarre > 0) {
                countCarre--;
            }

            const elements = document.getElementsByClassName("grid-item");

            for(i = 1; i <=elements.length; i++){
                return elements[0].parentNode.removeChild(elements[0]);
            }

            break;

        //si la touche est la flèche du bas le code de ce case sera exécuté 
        case "ArrowDown":
            countCarre++;

            const carreColore = carre.cloneNode();
            carreColore.classList.add("randomColorBackground");
            carreColore.style.setProperty("background-color", `rgb(${Math.floor(Math.random() * 255 )}, ${Math.floor(Math.random() * 255 )}, ${Math.floor(Math.random() * 255 )} )`);
            pixelArtContainer.prepend(carreColore);

            carreColore.addEventListener("click", function() {
                carreColore.style.setProperty("background-color", couleurClick);
            })
            break;

        //si c'est une touche qui n'est pas comprise dans les cases plus haut, le code dans default sera exécuté (ici rien)
        default:

            return; 
    }
    //lorsque le compteur de carré est à 225 il y a une alerte et les carrés pour changer la couleur appliqué au background apparaissent 
    if(countCarre == 225) {
        alert("Le carre de 15 x 15 est complété !")
        mesCouleurs.forEach((maCouleur) => {
            document.getElementById("choixCouleur" + maCouleur.name).classList.remove("colorsOff");
        })
    }
} );


const mesCouleurs = [
    {
        name:"Noir", 
        backgroundColor:`rgb(${0}, ${0}, ${0} )`
    },

    {
        name:"Jaune", 
        backgroundColor:`rgb(${255}, ${255}, ${0} )`

    },

    {   
        name:"Blanc",
        backgroundColor:`rgb(${255}, ${255}, ${255} )`
    }
];

let couleurClick = `rgb(${0}, ${0}, ${0} )`;

mesCouleurs.forEach((maCouleur) =>
    document.getElementById("choixCouleur" + maCouleur.name).addEventListener("click", () => {
        couleurClick = maCouleur.backgroundColor;
    })
)



