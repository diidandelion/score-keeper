const p1 = {
    score: 0,
    button: document.querySelector("#p1btn"),
    display:  document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2btn"),
    display:  document.querySelector('#p2Display')
}

const resetbtn = document.querySelector("#reset");
winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("winner");
            opponent.display.classList.add("loser");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
    player.display.textContent = player.score;
}
p1.button.addEventListener('click', () => {
    updateScores(p1, p2);
})
p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
})

winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelect.value);
    reset();
})

resetbtn.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.classList.remove("winner", 'loser');
        p.display.textContent = 0;
        p.button.disabled = false;
    }
    
}