// Global Variables
const scores = document.querySelector('#topScores');
const back = document.querySelector('.back');
const clear = document.querySelector('#clear');
const hs = localStorage.getItem('highScore');
const intl = localStorage.getItem('initial');

// Event listeners
// listens for click on back button and returns user to main page
back.addEventListener('click', e => {
    window.location.replace('./index.html');
});
//listens for click on clear button and clears the generated p elements conatining the saved highscore and initials
clear.addEventListener('click', e => {
    scores.innerHTML = "";
    localStorage.clear();
});
// Dynamically generates a p element containing the initials and saved score and appends it to the html page
function displayScores() {
    const pEl = document.createElement('p');
    pEl.innerText = "- " + intl + " - " + hs;
    pEl.classList.add('leaderboard');
    scores.appendChild(pEl);
}
// calls the display score function
displayScores();

