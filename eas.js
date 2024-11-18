console.log("hi");
let containerDiv = document.querySelector(".container");
//create gridSquare then append to containerDiv x amount of times?
//put 16x16 divs on the DOM, then flexbox for appearance
//create second set of grid squares?
for (let i = 0; i < 256; i++) {
  let gridSquareDiv = document.createElement("div");
  gridSquareDiv.className = "grid-square";
  containerDiv.appendChild(gridSquareDiv);
}
