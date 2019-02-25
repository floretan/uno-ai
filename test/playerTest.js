
const assert = require('assert');
const Player = require('../src/Player');
const Deck = require('../src/Deck');
const Pile = require('../src/Pile');
const Card = require('../src/Card');


describe('player test', () => {
  it('player is initialized', () => {
    const deck = new Deck();
    const pile = new Pile({card: new Card({symbol: 0, color: 0})});
    const player = new Player({deck, pile, label: 'Player 1'});

    assert.strictEqual(typeof player, 'object');
    assert.strictEqual(player.hand.length, 0);

    player.draw();
    player.draw();

    assert.strictEqual(player.hand.length, 2);
  });

  it('player can play', () => {
    const deck = new Deck();
    const pile = new Pile({card: new Card({symbol: 0, color: 0})});
    const player = new Player({deck, pile, label: 'Player 1'});

    // Add a card that the player can play.
    player.hand.push(new Card({symbol: 0, color: 1}));

    assert.strictEqual(player.canPlay(), true);

    player.doTurn();
    assert.strictEqual(player.hand.length, 0);
  });

  it('player cannot play and draws a card', () => {
    const deck = new Deck();
    const pile = new Pile({card: new Card({symbol: 0, color: 0})});
    const player = new Player({deck, pile, label: 'Player 1'});

    // Set the card in the deck.
    deck.cards.push(new Card({symbol: 4, color: 1}));

    // Add a card that the player cannot play.
    player.hand.length = 0;
    player.hand.push(new Card({symbol: 1, color: 1}));
    player.hand.push(new Card({symbol: 2, color: 1}));
    player.hand.push(new Card({symbol: 3, color: 1}));

    assert.strictEqual(player.canPlay(), false);
    player.doTurn();
    assert.strictEqual(player.hand.length, 4);
  });

  it('detects winning', () => {
    const deck = new Deck();
    const pile = new Pile({card: new Card({symbol: 0, color: 0})});
    const player = new Player({deck, pile, label: 'Player 1'});

    // Add a card that the player can play.
    player.hand.push(new Card({symbol: 0, color: 1}));

    assert.strictEqual(player.hasWon(), false);
    player.doTurn();
    assert.strictEqual(player.hasWon(), true);
  });
});