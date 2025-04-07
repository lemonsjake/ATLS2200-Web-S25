const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* NOT REQUIRED -- PERSONAL ADDITION */
const hd1 = document.querySelector("h1");
// const bdy = document.querySelector("body");

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
  newImage.addEventListener("click", () => {
    displayedImage.setAttribute("src", newImage.getAttribute("src"));
    displayedImage.setAttribute("alt", newImage.getAttribute("alt"));
  });
  // HOW WOULD THIS WORK WITH JUST ADDING ONE EVENT LISTENER TO THE THUMBBAR ??
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";

    /* NOT REQUIRED -- PERSONAL ADDITION */
    hd1.style.fontFamily = "Josefin Sans";
    hd1.style.textShadow =
      "skyblue 0 0 0.1rem, cornflowerblue 0 0 0.33rem, cornsilk 0 0 0.67rem, cornsilk 0 0 1rem";
    hd1.style.color = "#1e1e1e";
    // bdy.style.backgroundColor = "#1e1e1e";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";

    /* NOT REQUIRED -- MY ADDITION */
    hd1.style.fontFamily = "Quicksand";
    hd1.style.textShadow =
      "skyblue 0 0 0.33rem, royalblue 0 0 0.67rem, blue 0 0 1rem";
    hd1.style.color = "white";
    // bdy.style.backgroundColor = "white";
  }
});
