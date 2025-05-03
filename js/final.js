// let restart = false;
let failLimit = 12; // default med/frustrating difficulty
let pauseTime = false; // prevents flipping cards while waiting for timeout
let fails = 0;
let numFlips = 0;
let phoneDigNum = 0;
let cards = [];
let flippedIdxs = [];
let matchedCards = [];
const cardContainer = document.querySelector(".card-container");
const cardFaces = [
  "zero",
  "zero",
  "one",
  "one",
  "two",
  "two",
  "three",
  "three",
  "four",
  "four",
  "five",
  "five",
  "six",
  "six",
  "seven",
  "seven",
  "eight",
  "eight",
  "nine",
  "nine",
];
const cardVals = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

let resetBtn = document
  .querySelector("#reset")
  .addEventListener("click", resetAll);
let submitBtn = document
  .querySelector("#submit")
  .addEventListener("click", submitNumber);
let phoneNum = document.querySelector("#phone-num");
let instructions = document.querySelector(".instructions");
let instructBtn = document.querySelector("#instructions-btn");
let instructBtnSpan = document.querySelector("#instructions-btn-span");
let instructIcon = document.querySelector("#instructions-icon");

document.querySelector("#easy-mode").addEventListener("click", () => {
  failLimit = 16; //failLim for easy/annoying difficulty
  updateActiveMode("easy-mode");
  console.log("Difficulty set to 'annoying'. Fail limit:", failLimit);
});
document.querySelector("#med-mode").addEventListener("click", () => {
  failLimit = 12; // failLim for med/frustrating difficulty
  updateActiveMode("med-mode");
  console.log("Difficulty set to 'frustrating'. Fail limit:", failLimit);
});
document.querySelector("#hard-mode").addEventListener("click", () => {
  failLimit = 8; // failLim for hard/ummm difficulty
  updateActiveMode("hard-mode");
  console.log("Difficulty set to 'ummm...'. Fail limit:", failLimit);
});

function instructionsShowing() {
  if (instructions.classList.contains("showing")) {
    return true;
  } else {
    return false;
  }
}

instructBtn.addEventListener("mouseover", () => {
  if (instructionsShowing()) {
    instructIcon.setAttribute("src", "icons/vis_fill_F0F0F0_PNG.png");
    instructIcon.setAttribute(
      "alt",
      "open-eye icon meant to communicate that the instructions are currently shown"
    );
  } else {
    instructIcon.setAttribute("src", "icons/visOff_fill_F0F0F0_PNG.png");
    instructIcon.setAttribute(
      "alt",
      "closed-eye icon meant to communicate that the instructions are currently hidden"
    );
  }
});
instructBtn.addEventListener("mouseout", () => {
  if (instructionsShowing()) {
    instructIcon.setAttribute("src", "icons/vis_line_333_PNG.png");
    instructIcon.setAttribute(
      "alt",
      "open-eye icon meant to communicate that the instructions are currently shown"
    );
  } else {
    instructIcon.setAttribute("src", "icons/visOff_line_333_PNG.png");
    instructIcon.setAttribute(
      "alt",
      "closed-eye icon meant to communicate that the instructions are currently hidden"
    );
  }
});
instructBtn.addEventListener("click", () => {
  if (instructionsShowing()) {
    instructions.classList.remove("showing");
    instructBtnSpan.textContent = "Show Instructions";
    instructIcon.setAttribute("src", "icons/visOff_fill_F0F0F0_PNG.png");
    instructIcon.setAttribute(
      "alt",
      "closed-eye icon meant to communicate that the instructions are currently hidden"
    );
    console.log("instructions hidden");
  } else {
    instructions.classList.toggle("showing");
    instructBtnSpan.textContent = "Hide Instructions";
    instructIcon.setAttribute("src", "icons/vis_fill_F0F0F0_PNG.png");
    instructIcon.setAttribute(
      "alt",
      "open-eye icon meant to communicate that the instructions are currently shown"
    );
    console.log("instructions showing");
  }
  instructBtn.style.width = "fit-content";
});

class Card {
  constructor(card, face, value, idx) {
    this.card = card;
    this.face = face.textContent; // card face (zero-nine)
    this.value = value.textContent; // card value (0-9)
    this.idx = idx;
    this.isFlipped = false;
    this.isMatched = false;
    this.clicksAfterMatch = 0;
    this.card.addEventListener("click", () => {
      if (!this.isFlipped && !pauseTime) {
        this.flip();
      } else {
        console.log("already flipped", this.face, this.value);
      }
    });
    this.card.addEventListener("click", () => {
      if (matchedCards.includes(this)) {
        if (this.clicksAfterMatch > 0) {
          if (phoneDigNum < 0) {
            console.log(
              "ERROR: negative phone digit num",
              phoneDigNum,
              "\nPlease reset..."
            );
          } else if (phoneDigNum === 3) {
            phoneDigNum = 4;
          } else if (phoneDigNum === 7) {
            phoneDigNum = 8;
          } else if (phoneDigNum > 11) {
            alert(
              "UH OH! You entered too many digits. Sorry, no modulus for you. Either reset or submit."
            );
            // phoneDigNum = phoneDigNum % 11;
          }

          phoneNum.textContent = phoneNum.textContent.replace(
            phoneNum.textContent[phoneDigNum],
            this.value
          );
          console.log("curr phone num", phoneNum.textContent);
          phoneDigNum++;
          console.log("curr phone num digit", phoneDigNum);
        }

        this.clicksAfterMatch++;
      }
    });
  }

