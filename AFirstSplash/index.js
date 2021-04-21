var randomNumber = 0;
var count = 0;
var submissions = "";
const guess = document.querySelector(".guess");
const submit = document.querySelector(".submitBtn");
const submissionsEl = document.querySelector("#submissions");

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 10);
}

function resetCounter() {
  count = 0;
}

function showSubmissions() {
  submissionsEl.textContent = submissions;
}

function onClickSubmit() {
  submit.onclick = function (e) {
    submissions = submissions + " " + e;
    guess.value = "";
    showSubmissions();
  };
}

generateRandomNumber();
resetCounter();
onClickSubmit();
