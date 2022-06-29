//start game function

const start = document.getElementById("start");
const header = document.getElementById("header");
const answerInput = document.getElementById("answer-input");
const checkAnswerButton = document.getElementById("check-button");
const tryAgainButton = document.getElementById("try-again");

let round = document.getElementById("round-counter");
let timerDisplay = document.getElementById("countdown-timer");
let lives = document.getElementById("lives-counter");

let title = document.getElementById("title");

let levelIndex = 0;
let roundCount = 1;
let livesRemaining = 3;
let timeRemaining = 25;

lives.innerText = livesRemaining;
round.innerText = roundCount;

//initialize board

start.addEventListener("click", initializeBoard);

function initializeBoard(){
start.classList.add("hide");
header.classList.remove("hide");
answerInput.classList.remove("hide");
changeImage();
startTimer();
}
//round counter


//timer
let timer;

function countDown(){
    if (timeRemaining >= 0) {
    timerDisplay.innerText = timeRemaining;
   } else {
    gameOver()
  }
  timeRemaining--;
};

function startTimer(){
    timer = setInterval(countDown, 1000);
}

function stopTimer(){
    clearInterval(timer);
};

function restartTimer (){
    clearInterval(timer);
    timerDisplay.innerText = timeRemaining += 10;
    startTimer();
};

//country selector

const countryImages = [
{
    "imgSource": "./images/the-netherlands.jpeg",
    "answer": "The Netherlands",
    "answer2": "Netherlands",
    "answer3": "Holland"
},
{
    "imgSource": "./images/germany.jpeg",
    "answer": "Germany",

},
{
    "imgSource": "./images/australia.jpeg",
    "answer": "Australia",

},
{
    "imgSource": "./images/brazil.jpeg",
    "answer": "Brazil",

},
{
    "imgSource": "./images/china.jpeg",
    "answer": "China",

},
{
    "imgSource": "./images/greece.jpeg",
    "answer": "Greece",

},
{
    "imgSource": "./images/india.jpeg",
    "answer": "India",

},
{
    "imgSource": "./images/indonesia.jpeg",
    "answer": "Indonesia",

},
{
    "imgSource": "./images/ireland.jpeg",
    "answer": "Ireland",

},
{
    "imgSource": "./images/japan.jpeg",
    "answer": "Japan",

},
{
    "imgSource": "./images/mexico.jpeg",
    "answer": "Mexico",

},
{
    "imgSource": "./images/norway.jpeg",
    "answer": "Norway",

},
{
    "imgSource": "./images/south-africa.jpeg",
    "answer": "South Africa",

},
{
    "imgSource": "./images/south-korea.jpeg",
    "answer": "South Korea",

},
{
    "imgSource": "./images/spain.jpeg",
    "answer": "Spain",

},
{
    "imgSource": "images/the-philippines.jpeg",
    "answer": "The Philippines",

},
{
    "imgSource": "./images/uk.jpeg",
    "answer": "The UK",

},
{
    "imgSource": "./images/usa.jpeg",
    "answer": "The USA",

},
{
    "imgSource": "./images/turkey.jpeg",
    "answer": "Turkey",

},
{
    "imgSource": "./images/uae.jpeg",
    "answer": "UAE",

}
];

function changeImage() {
 let imageShown = countryImages[levelIndex].imgSource;
  document.getElementById("country-map").src = imageShown;
}


//accept input

checkAnswerButton.addEventListener("click", checkAnswer);

function checkAnswer(){
let answer = countryImages[levelIndex].answer;
let input = document.getElementById("guess").value;

if (input.toLowerCase() === answer.toLowerCase()){
    levelIndex++;
    roundCount++
    if (roundCount === 21){
        winGame()
    }
    round.innerText = roundCount;
    restartTimer();
    changeImage();

    return true;
} else {
    console.log(false); //return incorrect message
    livesRemaining--;
    lives.innerText = livesRemaining;
    if (livesRemaining === 0){
        gameOver();
    }
}}
// game over

function gameOver (){
    stopTimer();
    document.getElementById("country-map").src = "./images/starting-globe.png";
    document.getElementById("info1").innerText = "GAME OVER"
    document.getElementById("info2").innerText = "Try Again?"
    answerInput.classList.add("hide");
    tryAgainButton.classList.remove("hide");
    tryAgainButton.addEventListener("click", reload);
}

function winGame(){
    stopTimer();
    document.getElementById("country-map").src = "./images/starting-globe.png";
    document.getElementById("info1").innerText = "YOU WIN"
    document.getElementById("info2").innerText = "Play Again?"
    answerInput.classList.add("hide");
    tryAgainButton.classList.remove("hide");
    tryAgainButton.addEventListener("click", reload);  
}

function reload (){
    window.location.reload();
}