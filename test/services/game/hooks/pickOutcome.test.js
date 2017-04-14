'use strict';

const assert = require('assert');
const pickOutcome = require('../../../../src/services/game/hooks/pickOutcome.js');

describe('game pickOutcome hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    pickOutcome()(mockHook);

    assert.ok(mockHook.pickOutcome);
  });
});
