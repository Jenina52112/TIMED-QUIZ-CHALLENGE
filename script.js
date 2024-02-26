timerEl = document.querySelector("#timer");
startQ = document.querySelector(".start");
time = document.querySelector(".time")
headerEl = document.querySelector("header");
firstArticle = document.querySelector("article");
secondPage = document.getElementById("questions");
chooseAnswer = document.querySelector(".answer")
thirdPage = document.getElementById("score-initial");
scoreInitial = document.getElementById("submitInitial");
fourthPage = document.getElementById("lastpage");
var startQ = document.querySelector(".start");
tryAgain = document.getElementById("retryBtn");


startQ.addEventListener("click", function()
{
    secLeft = 10;
    timerEl.textContent = secLeft;
    
    secInterval = setInterval(function(){
        if (secLeft > 0){
            secLeft --;
            timerEl.textContent = secLeft 
        }
        if (secLeft === 0){
            time.textContent = "Time's Up!"
        } 
        
    }, 1000)
    firstArticle.classList.add("hide");
    secondPage.classList.remove("hide");

})

//TODO
//replace the set of questions and ansers

chooseAnswer.addEventListener("click", function()
{
    headerEl.classList.add("hide");
    firstArticle.classList.add("hide");
    secondPage.classList.add("hide");
    thirdPage.classList.remove("hide");
})

scoreInitial.addEventListener("click", function()
{
    headerEl.classList.add("hide");
    firstArticle.classList.add("hide");
    secondPage.classList.add("hide");
    thirdPage.classList.add("hide");
    fourthPage.classList.remove("hide");
})

tryAgain.addEventListener("click", function(){

        
})
//TODO
//Take user back to the first page



//define the questions and answers
var questionList =
    [{
        sequence: 1,
        ask: "What Are the Looping Structures in JavaScript?",
        answer: "All of the above",
        choices: ["For loops", "While loops", "Do-while loops", "All of the above"]
    },

    {
        sequence: 2,
        ask: "The FUNCTION and VAR are known as:",
        answer: "Declaration statements",
        choices: ["Declaration statements", "Keywords", "Data types", "Prototypes"]
    },
  
    {
        sequence: 3,
        ask: "What are the different types of Pop up boxes available in JavaScript??",
        answer: "All of the above",
        choices: ["Alert", "Prompt", "Confirm", "All of the above"]
    },
    
    {
        sequence: 4,
        ask: "What was the original name of JavaScript when it discovered?",
        answer: "Mocha",
        choices: ["LiveScript", "Mocha", "EScript", "JScript"]
    },

    {
        sequence: 5,
        ask: "Which of the following is not a JavaScript Data Types?",
        answer: "Float",
        choices: ["Boolean", "Undefined", "Float", "Number"]
    },
]


// var question1 = "What is the capital of USA?";
// var question2 = "What is the capital of UAE?";
// var question3 = "What is the capital of Philippines";

// var choices1 = ["A. U", "B. S", "C. A", "D.Washington"];
// var choices2 = ["A. U", "B. A", "C. E", "D.Washington"];
// var choices3 = ["A. P", "B. H", "C. L", "D.Washington"];
// var QnA = document.querySelector(".QandA");



// function startQuiz(){

// }
//function after clicking start


