
let container = document.getElementById("container");
let penColor = "blue";
let borderOn = true;

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

            line.appendChild(div);
        }

        container.appendChild(line);
    }

    return squareW;
}

let numSquares = createGrid(16, 16);

// changes the divs color when mouse hovers over them
function createPaint() { 

    const divs = document.querySelectorAll(".square");
    divs.forEach((div) => {

        div.addEventListener("mouseover", () => {
            div.setAttribute("style", `background-color: ${penColor};`)
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


// Buttons


let rubber = document.getElementById("rubber");
rubber.addEventListener("mousedown", () => {
        penColor = "white";
        rubber.setAttribute("style", `width: 50px; height: 50px;`);
});


// turns on and off the border
let border = document.getElementById("border");



function createColor(color) {
    let buttons = document.querySelector(".buttons");

    let colorBtn = document.createElement("button");
    colorBtn.setAttribute("style", `background-color: ${color}; margin-left:5px;`);
    buttons.appendChild(colorBtn);

    colorBtn.addEventListener("click", () => {
        penColor = color;
        colorBtn.style.width = "50px";
        colorBtn.style.height = "50px";
    });

}

createColor("black");
createColor("blue");
createColor("red");
createColor("green");
createColor("yellow");


// heights the button when the mouse hovers over it
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {

    button.addEventListener("mouseover", () => {
        button.style.border = "3px solid grey";
    });

    button.addEventListener("mouseleave", () => {
        button.style.width = "60px";
        button.style.height = "60px";
        button.style.border = "3px solid black";
    });

});



