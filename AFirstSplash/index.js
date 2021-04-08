var randomNumber = 0;
var count = 0;
var submissions = "";
let elementInput = document.querySelector("#inputNumber");
let elementSubmit = document.querySelector("#submitNumber");

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 10);
}

function resetCounter() {
  count = 0;
}

function showSubmissions() {
  const submissionsEl = document.querySelector("#submissions");
  submissionsEl.textContent = submissions;
  console.log(submissions);
}

function onClickSubmit() {
  elementSubmit.onclick = function (e) {
    console.log(e.target, elementInput.value);
    submissions = submissions + " " + e;
    elementInput.value = "";
    showSubmissions();
  };
}

generateRandomNumber();
resetCounter();
onClickSubmit();
