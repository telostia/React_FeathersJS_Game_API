const playerChoices = ["paper", "rock", "lizard", "spock", "scissors"]
const result = [" ties with ", " beats ", " loses to "]

const gameResult = function(playerPickOne, playerPickTwo) {
    let choice1 = playerChoices.indexOf(playerPickOne), // paper 0
    choice2 = playerChoices.indexOf(playerPickTwo), // lizard 2
    difference = choice2 - choice1; // 2 - 0 = 2
    if(difference < 0) {
        difference += playerChoices.length;
    }
    while(difference > 2) {
        difference -= 2;
    }
    return playerPickOne + result[difference] + playerPickTwo; // paper loses to lizard
