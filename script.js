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
startQ = document.querySelector(".start");
tryAgain = document.getElementById("retryBtn");
questionText = document.getElementById("questiontext");
optionList =  document.querySelector(".choices");
wrongCorrect = document.querySelector(".wrongcorrect")
scoreCount = document.getElementById("score");
index = 0;



// questionList = ["What Are the Looping Structures in JavaScript?",
// "The FUNCTION and VAR are known as:",
// "What are the different types of Pop up boxes available in JavaScript??",
// "What was the original name of JavaScript when it discovered?",
// "Which of the following is not a JavaScript Data Types?"
// ]
// //var question1 = "What Are the Looping Structures in JavaScript?";
// var choices1 = ["For loops", "While loops", "Do-while loops", "All of the above"];
// answer1 = "All of the above"

// //var question2 = "The FUNCTION and VAR are known as:";
// var choices2 = ["Declaration statements", "Keywords", "Data types", "Prototypes"]
// answer2 = "Declaration statements"

// //question3 = "What are the different types of Pop up boxes available in JavaScript??";
// choices3= ["Alert", "Prompt", "Confirm", "All of the above"]
// answer3 = "All of the above"

// //question4 = "What was the original name of JavaScript when it discovered?"
// choices4 = ["LiveScript", "Mocha", "EScript", "JScript"]
// answer4 = "Mocha"

// //question5 = "Which of the following is not a JavaScript Data Types?"
// choices5 = ["Boolean", "Undefined", "Float", "Number"]
// answer5 = "Float"
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
// console.log(questionList.length)
//  console.log(questionList[0].choices);
//  console.log(questionList[2].ask);

startQ.addEventListener("click", function()
{   
    
    firstArticle.classList.add("hide");
    secondPage.classList.remove("hide");
    secLeft = 8;
    timerEl.textContent = secLeft;
    secInterval = setInterval(function(){
        if (secLeft > 0){
            secLeft --;
            timerEl.textContent = secLeft 
        }
        if (secLeft === 0){
            time.textContent = "Time's Up!"
            thirdPart()
        } 
        else if(secLeft === 1){
            time.textContent = "Time Remaining: " + secLeft + " second"
        }
    }, 1000)
    startQuestions()
})

// function startQuestions(){
//     //que_tag = questionList[index].ask;
//     for (var i = 0; i < questionList.length; i++){
//     questionText.textContent = questionList[i];
//     }
//     option_tag = '<button class = "button">' + choices1[0] + '</button>'+
//     '<button class = "button">' +  choices1[1] + '</button>' +
//     '<button class = "button">' +  choices1[2] + '</button>'+
//     '<button class = "button">' +  choices1[3] + '</button>'
//     optionList.innerHTML = option_tag;
    
//     choicesbutton = document.querySelectorAll(".button")
//     for(var i = 0; i < choicesbutton.length; i++ ){
//         choicesbutton[i].setAttribute("onclick", "optionSelected(this)")
//         }
    
// }
// function optionSelected(answer){
//         var userSelect = answer.textContent;
//         var correctAns = answer1;
//         var allOptions = optionList.children.length;
        
//         if (userSelect == correctAns){
//             wrongCorrect.textContent = "That's Correct!!!"
//         }
//         if (userSelect !== correctAns){
//             wrongCorrect.textContent = "Wrong Answer!!!"
//             secLeft = secLeft - 3
//         }
        
//         nextQuestion()       
    
//     }
function event2(){
optionList.forEach((element) => 
        element.addEventListener("click",function(event1){
            userAnswer =  event1.target.textContent                                        
            if (userAnswer == answer[index]){
                wrongCorrect.textContent = "That's right!"
            }
            if (userAnswer !== answer[index]){
                wrongCorrect.textContent = "Wrong Answer"
            }                                                                       
                
    })
    ) 
}
function startQuestions(){   
    que_tag = questionList[index].ask;  
    questionText.textContent = que_tag;
     
    option_tag = '<button class = "button">' +  questionList[index].choices[0] + '</button>'+
    '<button class = "button">' +  questionList[index].choices[1] + '</button>' +
    '<button class = "button">' +  questionList[index].choices[2] + '</button>'+
    '<button class = "button">' +  questionList[index].choices[3] + '</button>'
    optionList.innerHTML = option_tag;
event2()
    
}


//10:18
// function optionSelected(answer){
//     var userSelect = answer.textContent;
//     var correctAns = questionList[index].answer;
//     score = 0;
//     if (userSelect == correctAns){
//         wrongCorrect.textContent = "That's Correct!!!"
//     }
//     //THIS IS NOT WORKING RIGHT
//     if (userSelect == correctAns){
//         scoren = score + 1;
//         score = scoren++;
//         scoreCount.textContent = score;
//     }
//     if (userSelect !== correctAns){
//         wrongCorrect.textContent = "Wrong Answer!!!"
//         secLeft = secLeft - 3
//     }
    
//     for (var i = 0; i < questionList.length; i++){
//         index = i
//     }  
//     startQuestions() 
      
// }
//10:18

function thirdPart(){
    headerEl.classList.add("hide");
    firstArticle.classList.add("hide");
    secondPage.classList.add("hide");
    thirdPage.classList.remove("hide");
    fourthPage.classList.add("hide"); 
}


function fourthPart(){
scoreInitial.addEventListener("click", function()
{
    headerEl.classList.add("hide");
    firstArticle.classList.add("hide");
    secondPage.classList.add("hide");
    thirdPage.classList.add("hide");
    fourthPage.classList.remove("hide");
    
})
}


 
//TODO
//Take user back to the first page


tryAgain.addEventListener("click", function(){
    window.location.reload();
})



// TODO: Set local storage