const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const imageFilenames = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg",
];

/* Declaring the alternative text for each image file */
const imageAlts = [
  "Moon in first quarter phase centered on blue sky beside clouds",
  "Glowing full moon centered in blue gray sky",
  "Super full moon on early morning horizon",
  "Blurred image of full moon in blue twilight dusk sky",
  "Waxing crescent moon between power lines against gray sky",
];

/* Looping through images */
for (pic in imageFilenames) {
  const newImage = document.createElement("img");
  // newImage.setAttribute('src', xxx);
  newImage.setAttribute("src", `images/${imageFilenames[pic]}`);
  // newImage.setAttribute('alt', xxx);
  newImage.setAttribute("alt", imageAlts[pic]);
  thumbBar.appendChild(newImage);

  /* Click event listener sets displayed image to clicked thumbnail */
  newImage.addEventListener(
    "click",
    () => displayedImage.setAttribute("src", imgSrc),
    displayedImage.setAttribute("alt", imgAlt)
  );
}

/* Wiring up the Darken/Lighten button */

// MAYBE CHANGE BACKGROUND COLOR WITH LIGHTEN/DARKEN
