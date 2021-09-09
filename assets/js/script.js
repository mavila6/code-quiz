// Query selector variables
const startBtn = document.querySelector('#startBtn');
const intro = document.querySelector('.intro');
const quiz = document.querySelector('.quiz');
const correct = document.querySelector('.good');
const wrong = document.querySelector('.bad');
const results = document.querySelector('.results');
const countdown = document.querySelector('#countdown');
let timeLeft = 75;

// Event Listeners
startBtn.addEventListener('click', startQuiz);

// Start the quiz and call timer function
function startQuiz() {
    intro.setAttribute('style', 'display: none');
    quiz.setAttribute('style', 'display: block');
    countdown.textContent = 'Time:' + timeLeft;
    timer();
    nextQuestion();
};

// Start Countdown Timer
function timer() {
    let timeInterval = setInterval(function () {
        timeLeft --;
        if (timeLeft >= 1) {
            countdown.textContent = 'Time: ' + timeLeft;
        } else {
            countdown.textContent = 'Time Is Up!';
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
};

// Next question function to filter through questions
function nextQuestion() {
    
}

// Questions Array Variable
const questions = [
    {
        question: "What HTML tag allows you to write JavaScript?",
        answers: [
            { text: "<html>", correct: false },
            { text: "<js>", correct: false },
            { text: "<meta>", correct: false },
            { text: "<script>", correct: true }
        ]
    },
    {
        question: "What is the correct syntax to link an external script?",
        answers: [
            { text: "<script src='script.js'>", correct: true },
            { text: "<script href='script.js'>", correct: false },
            { text: "<script alt='script.js'>", correct: false },
            { text: "<script class='sript.js'>", correct: false }
        ]
    },
    {
        question: "How do you write a function in JavaScript?",
        answers: [
            { text: "var = myFunction", correct: false },
            { text: "function myFunction()", correct: true },
            { text: "function.myFunction()", correct: false },
            { text: "function{}", correct: false }
        ]
    },
    {
        question: "How do you write an if statement in a script file?",
        answers: [
            { text: "if (var i=0, i < 2, i++)", correct: false },
            { text: "if <=i", correct: false },
            { text: "console.log('if')", correct: false },
            { text: "if (i !== 1)", correct: true }
        ]
    },
    {
        question: "What syntax is used to write a comment in JavaScript?",
        answers: [
            { text: "<!--comment--!>", correct: false },
            { text: "(comment)", correct: false },
            { text: "/*comment*/", correct: true },
            { text: "**comment**", correct: false }
        ]
    }
]
