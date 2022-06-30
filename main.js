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
    "answer": "netherlands"
},
{
    "imgSource": "./images/germany.jpeg",
    "answer": "germany",

},
{
    "imgSource": "./images/australia.jpeg",
    "answer": "australia",

},
{
    "imgSource": "./images/brazil.jpeg",
    "answer": "brazil",

},
{
    "imgSource": "./images/china.jpeg",
    "answer": "china",

},
{
    "imgSource": "./images/greece.jpeg",
    "answer": "greece",

},
{
    "imgSource": "./images/india.jpeg",
    "answer": "india",

},
{
    "imgSource": "./images/indonesia.jpeg",
    "answer": "indonesia",

},
{
    "imgSource": "./images/ireland.jpeg",
    "answer": "ireland",

},
{
    "imgSource": "./images/japan.jpeg",
    "answer": "japan",

},
{
    "imgSource": "./images/mexico.jpeg",
    "answer": "mexico",

},
{
    "imgSource": "./images/norway.jpeg",
    "answer": "norway",

},
{
    "imgSource": "./images/south-africa.jpeg",
    "answer": "south africa",

},
{
    "imgSource": "./images/south-korea.jpeg",
    "answer": "south korea",

},
{
    "imgSource": "./images/spain.jpeg",
    "answer": "spain",

},
{
    "imgSource": "images/the-philippines.jpeg",
    "answer": "philippines"

},
{
    "imgSource": "./images/uk.jpeg",
    "answer": "united kingdom"

},
{
    "imgSource": "./images/usa.jpeg",
    "answer": "united states of america"
},
{
    "imgSource": "./images/turkey.jpeg",
    "answer": "turkey",

},
{
    "imgSource": "./images/uae.jpeg",
    "answer": "united arab emirates"
}
];



function changeImage() {
 let imageShown = countryImages[levelIndex].imgSource;
  document.getElementById("country-map").src = imageShown;
}


//accept input

checkAnswerButton.addEventListener("click", checkAnswer);


//.toLowerCase();

function checkAnswer(){
    let input = document.getElementById("guess").value.toLowerCase();
    let answer = countryImages[levelIndex].answer;
   console.log(input);
if (answer === input){
    answerCorrect();
    console.log("answer correct")
    console.log(input);
    console.log(answer);
} else {
    answerWrong();
    console.log("answer wrong")
    console.log(input);
    console.log(answer);
}
}

function answerCorrect(){
    levelIndex++;
    roundCount++
    document.getElementById("guess").value = "";
    if (roundCount === 21){
        winGame()
    }
    round.innerText = roundCount;
    restartTimer();
    changeImage();

    return true;
};

function answerWrong() {
    console.log(false); //return incorrect message
    livesRemaining--;
    lives.innerText = livesRemaining;
    if (livesRemaining === 0){
        gameOver();
    }
};
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
};