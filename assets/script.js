// screens for display
var homeScreen = document.querySelector("#home-screen");
var quizScreen = document.querySelector("#quiz-screen");
var scoreScreen = document.querySelector("#score-screen");

// individual elements
var title = document.querySelector(".title");
var scoreBtn = document.querySelector("#score-btn");
var playQuizBtn = document.querySelector("#play-quiz");

var question = document.querySelector(".question");
var answers = document.querySelector(".answers");

var highScores = document.querySelector("#high-scores");
var goHomeButton = document.querySelector("#return-home");


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
    console.log("here");
};

function addScore(event){
    
};

function printHighScores(){
    hideAll();

    scoreScreen.setAttribute("style", "display: contents");

    goHomeButton.textContent = "Return Home";
};

hideAll();

displayHome();

playQuizBtn.addEventListener("click", playQuiz);
scoreBtn.addEventListener("click", printHighScores);
goHomeButton.addEventListener("click", displayHome);

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