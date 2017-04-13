'use strict';

// src/services/game/hooks/playerPick.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id)
    .then((game) => {
      if (JSON.stringify(hook.params.user._id) === JSON.stringify(game.playerIds[0])) {
        console.log('does the first if run?');
        hook.data.playerPickOne = hook.data.playerPick;
        return
      } else {
        console.log('does the second if get run?');
        hook.data.playerPickTwo = hook.data.playerPick;
        return
      }
    })
  }
}
