let arr = [
  "fa fa-diamond",
  "fa fa-diamond",
  "fa fa-paper-plane-o",
  "fa fa-paper-plane-o",
  "fa fa-anchor",
  "fa fa-anchor",
  "fa fa-bolt",
  "fa fa-bolt",
  "fa fa-cube",
  "fa fa-cube",
  "fa-leaf",
  "fa-leaf",
  "fa fa-bicycle",
  "fa fa-bicycle",
  "fa fa-bomb",
  "fa fa-bomb",
]; //Array of all possible cards

let moves = document.getElementById("moves");
let remove = document.getElementsByClassName("fa fa-star"); //Star Score Code
let winCounter = 0;
let removedCounter = 0;

function restart() {
  //When someone clicks the RESET button.
  document.getElementById("win").style.display = "none";
  started = true;
  stopClicks = true;
  counter = 0;
  stop();
  seconds = 0;
  document.getElementById("time").textContent = "Current Time: " + seconds;
  arr = shuffle(arr); //Runs the shuffle function
  moves.textContent = 0; //Resets the number of moves
  winCounter = 0; // Win rating reset.
  while (removedCounter != 0) {
    //3 Star rating reeset
    let run1 = document.createElement("li");
    run1.id = "stars";
    let run2 = document.createElement("i");
    run2.className = "fa fa-star";
    document.getElementById("stars").appendChild(run2);
    document.getElementById("starScore").appendChild(run1);
    removedCounter--;
  }

  //Code to remove current cards from the screen
  document.getElementById("decks").innerHTML = "";

  for (let j = 0; j < 16; j++) {
    //Code for adding 16 cards back onto the page.
    let node2 = document.createElement("i");
    node2.className = arr[j];

    let node = document.createElement("li");
    node.className = "card";
    node.addEventListener("click", respondToTheClick);
    node.appendChild(node2);
    document.getElementById("decks").appendChild(node);
  }
}
//Shuffle function called from above.
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//Code for clicking on a card to reveal it
let counter = 0; //Number of clicks
let holder = 0;
let holder2 = 0;
let stopClicks = true;

function respondToTheClick(evt) {
  if (
    evt.target.className != "card open show" &&
    evt.target.className != "card match" &&
    stopClicks
  ) {
    //So players cannot click the same card twice or spam click to break the game.
    counter++;
    timer();
    if (moves.textContent == 3 || moves.textContent == 28) {
      //Removing Stars at higher moves
      if (counter == 1) {
        removedCounter++;
        remove[0].parentNode.removeChild(remove[0]);
      }
    }

    evt.target.className = "card open show";
    if (counter == 1) {
      //First Click
      let firstTry = evt.target.firstElementChild.className;
      holder = firstTry;
      holder2 = evt.target;
    } else if (counter == 2) {
      //Second Click
      let secondTry = evt.target.firstElementChild.className;
      moves.textContent++;
      stopClicks = false;
      if (holder != secondTry) {
        //No match
        setTimeout(function () {
          evt.target.className = "card";
          holder2.className = "card";
          stopClicks = true;
        }, 400);
      } else {
        // Match
        setTimeout(function () {
          stopClicks = true;
          evt.target.className = "card match";
          holder2.className = "card match";
        }, 500);
        winCounter += 2;
      }

      counter = 0;
      if (winCounter == 16) {
        //Winner winner chicken dinner
        stop();
        setTimeout(function () {
          //Win screen appears
          document.getElementById("win").style.display = "flex";
          document.getElementById("winning").textContent =
            "It took you " + moves.textContent + " moves to finish the game!";
          document.getElementById("winning2").textContent =
            "You received a score of " + remove.length + "/3 stars!";
          document.getElementById("winning3").textContent =
            "Your time was " +
            seconds +
            " seconds! Click the restart to play again!";
        }, 1500);
      }
    }
  }
}

//Timer
let seconds = 0;
let starting;
let started = true;

function timer() {
  if (started) {
    seconds = 0;
    started = false; //Starts the timer on first click but can work only once until the reset button is clicked.
    starting = setInterval(function () {
      seconds++;
      document.getElementById("time").textContent = "Current Time: " + seconds;
    }, 1000);
  }
}
function stop() {
  clearInterval(starting);
}

restart(); //Starts the game when someone opens the page.
