// newQuoteBtn = document.querySelector('#new-quote');
let newQuoteBtn = document
  .querySelector("#js-new-quote")
  .addEventListener("click", getQuote);
let chgIconBtn = document.querySelector("#js-change-icon").addEventListener("click", randomStyle);
let saveIconBtn = document.querySelector("#js-save-icon");

let iconImg = document.querySelector("#js-icon-img");
// const answerText = document.querySelector("#js-answer-text");

// let endPt = "https://trivia.cyberwisp.com/getrandomchristmasquote";
let quoteEndPt =
  "https://api.codetabs.com/v1/proxy/?quest=stoic.tekloon.net/stoic-quote";
// let quoteEndPt = "https://zenquotes.io?api=random";

let iconStyles = [
  "adventurer",
  "adventurer-neutral",
  "avataaars",
  "avataaars-neutral",
  "big-ears",
  "big-ears-neutral",
  "big-smile",
  "bottts",
  "bottts-neutral",
  "croodles"
];

// let randomStyleType = randomStyle();
let iconEndPt = `https://api.dicebear.com/9.x/${randomStyle}/svg`;

function randomStyle() {
  return iconStyles[Math.floor(Math.random() * iconStyles.length)];
}

// let current = {
//   quote: "",
//   answer: "",
// };

async function getQuote() {
  console.log("getQuote called");

  // answerText.textContent = "";

  try {
    const response = await fetch(quoteEndPt);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    // console.log(json);

    // current.quote = json.quote;
    // current.answer = json.answer;

    let quoteItem = json.data.quote;
    console.log(quoteItem);
    let quoteAuthor = json.data.author;
    console.log(quoteAuthor);

    // let fullQuote = `${quoteItem} ${quoteAuthor}`;
    // console.log(fullQuote);

    // if (quoteItem.charAt(quoteItem.length - 1) === "@") {
    //     console.log("Present @ character found. Removing now.");
    //   quoteItem = quoteItem.substring(0, quoteItem.length - 2);
    // }

    displayQuote(quoteItem, quoteAuthor);
    displayIcon();
    // displayQuote(current);
  } catch (err) {
    console.log(err);
    alert("FAIL QUOTE");
  }
}

async function getIcon() {
  console.log("getIcon called");

  // answerText.textContent = "";

  try {
    const response = await fetch(iconEndPt);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    // console.log(json);

    iconImg.setAttribute("src", iconEndPt);

    // current.quote = json.quote;
    // current.answer = json.answer;

    // let quoteItem = json.data.quote;
    // console.log(quoteItem);
    // let quoteAuthor = json.data.author;
    // console.log(quoteAuthor);

    // let fullQuote = `${quoteItem} ${quoteAuthor}`;
    // console.log(fullQuote);

    // if (quoteItem.charAt(quoteItem.length - 1) === "@") {
    //     console.log("Present @ character found. Removing now.");
    //   quoteItem = quoteItem.substring(0, quoteItem.length - 2);
    // }

    displayIcon();
    // displayQuote(quoteItem, quoteAuthor);
  } catch (err) {
    console.log(err);
    alert("FAIL ICON");
  }
}

function displayQuote(quote, author) {
  console.log("displayQuote called");
  const quoteText = document.querySelector("#js-quote-text");
  if (quote.charAt(quote.length - 1) === "@") {
    console.log("Present @ character found.");
    quoteText.textContent = `${quote + author}`;
  } else if (author === "") {
    console.log("Unkonwn or blank author.");
    author = "";
    quoteText.textContent = `${quote} ~Unknown`;
  } else {
    quoteText.textContent = `${quote} ~${author}`;
  }
  //   answerBtn.addEventListener("click", () => {
  //     answerText.textContent = curr.answer;
  //   });
}

function displayIcon() {
  console.log("displayIcon called");
}

getQuote();
getIcon();