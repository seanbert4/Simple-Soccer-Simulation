function offence(score) {
    var random = Math.random;
    while (random >= .5) {
        score++;
        random = Math.random;
    }
    return score;
}
var teamA = offence(0);
var teamB = offence(0);
if (teamA > teamB) {
    console.log("Team A wins, " + teamA + "to " + teamB + ".");
} else if (teamA < teamB) {
    console.log("Team B wins, " + teamB + "to " + teamA + ".");
} else {
    console.log("The game is tied, " + teamA + " to " + teamB + ".");
}
