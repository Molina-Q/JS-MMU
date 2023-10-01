const amountEuros = document.getElementById("amountEuros");
const amountFrancs = document.getElementById("amountFrancs");

function convertEuro() {
    let convert = amountEuros.value * 6.55957;
    return parseFloat(convert.toFixed(2));
}

amountEuros.addEventListener('keyup', function() {
    console.log(convertEuro())
    if(convertEuro() == 0.00) {
        amountFrancs.innerHTML = "";
    } else if(convertEuro() < 0.00) {
        amountFrancs.innerHTML = "La valeur est négative";
    } else if(isNaN(convertEuro())) {
        amountFrancs.innerHTML = "La valeur n'est pas numérique !";
    } else {
        amountFrancs.innerHTML = (convertEuro() +" francs");
    }

})

 