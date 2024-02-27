const whiteBg = document.querySelector("button.btn-white-mode");
const darkBg = document.querySelector("button.btn-dark-mode");
const head = document.querySelector("h2.title");

whiteBg.style.display = "none";

const darkMode = () => {
  document.body.style.background = "#262626";
  document.body.style.color = "#fff";
  darkBg.style.display = "none";
  whiteBg.style.display = "block";
};

const whiteMode = () => {
  document.body.style.background = "#fff";
  document.body.style.color = "#000";
  darkBg.style.display = "block";
  whiteBg.style.display = "none";
};

const greeting = () => {};
