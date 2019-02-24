
const assert = require('assert');
const Pile = require('../src/Pile');
const Card = require('../src/Card');


describe('pile test', () => {
  it('is a pile', () => {
    const pile = new Pile({card: new Card({symbol: 0, color: 0})});

    assert.strictEqual(typeof pile, 'object');
    assert.strictEqual(pile.cards.length, 1);
  });

  it('can play the same card', () => {
    const pile = new Pile({card: new Card({symbol: 1, color: 0})});

    const card = new Card({symbol: 1, color: 0});
    assert.strictEqual(pile.canPlay({card}), true);
  });

  it('can play card with same symbol', () => {
    const pile = new Pile({card: new Card({symbol: 0, color: 0})});

    const card = new Card({symbol: 0, color: 1});
    assert.strictEqual(pile.canPlay({card}), true);
  });

  it('can play card with same color', () => {
    const pile = new Pile({card: new Card({symbol: 0, color: 0})});

    const card = new Card({symbol: 3, color: 0});
    assert.strictEqual(pile.canPlay({card}), true);
  });

  it('cannot play a card with differing color and symbol', () => {
    const pile = new Pile({card: new Card({symbol: 0, color: 0})});

    const card = new Card({symbol: 1, color: 1});

    assert.strictEqual(pile.canPlay({card}), false);
  });

  it('can always play the "pick" card', () => {
    const pile = new Pile({card: new Card({symbol: 0, color: 0})});
    const card = new Card({symbol: 'pick'});

    assert.strictEqual(pile.canPlay({card}), true);
  });

  it('can always play the "pickplusfour" card', () => {
    const pile = new Pile({card: new Card({symbol: 0, color: 0})});
    const card = new Card({symbol: 'pickplusfour'});

    assert.strictEqual(pile.canPlay({card}), true);
  });

  it('plays cards', () => {
    const pile = new Pile({card: new Card({symbol: 0, color: 0})});
    const card1 = new Card({symbol: 5, color: 0});
    const card2 = new Card({symbol: 9, color: 0});
    const card3 = new Card({symbol: 9, color: 1});

    assert.strictEqual(pile.cards.length, 1);
    pile.play({card: card1})
    assert.strictEqual(pile.cards.length, 2);
    pile.play({card: card2})
    assert.strictEqual(pile.cards.length, 3);
    pile.play({card: card3})
    assert.strictEqual(pile.cards.length, 4);
  });
});