'use strict';

const assert = require('assert');
const playerPick = require('../../../../src/services/game/hooks/playerPick.js');

describe('game playerPick hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    playerPick()(mockHook);

    assert.ok(mockHook.playerPick);
  });
});
