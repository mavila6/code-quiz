// Query selector variables
const startBtn = document.querySelector('#startBtn');
const intro = document.querySelector('.intro');
const quiz = document.querySelector('.quiz');
const prompt = document.querySelector('.prompt');
const results = document.querySelector('.results');

// Event Listeners
startBtn.addEventListener('click', startQuiz);

// Start the quiz and call timer function
function startQuiz() {
    intro.setAttribute('style', 'display: none');
    quiz.setAttribute('style', 'display: block');
    timer();
}

// Start Countdown Timer
function timer() {

}
