
const assert = require('assert');
const Game = require('../src/Game');
const Player = require('../src/Player');

describe('game test', () => {
  it('is a game', () => {
    const game = new Game({
      players: [new Player({label: 'Player 1'})]
    });

    assert.strictEqual(typeof game, 'object');
    assert.strictEqual(game.pile.cards.length, 1);
    assert.strictEqual(game.players.length, 1);

    // Player gets 7 cards.
    assert.strictEqual(game.players[0].hand.length, 7);
  });

  it('takes turns', () => {
    const game = new Game({
      players: [
        new Player({label: 'Player 1'}),
        new Player({label: 'Player 2'}),
      ],
    });

    game.doTurn();
    game.doTurn();
  });

  it('continues until winning', () => {
    const game = new Game({
      players: [new Player({label: 'Player 1'})]
    });

    let count = 0;
    while(!game.isFinished()) {
      count++;
      game.doTurn();
    }

    console.log(`Won in ${count} turns`);
  });

  it('two players continue until winning', () => {
    const game = new Game({
      players: [
        new Player({label: 'Player 1'}),
        new Player({label: 'Player 2'}),
      ],
    });

    let count = 0;
    while(!game.isFinished()) {
      count++;
      game.doTurn();
    }

    console.log(`Game won in ${count} turns`);
  });
});