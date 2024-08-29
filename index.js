let runs = 0;
let balls = 0;
let overs = 0;
let wickets = 0;

function updateScore() {
    document.getElementById('runs').querySelector('h1').innerText = runs;
    document.getElementById('balls').querySelector('h1').innerText = balls;
    document.getElementById('overs').querySelector('h1').innerText = overs;
    document.getElementById('outs').querySelector('h1').innerText = wickets;
}

function addRuns(run) {
    runs += run;
    updateScore();
}

function addBall() {
    balls += 1;
    if (balls === 6) {
        balls = 0;
        overs += 1;
    }
    updateScore();
}

function addOut() {
    if (wickets < 10) {
        wickets += 1;
    }
    updateScore();
}
