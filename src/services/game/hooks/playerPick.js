'use strict';

// src/services/game/hooks/playerPick.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
      return function(hook) {
            console.log(hook.data.playerPick);




            // gets gameId from hook and use it to load game document from DB
            return hook.app.service('games').get(hook.id)
            .then((game) => {
                  console.log(game.playerIds[0]);
                  console.log(hook.params.user._id);
                  console.log(hook.params.user._id === game.playerIds[1]);
                  // checks if player is player 1 or 2 and stores pick in db

                  if (hook.params.user._id === game.playerIds[0]) {
                    hook.data.playerPickOne = hook.data.playerPick
                  }

                  if (hook.params.user._id === game.playerIds[1]) {
                    hook.data.playerPickTwo = hook.data.playerPick
                  }
                })
          }
    }
