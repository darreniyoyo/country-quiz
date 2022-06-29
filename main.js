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
    timerDisplay.innerText = timeRemaining += 25;
    startTimer();
};


//level counter


//score


//country selector

const countryImages = [
{
    "imgSource": "./images/blank+map+of+the+netherlands.jpeg",
    "answer": "The Netherlands"
},
{
    "imgSource": "./images/blank+map+of+germany.jpeg",
    "answer": "Germany",

},
{
    "imgSource": "./images/blank+map+of+australia.jpeg",
    "answer": "Australia",

},
{
    "imgSource": "./images/blank+map+of+brazil.jpeg",
    "answer": "Brazil",

},
{
    "imgSource": "./images/blank+map+of+china.jpeg",
    "answer": "China",

},
{
    "imgSource": "./images/blank+map+of+Greece.jpeg",
    "answer": "Greece",

},
{
    "imgSource": "./images/blank+map+of+india.jpeg",
    "answer": "India",

},
{
    "imgSource": "./images/blank+map+of+indonesia.jpeg",
    "answer": "Indonesia",

},
{
    "imgSource": "./images/blank+map+of+ireland.jpeg",
    "answer": "Ireland",

},
{
    "imgSource": "./images/blank+map+of+japan.jpeg",
    "answer": "Japan",

},
{
    "imgSource": "./images/blank+map+of+mexico.jpeg",
    "answer": "Mexico",

},
{
    "imgSource": "./images/blank+map+of+norway.jpeg",
    "answer": "Norway",

},
{
    "imgSource": "./images/blank+map+of+south+africa.jpeg",
    "answer": "South Africa",

},
{
    "imgSource": "./images/blank+map+of+south+korea.jpeg",
    "answer": "South Korea",

},
{
    "imgSource": "./images/blank+map+of+spain.jpeg",
    "answer": "Spain",

},
{
    "imgSource": "images/blank+map+of+the+philippines.jpeg",
    "answer": "The Philippines",

},
{
    "imgSource": "./images/blank+map+of+the+uk.jpeg",
    "answer": "The UK",

},
{
    "imgSource": "./images/blank+map+of+the+usa.jpeg",
    "answer": "The USA",

},
{
    "imgSource": "./images/blank+map+of+turkey.jpeg",
    "answer": "Turkey",

},
{
    "imgSource": "./images/blank+map+of+uae.jpeg",
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
if (answer === input){ //find a way to accept multiple correct answers
     // return correct answer
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