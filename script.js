
let container = document.getElementById("container");

// creates the grid
function createGrid(numSquares) {

    

    let squareW =  Math.round(600 / numSquares)-1;
    let squareH = squareW;

    console.log(squareW);
    for (let i = 0; i < numSquares; i++){

        let line = document.createElement("div");
        line.classList.add("line");

        for (let j = 0; j < numSquares; j++){
            let div = document.createElement("div");
            div.classList.add("square");
            //div.setAttribute("style", `height: ${squareH}px;`)

            line.appendChild(div);
        }

        container.appendChild(line);
    }

    return squareW;
}

let numSquares = createGrid(16, 16);

// mouse event listen
function createPaint() { 

    const divs = document.querySelectorAll(".square");
    divs.forEach((div) => {

        div.addEventListener("mouseover", () => {
            div.setAttribute("style", `background-color: blue;`)
        });

    });
    return divs;
}

let divs = createPaint(numSquares);


// clears the grid 
let button = document.getElementById("clear");
clear.addEventListener("click", () => {

    divs.forEach((div) => {
        div.remove();
    });
    
    const lines = document.querySelectorAll(".line");
    lines.forEach((line) => {
        line.remove();
    });

    // prompts the user for the width and hieght
    let numSquares = prompt("Number of squares per side :", "16")
    while (+numSquares > 80) {
        width = prompt("Please enter a width between 1-80 :", "16")
    }
    

    createGrid(+(numSquares));
    divs = createPaint();
})


