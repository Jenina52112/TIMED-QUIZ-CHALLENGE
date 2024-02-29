body = document.body;
timerEl = document.querySelector("#timer");
startQ = document.querySelector(".start");
time = document.querySelector(".time")
headerEl = document.querySelector("header");
firstArticle = document.querySelector("article");
secondPage = document.getElementById("questions");

thirdPage = document.getElementById("score-initial");
scoreInitial = document.getElementById("submitInitial");
fourthPage = document.getElementById("lastpage");
var startQ = document.querySelector(".start");
tryAgain = document.getElementById("retryBtn");
questionText = document.getElementById("questiontext");
optionList =  document.querySelector(".choices");
wrongCorrect = document.querySelector(".wrongcorrect")
index = 0;
sequencenum = 0;
que_num = 1;
que_count = 0;

// chooseAnswer = document.querySelector(".answertext");
// chooseAnswer1 = document.querySelector(".answertext1");
// chooseAnswer2 = document.querySelector(".answertext2");
// chooseAnswer3 = document.querySelector(".answertext3");
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

 console.log(questionList[0].choices);
 console.log(questionList[0].ask);
 


startQ.addEventListener("click", function(option_tag)
{   
    firstArticle.classList.add("hide");
    secondPage.classList.remove("hide");
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
        else if(secLeft === 1){
            time.textContent = "Time Remaining: " + secLeft + " second"
        }
    }, 1000)
    startQuestions()
})
    
function startQuestions(){
    que_tag = questionList[index].ask;
    questionText.textContent = que_tag;
   
    option_tag = '<button class = "button">' +  questionList[index].choices[0] + '</button>'+
    '<button class = "button">' +  questionList[index].choices[1] + '</button>' +
    '<button class = "button">' +  questionList[index].choices[2] + '</button>'+
    '<button class = "button">' +  questionList[index].choices[3] + '</button>'
    optionList.innerHTML = option_tag;
    
    choicesbutton = document.querySelectorAll(".button")
    for(var i = 0; i < choicesbutton.length; i++ ){
        choicesbutton[i].setAttribute("onclick", "optionSelected(this)")
           
        }

    }

    function nextQuestion(){

    }

function optionSelected(answer){
    var userSelect = answer.textContent;
    var correctAns = questionList[sequencenum].answer;
    var allOptions = optionList.children.length;

    if (userSelect == correctAns){
        wrongCorrect.textContent = "That's Correct!!!"
    }
    if (userSelect !== correctAns){
        wrongCorrect.textContent = "Wrong Answer!!!"
        secLeft = secLeft - 3
    }

}

//Last page
scoreInitial.addEventListener("click", function()
{
    headerEl.classList.add("hide");
    firstArticle.classList.add("hide");
    secondPage.classList.add("hide");
    thirdPage.classList.add("hide");
    fourthPage.classList.remove("hide");
})


//removed form from retry button
 tryAgain.addEventListener("click", function(){
    window.location.reload();
})
//TODO
//Take user back to the first page






// TODO: Set local storage


