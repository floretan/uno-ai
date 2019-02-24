
const assert = require('assert');
const Game = require('../src/Game');
const Deck = require('../src/Deck');


describe('game test', () => {
  it('is a game', () => {
    const deck = new Deck();
    const game = new Game({deck});

    assert.strictEqual(typeof game, 'object');
    assert.strictEqual(game.pile.cards.length, 1);
    assert.strictEqual(game.players.length, 1);
  });

  it('takes turns', () => {
    const deck = new Deck();
    const game = new Game({deck});

    game.doTurn();
    game.doTurn();
  });

  it('continues until winning', () => {
    const deck = new Deck();
    const game = new Game({deck});

    let count = 0;
    while(!game.isFinished()) {
      count++;
      game.doTurn();
    }

    console.log(`Won in ${count} turns`);
  });

  it('two players continue until winning', () => {
    const deck = new Deck();
    const game = new Game({deck, playerCount: 2});

    let count = 0;
    while(!game.isFinished()) {
      count++;
      game.doTurn();
    }

    console.log(`Game won in ${count} turns`);
  });
});