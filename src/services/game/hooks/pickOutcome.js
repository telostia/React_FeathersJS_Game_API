'use strict';

// src/services/game/hooks/pickOutcome.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const playerChoices = ['paper', 'rock', 'lizard', 'spock', 'scissors'];
const result = [' ties with ', ' beats ', ' loses to '];
const bazinga = function(playerPickOne, playerPickTwo) {
    let choice1 = playerChoices.indexOf(playerPickOne),
        choice2 = playerChoices.indexOf(playerPickTwo),
        difference = choice2 - choice1;
    if (difference < 0) {
      difference += playerChoices.length;
    }
    while (difference > 2) {
      difference -= 2;
    }
    console.log(playerPickOne + result[difference] + playerPickTwo);
    return playerPickOne + result[difference] + playerPickTwo;
  }


module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id)
    .then((game) => {



      let playerPickOne = game.playerPickOne,
      playerPickTwo = game.playerPickTwo;

      // const newOutcome = bazinga(playerPickOne, playerPickTwo)
      // console.log(bazinga(playerPickOne, playerPickTwo));

      if (game.playerPickOne == '' || game.playerPickTwo == '') return

      if (game.playerPickOne != '' && game.playerPickTwo != '') {
        // hook.data.outcome = bazinga(playerPickOne, playerPickTwo)
      }

      console.log(hook.data.outcome);
    })
  }
};
