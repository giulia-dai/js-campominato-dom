let playButton = document.getElementById("play");
const playLevel = document.getElementById("mySelect");

playButton.addEventListener(
    "click",
    function () {
        const gridEl = document.getElementById("grid");
        const chooseLevel = playLevel.value;
        let dimension;

        if (chooseLevel == "l-1") {
            dimension = 100;
        } else if (chooseLevel == "l-2") {
            dimension = 81;
        } else {
            dimension = 49;
        }
        createGrid(gridEl, dimension, chooseLevel);
    }
);

function createGrid(gridEl, dim, chooseLevel) {
    gridEl.innerHTML = "";

    //creazione bombe
    const diffBombs = [];
    let randomNum;
    const howManyBombs = 16;
    while (diffBombs.length < howManyBombs) {
        randomNum = Math.floor((Math.random() * dim) + 1);

        if (!diffBombs.includes(randomNum)) {
            diffBombs.push(randomNum);
        }
    }
    console.log(diffBombs);

    for (let i = 0; i < dim; i++) {
        //per creare e aggiungere le celle
        const square = document.createElement("div");
        square.classList.add("square", "text-white", "fw-bold");

        //per determinare dimensione celle in base al livello scelto
        if (chooseLevel == "l-1") {
            square.classList.add("diff-1");
        } else if (chooseLevel == "l-2") {
            square.classList.add("diff-2");
        } else {
            square.classList.add("diff-3");
        }

        //per aggiungere alla griglia la cella appena creata
        gridEl.append(square);

        //per aggiungere i numeri alle celle
        const squareNum = i + 1;
        square.innerHTML = squareNum;



        square.addEventListener(
            "click",
            function () {
                this.classList.toggle("active");
                console.log("Il numero corrispondente alla cella è ", this.innerHTML);

                for (let j = 0; j < howManyBombs; j++) {
                    if (this.innerHTML == diffBombs[j]) {
                        this.classList.add("red-bomb");

                    }
                }
            }
        )
    }
}