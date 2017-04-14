'use strict';

// src/services/game/hooks/pickOutcome.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const gameLogic = require('../gameLogic')
const defaults = {};
console.log('hello from pickOutcome');



module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id)

    .then((game) => {
      console.log('only one player picked ' + (game.playerPickOne == '' || game.playerPickTwo == ''));

      if (game.playerPickOne == '' || game.playerPickTwo == '') return


      if (game.playerPickOne != '' && game.playerPickTwo != '') {
        gameLogic(game.playerPickOne, game.playerPickTwo)

        // console.log('p2 pick ' + game.playerPickTwo);
        // console.log('p1 pick ' + game.playerPickOne);
      }

    })
  }
};
