<<<<<<< HEAD
const changeColor = document.querySelector(".color-changer");
const bgColor = document.querySelector(".body");
const Hex = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

bgColor.style.backgroundColor = "antiquewhite";
changeColor.addEventListener("click", pickColor);

function pickColor(e) {
  let str = "#";

  for (i = 0; i < 6; i++) {
    let hexValue = Hex[Math.floor(Math.random() * Hex.length)];
    str += hexValue;
    bgColor.style.backgroundColor = str;
  }
=======
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
>>>>>>> 1c378d378265e3e6990868f4f365a0847c34e811
}
