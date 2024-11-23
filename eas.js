console.log("hi");
let containerDiv = document.querySelector(".container");
let numBtn = document.querySelector("#pop-up");
let testButton = document.querySelector("#test-btn");
//get promt response from user and convert to int

testButton.addEventListener("click", removeGrid);
numBtn.addEventListener("click", newUserGrid);
// 16 x16 grid
for (let i = 0; i < 256; i++) {
  let gridSquareDiv = document.createElement("div");
  gridSquareDiv.className = "grid-square";
  containerDiv.appendChild(gridSquareDiv);
}

let gridSquares = Array.from(document.querySelectorAll(".grid-square"));
// convert gridSquare nodelist --> array --> loop thru array elements and attach event listner to each item
for (let i = 0; i < gridSquares.length; i++) {
  gridSquares[i].addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "pink";
  });
}

//functions
//
function newUserGrid() {
  //once user enters number, remove existing grid.
  let userResponse = parseInt(prompt("How many squares for new grid?"));
  if (Number.isInteger(userResponse) === false) {
    alert("Please enter a valid number!");
  }
}
function removeGrid() {
  for (let i = 0; i < gridSquares.length; i++) {
    gridSquares[i].remove();
  }
}
