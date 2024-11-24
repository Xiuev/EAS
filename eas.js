console.log("hi");
let containerDiv = document.querySelector(".container");
let numBtn = document.querySelector("#pop-up");
let testButton = document.querySelector("#test-btn");
//get promt response from user and convert to int

testButton.addEventListener("click", removeAllGrid);
numBtn.addEventListener("click", newUserGrid);
// 16 x16 grid
for (let i = 0; i < 256; i++) {
  let gridSquareDiv = document.createElement("div");
  gridSquareDiv.className = "grid-square";
  containerDiv.appendChild(gridSquareDiv);
}
//turn into array to iterate thru and attach event listner for trail
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
  } else {
    removeAllGrid();
    let gridWidth = Math.floor(containerDiv.offsetWidth / userResponse);
    let userResponseGridValue = userResponse * userResponse;
    for (let i = 0; i < userResponseGridValue; i++) {
      //style userSquareDiv in css to make it appear. ex: element.style.backgroundColor = "red"

      let userSquareDiv = document.createElement("div");
      userSquareDiv.className = "userSquareDiv";
      containerDiv.appendChild(userSquareDiv);
    }
    console.log(userResponseGridValue);
    console.log(gridWidth);
  }
}
function removeGrid() {
  for (let i = 0; i < gridSquares.length; i++) {
    gridSquares[i].remove();
  }
}

function removeAllGrid() {
  //get all child elements into an array --> loop thru array then delte
  let gridDivChild = Array.from(containerDiv.childNodes);
  for (let i = 0; i < gridDivChild.length; i++) {
    gridDivChild[i].remove();
  }
  console.log(gridDivChild);
}
//Size of each grid square formula
//total width of container / number of colunms (x)
console.log(`Container div width is :${containerDiv.offsetWidth}`); //368px
