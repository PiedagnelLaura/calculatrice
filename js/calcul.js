const calcul = {
    resultat:"",
    init: function () {
        const btnList = document.querySelectorAll(".button");
        for (const btn of btnList) {
            btn.addEventListener("click", calcul.handleClick);
        }
    },
    handleClick: function (event) {
        const btnElmt = event.currentTarget.textContent;
        const resultElmt = document.querySelector(".result");
        const equationElmt = document.querySelector(".equation");
            if (btnElmt=== "=") {
                resultElmt.textContent =eval(calcul.resultat);
            }
            else if (btnElmt=== "C") {
                equationElmt.textContent ="";
                resultElmt.textContent = "";
                calcul.resultat ="";
            }
            else {
                calcul.resultat = calcul.resultat + btnElmt;
                equationElmt.textContent = calcul.resultat;
                //resultElmt.textContent ="";
            }
    },
};
