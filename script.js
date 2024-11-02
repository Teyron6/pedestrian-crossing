let road = document.querySelector(".road");
let black = document.querySelectorAll(".black");
let white = document.querySelectorAll(".white");
let buttonUp = document.querySelector(".up-button");
let buttonDown = document.querySelector(".down-button");

road.style.border = "solid 3px black";

black.forEach((elem) => {
  elem.style.backgroundColor = "black";
});

buttonUp.addEventListener("click", function () {
  for (let i = 0; i < white.length; i++) {
    white[i].innerHTML = "";
    let image = document.createElement("IMG");
    image.src = "images/arrow.svg";
    white[i].append(image);
  }
});

buttonDown.addEventListener("click", function () {
  for (let i = 0; i < white.length; i++) {
    white[i].innerHTML = "";
    let image = document.createElement("IMG");
    image.src = "images/arrow.svg";
    image.style.rotate = "180deg";
    white[i].append(image);
  }
});
