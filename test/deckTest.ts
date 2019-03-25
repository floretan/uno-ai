
const assert = require('assert');
const Deck = require('../src/Deck');


describe('deck test', () => {
  it('is a deck', () => {
    const deck = new Deck();

    assert.strictEqual(typeof deck, 'object');
  });

  it('draws a card', () => {
    const deck = new Deck();
    const card = deck.draw();
    assert.strictEqual(typeof card, 'object');
  });

});