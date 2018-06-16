let team1Score = 0;
let team2Score = 0;
let team1History = []; // array to keep track of the run list of team 1
let team2History = []; // array to keep track of the run list of team 2

function addRunToTeam1(e) { // this function adds runs to team 1
    team1Score += e;
    team1History.push(e);
    document.querySelector('.team__1__score').innerHTML = team1Score;
    /* document.querySelector('#team__1__runList').innerHTML = team1History;
     */
}

function addRunToTeam2(d) {  // this function adds runs to team 2
    team2Score += d;
    team2History.push(d);
    document.querySelector('.team__2__score').innerHTML = team2Score;
    /* document.querySelector('#team__2__runList').innerHTML = team2History; */
}

function resetAll() {   // reset all the data that are stored in the variable and array
    let resetMe = confirm("Are you sure to Reset All\nIf you reset all your saved data will be lost"); //force user to confirm whether he wants to reset all the value
    if (resetMe) {  // if the above confirmation return ture then it will reset all the information stored in the variables
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

function scoreHistory() { // this function's task is to print the runlist stored in the respective array.
    for (const run1 of team1History) {
        document.querySelector('#team__1__runList').innerHTML = run1;
        console.log(run1); // this console.log line is added to check if the function is working or not...
    }
    for (const run2 of team2History) {
        document.querySelector('#team__2__runList').innerHTML = run2;
        console.log(run2); // this console.log line is added to check if the function is working or not...
    }
}