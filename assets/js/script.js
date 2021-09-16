// Global variables 
// Query selector variables
const startBtn = document.querySelector('#startBtn');
const intro = document.querySelector('.intro');
const quiz = document.querySelector('.quiz');
const questionEl = document.querySelector('.question');
const answerBtns = document.querySelector('.answers');
const prompt = document.querySelector('.prompt');
const correct = document.querySelector('.good');
const wrong = document.querySelector('.bad');
const results = document.querySelector('.results');
const countdown = document.querySelector('.countdown');
const gameEnd = document.querySelector('.gameOver');
const initials = document.querySelector('#initials');
const submitBtn = document.querySelector('.submit');
// Undefined variables to be used later
let currentQ;
let score;
// Countdown time variable
let timeLeft = 75;

// Event Listeners
startBtn.addEventListener('click', start);
submitBtn.addEventListener('click', saveScore);

// Start the quiz and call timer function
function start() {
    // Display different section of html and call timer function as well as function to display first question in the array
    intro.setAttribute('style', 'display: none');
    quiz.setAttribute('style', 'display: block');
    countdown.textContent = 'Time:' + timeLeft;
    timer();
    currentQ = 0
    displayQuestion(questions[currentQ++]);
};

// Start Countdown Timer
function timer() {
    // Set up timer to decrement every second if time is greater than or equal to 1 and clear the timer and call game over function if time remaining hits 0
    let timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timeLeft --;
            countdown.textContent = 'Time: ' + timeLeft;
        } else {
            gameEnd.textContent = 'Time Is Up!';
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
};

// Display initial question
function displayQuestion(question) {
    // displays the question and dynamically creates a button for each answer
    questionEl.textContent = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        // checks if answer is correct 
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        // appends answer buttons to page and adds event listener to answer buttons to call check answer function upon a click
        answerBtns.appendChild(button);
        button.addEventListener('click', checkAnswer);
    });
};

// Check answer function to display correct/wrong message and decrement time if needed
function checkAnswer(event) {
    //two variables representing the answer selected and correct status of an answer
    const selectedAnswer = event.target;
    const rightAnswer = selectedAnswer.dataset.correct;
    // depending on the answer message for correct/wrong is displayed
    if (rightAnswer === 'true') {
        wrong.setAttribute('style', 'display: none');
        correct.setAttribute('style', 'display: block');
    } else {
        //removes 10 seconds from remaining time if answer chosen is incorrect
        correct.setAttribute('style', 'display: none');
        wrong.setAttribute('style', 'display: block');
        timeLeft -= 10;
    }
    //call to next question function
    nextQuestion();
};

// function to reset the questions after every answer and display next question
function nextQuestion() {
    while(answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
    if (currentQ < questions.length) {
        displayQuestion(questions[currentQ++]);
    } else {
        //if there are no more questions call game over function
        gameOver();
    }
};

// End of quiz function to display the save score page
function gameOver(){
    //sets score as remaining time
    score = timeLeft;
    quiz.setAttribute('style', 'display: none');
    prompt.setAttribute('style', 'display: none');
    results.setAttribute('style', 'display: block');
    countdown.setAttribute('style', 'display: none');
    gameEnd.setAttribute('style', 'display: block');
};

// Function to save the highscore info and lead to high scores page
function saveScore() {
        localStorage.setItem('highScore', timeLeft);
        localStorage.setItem('initial', initials.value);
        window.location.replace('./scores.html');
}

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
