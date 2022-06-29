//start game function

const start = document.getElementById("start");
const header = document.getElementById("header");
const answerInput = document.getElementById("answer-input");
const checkAnswerButton = document.getElementById("check-button");
let round = document.getElementById("round-counter");
let score = document.getElementById("score-count");
let timerDisplay = document.getElementById("countdown-timer");
let title = document.getElementById("title") 

let levelIndex = 0;
let levelsPassed = 1;
let livesRemaining = 3;
let timeRemaining = 25;

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
    title.innerText = "GAME OVER!";
    stopTimer();
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
    round.innerText = levelsPassed++;
    restartTimer();
    changeImage();
    return true;
} else {
    console.log(false); //return incorrect message
    livesRemaining--;
}
}

function printScore () {

}

console.log(levelsPassed);

//game over --- Create a winning / game over page
if (levelsPassed === 21){
    console.log("You Win"); // 
};

if (livesRemaining === 0){
        console.log("Game Over")
    }


