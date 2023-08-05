function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(".number");
const btnCreate = document.querySelector(".create");
const btnDestroy = document.querySelector(".destroy");

