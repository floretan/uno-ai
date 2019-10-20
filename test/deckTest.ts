
const assert = require('assert');
import { Deck } from "../src/Deck";

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

  it('throws an error if card cannot be drawn', () => {
    const deck = new Deck();
    deck.cards = [];
    assert.throws(() => {
      deck.draw()
    })
  });
});