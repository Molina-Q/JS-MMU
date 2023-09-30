
const $propertysCarre = [
    "width",
    "height",
    "font-size",
    "font-family",
    "color",
    "background-color" 
];

const numDesCarres = ["1", "2", "3", "4"];

numDesCarres.forEach(($numCarre) =>
    document.getElementById("monCarre" + $numCarre).addEventListener("click", function () {
        const $element = document.getElementById("monCarre" + $numCarre);
        const $computedStyle = window.getComputedStyle($element);
        $infosCarre = "Class : " + $element.className+"\n";

        $propertysCarre.forEach(($propertyCarre) => {

            $infosCarre += " - "+$propertyCarre +" : "+ $computedStyle.getPropertyValue($propertyCarre)+"\n";

        } )

        alert($infosCarre);
    })
)



