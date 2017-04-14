const playerChoices = ['paper', 'rock', 'lizard', 'spock', 'scissors'];
const result = [' ties with ', ' beats ', ' loses to '];

module.exports = function bazinga(playerPickOne, playerPickTwo) {
    let choice1 = playerChoices.indexOf(playerPickOne),
        choice2 = playerChoices.indexOf(playerPickTwo),
        difference = choice2 - choice1;
    if (difference < 0) {
      difference += playerChoices.length;
    }
    while (difference > 2) {
      difference -= 2;
    }
    return playerPickOne + result[difference] + playerPickTwo;
  }
