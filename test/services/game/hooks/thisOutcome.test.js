'use strict';

const assert = require('assert');
const thisOutcome = require('../../../../src/services/game/hooks/thisOutcome.js');

describe('game thisOutcome hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    thisOutcome()(mockHook);

    assert.ok(mockHook.thisOutcome);
  });
});
