
module.exports = class Pile {
  constructor({card}) {
    if (!card) {
      throw new Error('Card must be specified');
    }

    this.cards = [card];
    this.currentSymbol = card.symbol;
    this.currentColor = card.color;
    console.log('Start with', card.toString());
  }

  canPlay({card}) {
    if (this.currentSymbol === card.symbol
      || this.currentColor === card.color
      || card.allowsPick()) {
      return true;
    }
    else {
      return false;
    }
  }

  play({card, color, label = 'Play'}) {
    if (this.canPlay({card})) {
      this.cards.push(card);
      this.currentSymbol = card.symbol;

      if (card.allowsPick()) {
        if (typeof color == 'undefined') {
          throw new Error(`Must specify color when playing ${card.toString()}`);
        }
        console.log(label, 'plays', card.toString(), 'choose', color);
        this.currentColor = color;
      }
      else {
        this.currentColor = card.color;
        console.log(label, 'plays', card.toString());
      }
    }
    else {
      console.log(card, this.currentCard)
      throw new Error(`Invalid card: ${card.toString()}`);
    }
  }
};