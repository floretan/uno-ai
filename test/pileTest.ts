
const assert = require('assert');
const Pile = require('../src/Pile');

import {Card} from "../src/Card";

describe('pile test', () => {
  it('is a pile', () => {
    const pile = new Pile(new Card('0', 'red'));

    assert.strictEqual(typeof pile, 'object');
    assert.strictEqual(pile.cards.length, 1);
  });

  it('can play the same card', () => {
    const pile = new Pile(new Card('1', 'red'));

    const card = new Card('1', 'red');
    assert.strictEqual(pile.canPlay({card}), true);
  });

  it('can play card with same symbol', () => {
    const pile = new Pile(new Card('0', 'red'));

    const card = new Card('0', 'green');
    assert.strictEqual(pile.canPlay({card}), true);
  });

  it('can play card with same color', () => {
    const pile = new Pile(new Card('0', 'red'));

    const card = new Card('3', 'red');
    assert.strictEqual(pile.canPlay({card}), true);
  });

  it('cannot play a card with differing color and symbol', () => {
    const pile = new Pile(new Card('0', 'red'));

    const card = new Card('1', 'green');

    assert.strictEqual(pile.canPlay({card}), false);
  });

  it('can always play the "pick" card', () => {
    const pile = new Pile(new Card('0', 'red'));
    const card = new Card('pick');

    assert.strictEqual(pile.canPlay({card}), true);
  });

  it('can always play the "pickplusfour" card', () => {
    const pile = new Pile(new Card('1', 'red'));
    const card = new Card('pickplusfour');

    assert.strictEqual(pile.canPlay({card}), true);
  });

  it('plays cards', () => {
    const pile = new Pile(new Card('0', 'red'));
    const card1 = new Card('5', 'red');
    const card2 = new Card('9', 'red');
    const card3 = new Card('9', 'green');

    assert.strictEqual(pile.cards.length, 1);
    pile.play({card: card1})
    assert.strictEqual(pile.cards.length, 2);
    pile.play({card: card2})
    assert.strictEqual(pile.cards.length, 3);
    pile.play({card: card3})
    assert.strictEqual(pile.cards.length, 4);
  });
});