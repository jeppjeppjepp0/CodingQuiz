// screens for display
var homeScreen = document.querySelector("#home-screen");
var quizScreen = document.querySelector("#quiz-screen");
var scoreScreen = document.querySelector("#score-screen");

// individual elements
var title = document.querySelector(".title");
var scoreBtn = document.querySelector("#score-btn");
var playQuizBtn = document.querySelector("#play-quiz");

var questionText = document.querySelector(".question");
var answersUl = document.querySelector(".answers");
var timer = document.querySelector(".timer");

var highScores = document.querySelector("#high-scores");
var goHomeButton = document.querySelector("#return-home");

var nameEntryBox = document.querySelector("#name-entry");

/* allQuestions is an array of objects
        each object contains a string and another array of objects
            the objects within this array contain a string and a boolean value
*/
var allQuestions =[
    // Q1
    {
        questionText : "Commonly used data types DO NOT INCLUDE:",
        answers: [{
            answersText : "strings",
            isCorrect : false
        },
        {
            answersText : "booleans",
            isCorrect : false
        },
        {
            answersText : "alerts",
            isCorrect : true
        },
        {
            answersText : "numbers",
            isCorrect : false
        }],
    },
    // Q2
    {
        questionText : "The condition of an if/else statement is enclosed within _____.",
        answers : [{
            answersText : "quotes",
            isCorrect : false
        },
        {
            answersText : "curly brackets",
            isCorrect : false
        },
        {
            answersText : "parenthesis",
            isCorrect : true
        },
        {
            answersText : "square brackets",
            isCorrect : false
        }], 
    },
    // Q3
    {
        questionText : "Arrays in JavaScript can store _____.",
        answers : [{
            answersText : "numbers and strings",
            isCorrect : false
        },
        {
            answersText : "other arrays",
            isCorrect : false
        },
        {
            answersText : "booleans",
            isCorrect : false
        },
        {
            answersText : "all of the above",
            isCorrect : true
        }],
    },
    // Q4
    {
        questionText : "String values must be enclosed within _____ when being assigned to variables",
        answers : [{
            answersText : "quotes",
            isCorrect : true
        },
        {
            answersText : "commas",
            isCorrect : false
        },
        {
            answersText : "curly brackets",
            isCorrect : false
        },
        {
            answersText : "parenthesis",
            isCorrect : false
        }],
    },
    // Q5
    {
        questionText : "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers : [{
            answersText : "JavaScript",
            isCorrect : false
        },
        {
            answersText : "terminal/bash",
            isCorrect : false
        },
        {
            answersText : "for loops",
            isCorrect : false
        },
        {
            answersText : "console log",
            isCorrect : true
        }],  
    }
];

// global variables for general wellbeing
var timeLeft = 120;
var currQuestion = 0;

// empty array to add scores
var storedScores = [];

function hideAll(){
    homeScreen.setAttribute("style", "display: none");
    quizScreen.setAttribute("style", "display: none");
    scoreScreen.setAttribute("style", "display: none");
    nameEntryBox.setAttribute("style", "display: none");
};

function displayHome(){
    hideAll();

    homeScreen.setAttribute("style", "display: contents");

    title.textContent = "Coding Quiz";
    scoreBtn.textContent = "View High Scores";
    playQuizBtn.textContent = "Play Quiz!";
};

function playQuiz(){
    hideAll();
    quizScreen.setAttribute("style", "display: contents");

    currQuestion = 0;
    timeLeft = 120;

    printQuestion(currQuestion);

    var timerInterval = setInterval(function(){
        if (timeLeft > 1) {
            timer.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timer.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } 
        if (currQuestion == allQuestions.length ||
            timeLeft < 1) {
                timer.textContent = '';
                endGame();
                clearInterval(timerInterval);
                // endGame();
            }
    }, 1000); 
};

function printQuestion(i){
    /*
    questionText : "Commonly used data types DO NOT INCLUDE:",
    answers: [{
        answersText : "strings",
        isCorrect : false
    },
    {
        answersText : "booleans",
        isCorrect : false
    },
    {
        answersText : "alerts",
        isCorrect : true
    },
    {
        answersText : "numbers",
        isCorrect : false
    }],
    */

    var liArray = [document.createElement("button"),
                   document.createElement("button"),
                   document.createElement("button"),
                   document.createElement("button")];
    // print question
    questionText.textContent = allQuestions[i].questionText;

    // answer
    // loop through answers
    for (var j = 0; j < allQuestions[i].answers.length; j++) {
        // sets button text to answer text
        liArray[j].textContent = (j+1) + ": " + allQuestions[i].answers[j].answersText;
        console.log((j+1) + ": " + allQuestions[i].answers[j].answersText.textContent);
        // console.log(answersUl.children[i]);

        if (allQuestions[i].answers[j].isCorrect) {
            liArray[j].classList.add("correct");
        }
        else {
            liArray[j].classList.add("wrong");
        }

        answersUl.children[j].appendChild(liArray[j]);
    }

    var correctBtn = document.querySelector(".correct");
    var wrongBtn = document.getElementsByClassName("wrong");

    correctBtn.addEventListener("click", function(){
        clearQuestion();

        currQuestion++;
        if (currQuestion !== allQuestions.length){
            printQuestion(currQuestion);
        }
    });
    for (var i = 0; i < wrongBtn.length; i++){
        wrongBtn[i].addEventListener("click", function(){
            clearQuestion();

            currQuestion++;
            if (currQuestion !== allQuestions.length){
                printQuestion(currQuestion);
            }

            timeLeft -= 20;
        });
    }
};

function clearQuestion(){
    questionText.textContent = "";
    for (var i = 0; i < 4; i++) {
        answersUl.children[i].children[0].remove();
    }
}

function endGame(){
    hideAll();

    printHighScores();
    nameEntryBox.setAttribute("style", "display: contents");

    
    // store scores

    nameEntryBox.addEventListener("submit", handleSubmit);
}

function handleSubmit(event){
    // console.log(document.querySelector("input").value);
    storedScores = storedScores.concat({name: document.querySelector("input").value, time: timeLeft});
    localStorage.setItem("storedScores", JSON.stringify(storedScores));
    printHighScores();
}

function printHighScores(){
    hideAll();
    scoreScreen.setAttribute("style", "display: contents");

    // Print Scores
    storedScores = pullScores();
    
    for (var i = 0; i < storedScores.length; i++){
        var newLi = document.createElement("li");
        newLi.textContent = "Name: " + storedScores[i].name + "; Score: " + storedScores[i].time;
        highScores.appendChild(newLi);
    }

    goHomeButton.textContent = "Return Home";
};

function pullScores(){
    return JSON.parse(localStorage.getItem("storedScores")) || [];
}


// default screen
hideAll();
displayHome();


// to load different screens
playQuizBtn.addEventListener("click", playQuiz); //load quiz
scoreBtn.addEventListener("click", printHighScores); //load scores
goHomeButton.addEventListener("click", displayHome); //load home screen

/*
display home screen
    title text
    highscore nav
    play quiz button
high scores display
play quiz
    print questions/assign answers
        print question
        create list item button
    timer
    scoring
    save scoring/name
event listeners for click incorrect/correct
*/

/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
*/