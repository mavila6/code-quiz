const scores = document.querySelector('#topScores');
const back = document.querySelector('.back');
const clear = document.querySelector('#clear');
const hs = localStorage.getItem('highScore');
const intl = localStorage.getItem('initial');

// Event listeners
back.addEventListener('click', e => {
    window.location.replace('./index.html');
});

clear.addEventListener('click', e => {
    scores.innerHTML = "";
    localStorage.clear();
});

function displayScores() {
    const pEl = document.createElement('p');
    pEl.innerText = "- " + intl + " - " + hs;
    pEl.classList.add('leaderboard');
    scores.appendChild(pEl);
    console.log('pEl');
}

displayScores();

