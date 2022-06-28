//Start game function
const start = document.getElementById("start");
const header = document.getElementById("header");
const answerInput = document.getElementById("answer-input");
const checkAnswerButton = document.getElementById("check-button");
let LevelIndex = 0;
let LevelsPassed = 0;

console.log(LevelIndex);

start.addEventListener("click", initializeBoard);

// const randomCountry, currentCountryIndex

//initialize Board
function initializeBoard(){
start.classList.add("hide");
header.classList.remove("hide");
answerInput.classList.remove("hide");
changeImage()
}

//country selector

const countryImages = [
{
    "imgSource": "./blank-country-maps/jpg/blank+map+of+the+Netherlands.jpg",
    "answer": "The Netherlands"
},
{
    "imgSource": "./blank-country-maps/jpg/blank+map+of+germany.jpg",
    "answer": "Germany",

}
];

function changeImage() {
 let imageShown = countryImages[LevelIndex].imgSource;
  document.getElementById("country-map").src = imageShown;
}

//accept input

checkAnswerButton.addEventListener("click", checkAnswer);

function checkAnswer(){
let answer = countryImages[LevelIndex].answer;
let input = document.getElementById("guess").value;
if (answer === input){
console.log(true);
LevelIndex++;
LevelsPassed++;
changeImage();
} else {console.log(false);
}
}


//timer


//Game over
function gameOver() {
    if (LevelsPassed === 21)
    console.log(gameOver)
}
//score


