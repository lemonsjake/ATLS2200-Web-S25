let newQuoteBtn = document
  .querySelector("#js-new-quote")
  .addEventListener("click", getQuote);
let chgIconBtn = document
  .querySelector("#js-change-icon")
  .addEventListener("click", getIcon);
let saveIconBtn = document
  .querySelector("#js-save-icon")
  .addEventListener("click", saveIcon);

const iconStyles = [
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
  "croodles-neutral",
  "dylan",
  "fun-emoji",
  "lorelei",
  "lorelei-neutral",
  "micah",
  "miniavs",
  "notionists",
  "notionists-neutral",
  "open-peeps",
  "personas",
  "pixel-art",
  "thumbs",
];

let currIconStyle = "";
let currIconSeed = "";
let currIconURL = "";

let quoteEndPt =
  "https://api.codetabs.com/v1/proxy/?quest=stoic.tekloon.net/stoic-quote";

// console.log(iconEndPt);

function randomStyle(arr) {
  return `${arr[Math.floor(Math.random() * arr.length)]}`;
}

// let current = {
//   quote: "",
//   answer: "",
// };

async function getQuote() {
  console.log("getQuote called");

  try {
    const response = await fetch(quoteEndPt);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();

    const quoteItem = json.data.quote;
    console.log(quoteItem);
    const quoteAuthor = json.data.author;
    console.log(quoteAuthor);

    // let fullQuote = `${quoteItem} ${quoteAuthor}`;
    // console.log(fullQuote);

    // if (quoteItem.charAt(quoteItem.length - 1) === "@") {
    //     console.log("Present @ character found. Removing now.");
    //   quoteItem = quoteItem.substring(0, quoteItem.length - 2);
    // }

    currIconSeed = `${quoteItem.charAt(0)}${quoteItem.charAt(
      quoteItem.length - 2
    )}${quoteAuthor.charAt(0)}${quoteAuthor.charAt(quoteAuthor.length - 1)}`;

    displayQuote(quoteItem, quoteAuthor);
    getIcon();
  } catch (err) {
    console.log(err);
    alert("FAIL QUOTE");
  }
}

async function getIcon() {
  console.log("getIcon called");

  currIconStyle = randomStyle(iconStyles);
  let iconEndPt = `https://api.dicebear.com/9.x/${currIconStyle}/svg?seed=${currIconSeed}`;
  // console.log(seed);

  try {
    const response = await fetch(iconEndPt);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const iconBlob = await response.blob();

    displayIcon(URL.createObjectURL(iconBlob));
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
}

function displayIcon(iconURL) {
  console.log("displayIcon called");

  const iconImg = document.querySelector("#icon-pic");

  iconImg.setAttribute("src", iconURL);
}

function saveIcon(iconBlobURL) {
  const downloadLink = document.createElement("a");
  downloadLink.setAttribute("href", iconBlobURL);
  downloadLink.setAttribute(
    "download",
    `stoic-icon_style-${currIconStyle}_seed-${currIconSeed}.svg`
  );
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

getQuote();
// getIcon();