  flip() {
    if (this.isFlipped) {
      this.isFlipped = false;
      this.card.classList.remove("flipped");
    } else {
      this.isFlipped = true; // switches card's flip attribute
      this.card.classList.toggle("flipped"); // toggles flipped class
      numFlips++;
      console.log("flips", numFlips);

      flippedIdxs.push(this.idx);

      if (numFlips === 2) {
        console.log("flipped card Idxs", flippedIdxs[0], flippedIdxs[1]);

        if (flippedIdxs.length === 2) {
          console.log(
            "2 flipped cards with idxs:",
            flippedIdxs[0],
            flippedIdxs[1]
          );
          checkMatch(flippedIdxs[0], flippedIdxs[1]);
          numFlips = 0;
          flippedIdxs = []; // reset array of flipped card indices
        } else {
          console.log("error: flippedIdxs", flippedIdxs.length);
        }
      }
    }
    console.log("flipped", this.face, this.value);
  }

  match() {
    this.isMatched = true;
    this.card.classList.add("matched");
  }
}

function updateActiveMode(activeModeId) {
  const modes = document.querySelectorAll(".diffMode");
  modes.forEach((mode) => {
    if (mode.id === activeModeId) {
      mode.classList.add("active");
    } else {
      mode.classList.remove("active");
    }
  });
}

/* Shuffles cards using Fisher-Yates Shuffle algorithm */
function shuffle(nums) {
  // Iterates backwards through nums, swapping last elem with an elem at a rand lower index
  for (let i = nums.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    let temp = nums[i];
    nums[i] = nums[rand];
    nums[rand] = temp;
  }

  return nums;
}

function createCards() {
  let shuffledFaces = shuffle(cardFaces);
  let shuffledVals = shuffle(cardVals);

  for (let i = 0; i < cardFaces.length; i++) {
    const newCard = document.createElement("div");
    const cardFace = document.createElement("p");
    const cardVal = document.createElement("p");
    const idx = i;
    cardFace.textContent = shuffledFaces[i];
    cardFace.classList.add("card-face");
    cardVal.textContent = shuffledVals[i];
    cardVal.classList.add("card-back");
    newCard.classList.add("card");
    newCard.appendChild(cardFace);
    newCard.appendChild(cardVal);
    cards.push(new Card(newCard, cardFace, cardVal, idx));
    cardContainer.appendChild(newCard);
  }
}

function resetAll() {
  console.log("resetting experience...");
  phoneNum.textContent = "___-___-____";
  phoneDigNum = 0;
  numFlips = 0;
  fails = 0;
  matchedCards = []; // reset matched cards array
  cards = []; // reset array of card objects
  cardContainer.innerHTML = ""; // remove card HTML elements
  createCards();
  updateActiveMode("med-mode");
}

function submitNumber() {
  if (phoneNum.textContent === "___-___-____") {
    alert("No phone number entered!");
  } else if (phoneNum.textContent.includes("_")) {
    alert("Incomplete phone number!");
  } else {
    console.log("submitting num", phoneNum.textContent);
    alert("Your number is " + phoneNumber.textContent);
  }

  return;
}

function checkMatch(idx1, idx2) {
  // console.log("checking match", cards[idx1].value, cards[idx2].value);
  if (cards[idx1].value === cards[idx2].value) {
    console.log("MATCH FOUND", cards[idx1].value, cards[idx2].value);
    cards[idx1].match();
    cards[idx2].match();
    matchedCards.push(cards[idx1], cards[idx2]);
  } else {
    fails++;
    console.log("fails", fails);
    pauseTime = true;
    setTimeout(() => {
      cards[idx1].flip();
      cards[idx2].flip();
      numFlips = 0; // reset num cards currently flipped
      flippedIdxs = []; // empty stored flipped card indices
      pauseTime = false;
      if (fails >= failLimit) {
        alert("Match attempt limit reached!");
        resetAll();
      }
    }, 1000); // 1s delay before flipping cards back over
  }
}

//
//

//
//

createCards();
updateActiveMode("med-mode"); // set default active difficulty mode
