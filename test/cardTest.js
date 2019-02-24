
const assert = require('assert');
const Card = require('../src/Card');


describe('card test', () => {
  it('is a card', () => {
    const card = new Card({symbol: 0, color: 0});

    assert.strictEqual(typeof card, 'object');
  });

  it('has a symbol and a color', () => {
    const card1 = new Card({symbol: 1, color: 0});
    const card2 = new Card({symbol: 1, color: 1});
    assert.strictEqual(card1.getColorName(), 'red');
    assert.strictEqual(card2.getColorName(), 'green');
  });

  it('discerns between cards that can pick a color', () => {
    const card1 = new Card({symbol: 1, color: 0});
    const card2 = new Card({symbol: 'pick', color: 1});
    assert.strictEqual(card1.allowsPick(), false);
    assert.strictEqual(card2.allowsPick(), true);
  })
});