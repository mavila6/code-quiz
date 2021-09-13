// Global variables 
const startBtn = document.querySelector('#startBtn');
const intro = document.querySelector('.intro');
const quiz = document.querySelector('.quiz');
const questionEl = document.querySelector('.question');
const answerBtns = document.querySelector('.answers');
const correct = document.querySelector('.good');
const wrong = document.querySelector('.bad');
const results = document.querySelector('.results');
const countdown = document.querySelector('#countdown');
let currentQ 
let timeLeft = 75;

// Event Listener
startBtn.addEventListener('click', start);

// Start the quiz and call timer function
function start() {
    intro.setAttribute('style', 'display: none');
    quiz.setAttribute('style', 'display: block');
    countdown.textContent = 'Time:' + timeLeft;
    timer();
    currentQ = 0
    displayQuestion(questions[currentQ]);
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

// Display initial question
function displayQuestion(question) {
    questionEl.textContent = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        answerBtns.appendChild(button);
        button.addEventListener('click', checkAnswer);
    });
};

// Check answer function to display correct/wrong message and decrement time if needed
function checkAnswer(event) {
    const selectedAnswer = event.target;
    const rightAnswer = selectedAnswer.dataset.correct;
    if (rightAnswer === 'true') {
        wrong.setAttribute('style', 'display: none');
        correct.setAttribute('style', 'display: block');
    } else {
        correct.setAttribute('style', 'display: none');
        wrong.setAttribute('style', 'display: block');
        timeLeft -= 10;
    };
    nextQuestion();
};

// function to reset the questions after every answer an display next question
function nextQuestion() {
    console.log('yoooo')
};

// End of quiz function
function gameOver(){
    console.log('game over');
};

// Questions Array Variable
const questions = [
    {
        question: "What HTML tag allows you to write JavaScript?",
        answers: [
            { text: "1. <html>", correct: false },
            { text: "2. <js>", correct: false },
            { text: "3. <meta>", correct: false },
            { text: "4. <script>", correct: true }
        ]
    },
    {
        question: "What is the correct syntax to link an external script?",
        answers: [
            { text: "1. <script src='script.js'>", correct: true },
            { text: "2. <script href='script.js'>", correct: false },
            { text: "3. <script alt='script.js'>", correct: false },
            { text: "4. <script class='sript.js'>", correct: false }
        ]
    },
    {
        question: "How do you write a function in JavaScript?",
        answers: [
            { text: "1. var = myFunction", correct: false },
            { text: "2. function myFunction()", correct: true },
            { text: "3. function.myFunction()", correct: false },
            { text: "4. function{}", correct: false }
        ]
    },
    {
        question: "How do you write an if statement in a script file?",
        answers: [
            { text: "1. if (var i=0, i < 2, i++)", correct: false },
            { text: "2. if <=i", correct: false },
            { text: "3. console.log('if')", correct: false },
            { text: "4. if (i !== 1)", correct: true }
        ]
    },
    {
        question: "What syntax is used to write a comment in JavaScript?",
        answers: [
            { text: "1. <!--comment-->", correct: false },
            { text: "2. (comment)", correct: false },
            { text: "3. //comment", correct: true },
            { text: "4. **comment**", correct: false }
        ]
    }
];
