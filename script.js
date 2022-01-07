let firstBox;
let secondBox;
let thirdBox;

function changeButtonOne() {
  firstBox = document.getElementById("box1");
  firstBox.style.backgroundColor = "blue";
  firstBox.style.border = "5px dotted orange";
}

function changeButtonTwo() {
  secondBox = document.getElementById("box2");
  secondBox.style.backgroundColor = "purple";
  secondBox.style.border = "10px solid yellow";
}

function changeButtonThree() {
  thirdBox = document.getElementById("box3");
  thirdBox.style.backgroundColor = "red";
  thirdBox.style.border = "25px dotted green";
}

function hideButtonOne() {
  firstBox = document.getElementById("box1");
  firstBox.style.visibility = "hidden";
}

function hideButtonTwo() {
  secondBox = document.getElementById("box2");
  secondBox.style.visibility = "hidden";
}

function hideButtonThree() {
  thirdBox = document.getElementById("box3");
  thirdBox.style.visibility = "hidden";
}

function resetAllButton() {
  firstBox = document.getElementById("box1");
  firstBox.style.removeProperty("background");
  firstBox.style.removeProperty("border");
  secondBox = document.getElementById("box2");
  secondBox.style.removeProperty("background");
  secondBox.style.removeProperty("border");
  thirdBox = document.getElementById("box3");
  thirdBox.style.removeProperty("background");
  thirdBox.style.removeProperty("border");
}

function showAllButton() {
  firstBox = document.getElementById("box1");
  firstBox.style.visibility = "visible";
  secondBox = document.getElementById("box2");
  secondBox.style.visibility = "visible";
  thirdBox = document.getElementById("box3");
  thirdBox.style.visibility = "visible";
}
