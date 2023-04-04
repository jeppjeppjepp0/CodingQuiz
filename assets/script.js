// screens for display
var homeScreen = document.querySelector("#home-screen");
var quizScreen = document.querySelector("#quiz-screen");
var scoreScreen = document.querySelector("#score-screen");

// individual elements
var title = document.querySelector(".title");
var scoreBtn = document.querySelector("#score-btn");
var playQuizBtn = document.querySelector("#play-quiz");

var questionText = document.querySelector(".question");
var answersText = document.querySelector(".answers");

var highScores = document.querySelector("#high-scores");
var goHomeButton = document.querySelector("#return-home");

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



function hideAll(){
    homeScreen.setAttribute("style", "display: none");
    quizScreen.setAttribute("style", "display: none");
    scoreScreen.setAttribute("style", "display: none");
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

    for (var i = 0; i < allQuestions.length; i++) {

    // print question
    // answer

    }


    // timer
};

function addScore(event){
    // Store Scores
};

function printHighScores(){
    hideAll();
    scoreScreen.setAttribute("style", "display: contents");

    // Print Scores

    goHomeButton.textContent = "Return Home";
};

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