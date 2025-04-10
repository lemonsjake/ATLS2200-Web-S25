// newQuoteBtn = document.querySelector('#new-quote');
let newQuoteBtn = document
  .querySelector("#js-new-quote")
  .addEventListener("click", getQuote);
let saveBtn = document.querySelector("#js-save-icon");

const answerText = document.querySelector("#js-answer-text");

// let endPt = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
let quoteEndPt = "https://stoic.tekloon.net/stoic-quote";

iconStyles = [
  "adventurer",
  "adventurer-neutral",
  "avataaars",
  "avataaars-neutral",
  "big-ears",
  "big-ears-neutral",
  "big-smile",
  "bottts",
  "bottts-neutral",
  "croodles",
];
let iconEndPt = `https://api.dicebear.com/9.x/${randomStyle}/svg`;

function randomStyle() {
  return `iconStyles[Math.floor(Math.random() * iconStyles.length)]`;
}
// get endPt;

let current = {
  question: "",
  answer: "",
};

async function getQuote() {
  // console.log("getQuote called");

  answerText.textContent = "";

  try {
    const response = await fetch(endPt);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    // console.log(json);

    current.question = json.question;
    current.answer = json.answer;

    displayQuote(current);
  } catch (err) {
    console.log(err);
    alert("FAIL");
  }
}

function displayQuote(curr) {
  const questionText = document.querySelector("#js-question-text");
  questionText.textContent = curr.question;
  answerBtn.addEventListener("click", () => {
    answerText.textContent = curr.answer;
  });
}

getQuote();
