const generateColorArray = () => [
  Math.floor(Math.random() * 255),
  Math.floor(Math.random() * 255),
  Math.floor(Math.random() * 255),
];
const generateColors = () => [
  generateColorArray(),
  generateColorArray(),
  generateColorArray(),
];

const arrayToRGB = ([a, b, c]) => `rgb(${a}, ${b}, ${c})`;
const RGBToArray = (color) => color.slice(4, -1).split(",");

const generateBox = (colorArray) =>
  `<div class="color-box" style="background-color: ${arrayToRGB(
    colorArray
  )}"></div>`;

const generateBoxes = (colorArrays) =>
  generateBox(colorArrays[0]) +
  generateBox(colorArrays[1]) +
  generateBox(colorArrays[2]);

const startGame = () => {
  // Generate Colors
  const randomColors = generateColors();
  //  Store & show correct
  const random_one_three = Math.floor(Math.random() * 3);
  const correct = arrayToRGB(randomColors[random_one_three]);
  const correctHTML = document.querySelector(".correct");
  correctHTML.innerHTML = "Click this color: " + correct;
  //  Display boxes
  const boxesContainer = document.querySelector(".boxes-container");
  boxesContainer.innerHTML = generateBoxes(randomColors);
  // If wrong box click, hide box
  document.onclick = (e) => {
    //   If clicking a non hidden-box, check if correct, if correct, hide
    if (
      e.target.classList.contains("color-box") &&
      !e.target.classList.contains("hidden")
    ) {
      if (!(e.target.style.backgroundColor === correct)) {
        e.target.classList.add("hidden");
        alert("Wrong");
      } else {
        boxesContainer.innerHTML = generateBoxes([
          RGBToArray(correct),
          RGBToArray(correct),
          RGBToArray(correct),
        ]);
        alert("Correct!!");
        document.onclick = void 0;
      }
    }
  };
};
startGame();
