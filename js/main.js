let team1Score = 0;
let team2Score = 0;
let team1History = [];
let team2History = [];

function addRunToTeam1(e) {
    team1Score += e;
    team1History.push(e);
    document.querySelector('.team__1__score').innerHTML = team1Score;
    document.querySelector('#team__1__runList').innerHTML = team1History;

}

function addRunToTeam2(d) {
    team2Score += d;
    team2History.push(d);
    document.querySelector('.team__2__score').innerHTML = team2Score;
    document.querySelector('#team__2__runList').innerHTML = team2History;
}

function resetAll() {
    let resetMe = confirm("Are you sure to Reset All\nIf you reset all your saved data will be lost");
    if (resetMe) {
        team1Score = 0;
        team2Score = 0;
        team1History = [];
        team2History = [];
        document.querySelector('.team__1__score').textContent = 0;
        document.querySelector('#team__1__runList').textContent = [];
        document.querySelector('.team__2__score').textContent = 0;
        document.querySelector('#team__2__runList').textContent = [];
    }

}