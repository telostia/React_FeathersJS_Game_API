'use strict';

const assert = require('assert');
const test = require('../../../../src/services/game/hooks/test.js');

describe('game test hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    test()(mockHook);

    assert.ok(mockHook.test);
  });
});
