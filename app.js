const colorChanger = document.querySelector(".color-changer");
const bgColor = document.querySelector(".body");
const diffColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "coral",
  "purple",
  "aliceblue",
  "brown",
  "cyan",
  "goldenrod",
];
bgColor.style.backgroundColor = "antiquewhite";
colorChanger.addEventListener("click", changeColor);

function changeColor(e) {
  bgColor.style.backgroundColor =
    diffColors[Math.floor(Math.random() * diffColors.length)];
}
