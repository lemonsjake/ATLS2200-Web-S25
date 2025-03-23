// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Silly_story_generator

// COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// RAW TEXT STRINGS
let storyText =
  "It was a brisk 39 fahrenheit rainy night outside the :inserty:, as :insertx: sat atop the building in the rain. Suddenly, :insertz: and :insertz: showed up and sent :insertx: slamming into the ground below with 1000 pounds of force. :insertx: won and went inside after staring up into the sky for a few moments longer, contemplating if their will ever be a day when the villians stop. The Watcher watched it all and couldn't help but wonder the same question.";
const insertX = [
  "Spider-Man",
  "Iron-Man",
  "Kate Bishop",
  "Ms. Marvel",
  "Sue Storm",
  "Wanda Maximoff",
  "Deadpool",
  "Thor"
];
const insertY = ["Baxter Building", "Avengers Tower", "X-Mansion"];
const insertZ = [
  "The Green Goblin",
  "The Shocker",
  "an army of DoomBots",
  "a Sentinel",
  "Carnage",
  "The Vulture",
  "Kingpin",
];

// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;
  let yItem = randomValueFromArray(insertY);
  let xItem = randomValueFromArray(insertX);
  let zItem = randomValueFromArray(insertZ);
  let zItemZ = randomValueFromArray(insertZ);

  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertz:", zItem);
  newStory = newStory.replace(":insertz:", zItemZ);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertx:", xItem);

  if (customName.value !== "The Watcher") {
    const name = customName.value;

    newStory = newStory.replace("The Watcher", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(1000 / 14)} stone`;
    const temperature = `${Math.round((18 - 32) * (5 / 9))} centigrade`;

    newStory = newStory.replace("1000 pounds", weight);
    newStory = newStory.replace("39 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
