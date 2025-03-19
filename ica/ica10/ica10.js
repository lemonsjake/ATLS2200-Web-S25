let btnOne = document.querySelector("#findOut");
let btnTwo = document.querySelector("#elmTwo");

btnOne.addEventListener("click", nowSad);
btnTwo.addEventListener("click", evenSadder);

console.log("test0");

function nowSad() {
  console.log("test11");
  let sad = document.querySelector("#title");
  sad.textContent = "sadness...";
  console.log("test12");
  btnOne.style = "display: none;";
}

function evenSadder() {
  console.log("test2");
  btnTwo.style = "padding: 3em; font-weight: 100;";
}

// let frame = document.querySelector('.bgFrame');
// let baseBox = document.querySelector('.centerBox');
// let baseBtn = document.querySelector('#browns');
// let boxBtn = document.querySelector('#greens');

// baseBtn.addEventListener('click', changeBrowns);
// boxBtn.addEventListener('click', changeGreens);

// function changeBrowns() {
//   frame.style = "background-color: var(--cream-color); color: var(--brown-color);"
//   baseBox.style = "background-color: var(--brown-color); color: var(--cream-color);"
// }

// function changeGreens() {
//   baseBtn.style = "background-color: var(-frog--color); color: var(--forest-color); border-color: var(--frog-color);"
//   boxBtn.style = "background-color: var(-frog--color); color: var(--forest-color); border-color: var(--frog-color);"
// }
