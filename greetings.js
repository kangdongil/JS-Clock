// import HTML
const form = document.querySelector(".js-form"),
  input = document.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreetings(currentValue);
  saveName(currentValue);
}

function paintGreetings(text) {
  form.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerText = `Hello ${text}`;
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreetings(currentUser);
  }
}

function init() {
  loadName();
}
init();
