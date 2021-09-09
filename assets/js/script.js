// Query selector variables
const startBtn = document.querySelector('#startBtn');
const intro = document.querySelector('.intro');
const quiz = document.querySelector('.quiz');
const prompt = document.querySelector('.prompt');
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
        }
    }, 1000);
};
