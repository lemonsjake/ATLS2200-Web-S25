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
  'It was a brisk 41 fahrenheit rainy night outside the :insertl:, as :inserth1: sat atop the building in the rain. Suddenly, :insertv1: and :insertv2: showed up and sent :inserth1: slamming into the ground below with 2000 pounds of force. :inserth2: surprised the villians from behind, joining the fight. :inserth1: rejoined the battle fighting alongside :inserth2:. The two heros won then went inside after staring up into the sky together and contemplating the question posed by :inserth1:, "will there ever be a day when the villians stop?" Dinkysquatch The Watcher watched it all from beyond the Cosmos, unable to help but ponder the posed question.';
const insertL = [
  "Baxter Building",
  "Avengers Tower",
  "X-Mansion",
  "Avengers Mansion",
  "Sanctum Sanctorum",
  "Oscorp Tower",
  "Stark Industries Tower",
];
const insertH = [
  "Spider-Man",
  "She-Hulk",
  "Iron-Man",
  "Kate Bishop",
  "Deadpool",
  "Ms. Marvel",
  "Wolverine",
  "Sue Storm",
  "Daredevil",
  "Wanda Maximoff",
  "Thor",
  "Jean Grey",
  "Doctor Strange",
  "Spider-Women",
  "Miles Morales",
];
const insertV = [
  "Green Goblin",
  "Shocker",
  "Madame Masque",
  "an army of DoomBots",
  "a Sentinel",
  "Carnage",
  "Vulture",
  "Titania",
  "Kingpin",
  "Viper",
  "Doctor Octopus",
  "Electro",
  "Tombstone",
  "Sin",
  "Rhino",
  "Kraven the Hunter",
  "Lady Deathstrike",
  "Hammerhead",
  "Mister Negative",
];

// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;
  let loctn = randomValueFromArray(insertL);
  let hero1 = randomValueFromArray(insertH);
  let viln1 = randomValueFromArray(insertV);
  let viln2 = randomValueFromArray(insertV);
  let hero2 = randomValueFromArray(insertH);

  newStory = newStory.replace(":insertl:", loctn);
  newStory = newStory.replace(":inserth1:", hero1);
  newStory = newStory.replace(":insertv1:", viln1);
  newStory = newStory.replace(":insertv2:", viln2);
  newStory = newStory.replace(":inserth1:", hero1);
  newStory = newStory.replace(":inserth2:", hero2);
  newStory = newStory.replace(":inserth1:", hero1);
  newStory = newStory.replace(":inserth2:", hero2);
  newStory = newStory.replace(":inserth1:", hero1);

  if (customName.value !== "Dinkysquatch") {
    const name = customName.value;

    newStory = newStory.replace("Dinkysquatch", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(2000 / 14)} stone`;
    const temperature = `${Math.round((41 - 32) * (5 / 9))} centigrade`;

    newStory = newStory.replace("2000 pounds", weight);
    newStory = newStory.replace("41 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
