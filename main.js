//start game function

const start = document.getElementById("start");
const header = document.getElementById("header");
const answerInput = document.getElementById("answer-input");
const checkAnswerButton = document.getElementById("check-button");
let level = document.getElementById("level-counter").innerHTML;
let score = document.getElementById("score-count").innerHTML;

let levelIndex = 0;
let levelsPassed = 0;
let livesRemaining = 3;
let scoreIndex = 0;

console.log(levelIndex);
console.log(livesRemaining);

//initialize board

start.addEventListener("click", initializeBoard);

function initializeBoard(){
start.classList.add("hide");
header.classList.remove("hide");
answerInput.classList.remove("hide");
changeImage();
startTimer();
}

//timer
function startTimer (){
const intervalId = setInterval(function () {
  let timer = document.getElementById("countdown-timer").innerHTML;
  if (timer > 0) {
    return timer;
    console.log(timer);
  } else {
    console.log("Game Over");
    clearInterval(intervalId);
  }
  timer--;
}, 1000);
}

//level counter


//score


//country selector

const countryImages = [
{
    "imgSource": "./images/blank+map+of+the+Netherlands.jpeg",
    "answer": "The Netherlands"
},
{
    "imgSource": "./images/blank+map+of+germany.jpeg",
    "answer": "Germany",

}
];

function changeImage() {
 let imageShown = countryImages[levelIndex].imgSource;
  document.getElementById("country-map").src = imageShown;
}

//page update
function updatePage (){

}

//accept input

checkAnswerButton.addEventListener("click", checkAnswer);

function checkAnswer(){
let answer = countryImages[levelIndex].answer;
let input = document.getElementById("guess").value;
if (answer === input){ //find a way to accept multiple correct answers
    console.log(true); // return correct answer
    levelIndex++;
    levelsPassed++;
    initializeBoard()
} else {
    console.log(false); //return incorrect message
    livesRemaining--;
}
}

console.log(levelsPassed);

//game over --- Create a winning / game over page
if (levelsPassed === 21){
    console.log("You Win"); // 
};

if (livesRemaining === 0){
        console.log("Game Over")
    }


