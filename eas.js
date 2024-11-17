console.log("hi");
let containerDiv = document.querySelector(".container");
//create gridSquare then append to containerDiv x amount of times?
//put 16x16 divs on the DOM, then flexbox for appearance
let gridSquareDiv = document.createElement("div");
gridSquareDiv.className = "grid-square";

containerDiv.appendChild(gridSquareDiv);
