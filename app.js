let operation = "";
let total = 0;
let firstNumber = 0;
let alreadySetFirstNumber = false;
let secondNumber = 0;
let shouldClearScreen = false;

function clickNumberButton(num) {
  if (shouldClearScreen) {
    document.querySelector(".screen").innerText = "";
  }
  shouldClearScreen = false;
  document.querySelector(".screen").innerText += num;
}

function clickOperationButton(op) {
  operation = op;
  shouldClearScreen = true;

  let currentNum = Number(document.querySelector(".screen").innerText);
  firstNumber = currentNum;
}

function clearScreen() {
  document.querySelector(".screen").innerText = "";
}

function equals() {
  let currentNum = Number(document.querySelector(".screen").innerText);
  secondNumber = currentNum;

  if (operation === "+") {
    total = firstNumber + secondNumber;
  } else if (operation === "-") {
    total = firstNumber - secondNumber;
  } else if (operation === "*") {
    total = firstNumber * secondNumber;
  } else {
    total = firstNumber / secondNumber;
  }
  document.querySelector(".screen").innerText = total;
  shouldClearScreen = true;
}

/* 
  random demos not related to project
*/
// let firstNumberButton = document.querySelector(".number-button");
// console.log(firstNumberButton);
// let allNumberButtons = document.querySelectorAll(".number-button");
// console.log(allNumberButtons);

// .addEventListener("click", function () {
//   // do such and such every time number button is clicked
// });

// for (let i = 0; i < allNumberButtons.length; i++) {}

// let newElement = document.createElement("div");
// newElement.style.background = "blue";
// newElement.classList = "special-class";

// let newChildElement = document.createElement("p");
// newChildElement.innerText =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat optio quae obcaecati magnam maiores rerum adipisci ipsum explicabo vitae voluptatum eos, amet non laudantium earum accusantium numquam nam debitis.";

// newElement.append(newChildElement);

// document.body.append(newElement);
