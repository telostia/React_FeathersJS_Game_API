'use strict';

const pickOutcome = require('./pickOutcome');

const playerPick = require('./playerPick');

const firstEncounter = require('./firstEncounter');

const isGameFull = require('./isGameFull');

const joinGame = require('./joinGame');

const createGame = require('./createGame');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
  ],
  find: [],
  get: [],
  create: [createGame()],

  update: [
    joinGame(),
    // pickOutcome(),
  ],
  patch: [
    joinGame(),
    playerPick(),
    // pickOutcome(),
  ],
  remove: [],
};

exports.after = {
  all: [hooks.populate('players', {
    service: 'users',
    field: 'playerIds',
  }), isGameFull(), firstEncounter(),],
  find: [],
  get: [],
  create: [],
  update: [
    pickOutcome(),
  ],
  patch: [
    pickOutcome(),
  ],
  remove: [],
};
