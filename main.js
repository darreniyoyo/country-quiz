//Start game function
const start = document.getElementById("start");
const header = document.getElementById("header");
const countries = document.getElementById("countries")
const answerInput = document.getElementById("answer-input")

start.addEventListener("click", initializeBoard);

//initialize Board
function initializeBoard(){
start.classList.add("hide");
header.classList.remove("hide");
countries.classList.remove("hide");
}
// shuffleCountries = countryAnswers.sort(() => Math.random() - .5);

//showing one level at a time

 function showLevel() {


//accept input
function checkAnswer(){}


// let checkAnswer = document.getElementById("button");
// checkAnswer.onclick = function() {
//   let input = document.getElementsByTagName("input")[0];
//   console.log(input);
// };

//show a country

}

//questions

const countryAnswers = [
    {
     country: 0,
      answer: "The Netherlands Holland"
    },
    {
      country: 1,
      answer: "Germany"
    },
    {
      country: 2,
      answer: "France"
    }
  ];

//end game
