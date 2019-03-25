
const assert = require('assert');
import {Card} from '../src/Card';

describe('card test', () => {
  it('is a card', () => {
    const card = new Card('0', 'red');

    assert.strictEqual(typeof card, 'object');
  });

  it('has a symbol and a color', () => {
    const card1 = new Card('1', 'red');
    const card2 = new Card('1', 'green');
    assert.strictEqual(card1.getColorName(), 'red');
    assert.strictEqual(card2.getColorName(), 'green');
  });

  it('discerns between cards that can pick a color', () => {
    const card1 = new Card('1', 'red');
    const card2 = new Card('pick');
    assert.strictEqual(card1.allowsPick(), false);
    assert.strictEqual(card2.allowsPick(), true);
  });

  it('cannot create a pick card with a color', () => {
    assert.throws(() => {
      const card2 = new Card('pick', 'red');  
    });
  });
});