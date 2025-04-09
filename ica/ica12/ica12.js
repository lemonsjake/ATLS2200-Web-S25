// newQuoteBtn = document.querySelector('#new-quote');
let newQuoteBtn = document
  .querySelector("#js-new-quote")
  .addEventListener("click", getQuote);
let answerBtn = document.querySelector("#js-tweet");

const answerText = document.querySelector("#js-answer-text");

let endPt = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

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
