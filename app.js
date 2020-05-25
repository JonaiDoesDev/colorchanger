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
}
