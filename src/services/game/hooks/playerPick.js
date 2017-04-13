'use strict';

// src/services/game/hooks/playerPick.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {
    // gets gameid from hook and use it to load game document from DB
    return hook.app.service('games').get(hook.id)
    .then((game) => {
      // checks if player is player 1 or 2 and stores pick in db
      if (hook.params.user._id === game.playerIds[0]) {
        playerPickOne = hook.params.playerPick
      } else {
        playerPickTwo = hook.params.playerPick
      }
    }
  };
};
