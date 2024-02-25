timerEl = document.querySelector("#timer");
startQ = document.querySelector(".start");
time = document.querySelector(".time")
firstArticle = document.querySelector("article");
secondPage = document.getElementById("#questions");
var startQ = document.querySelector(".start");

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

//define the questions and answers

var question1 = "What is the capital of USA?";
var question2 = "What is the capital of UAE?";
var question3 = "What is the capital of Philippines";

var choices1 = ["A. U", "B. S", "C. A", "D.Washington"];
var choices2 = ["A. U", "B. A", "C. E", "D.Washington"];
var choices3 = ["A. P", "B. H", "C. L", "D.Washington"];
var QnA = document.querySelector(".QandA");

function startQuiz(){

}
//function after clicking start


