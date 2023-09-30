

const numDesCarres = ["1", "2", "3", "4"];

const spinningEffect = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0.90)" },
  ];
  
const spinningTiming = {
    duration: 1000,
    iterations: 1,
};




numDesCarres.forEach(($numCarre) =>
    document.getElementById("monCarre" + $numCarre).addEventListener("click", function () {
        const $element = document.getElementById("monCarre" + $numCarre);

        let spinKeyFrame = new KeyframeEffect($element,
            [
                { transform: "rotate(0) scale(1)" },
                { transform: "rotate(360deg) scale(0.90)" },
            ], 
            {
                duration: 1000,
                iterations: 1,
            }
        );
        
        let animationCarre = new Animation(spinKeyFrame, document.timeline);
        if($element.classList.contains("clickedCarre")) {
            $element.classList.toggle("clickedCarre");
            animationCarre.reverse();
        } else {
            $element.classList.toggle("clickedCarre");
            animationCarre.play();
        }

    })
)



