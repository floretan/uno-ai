import {Card, Color, Symbol} from "./Card";

module.exports = class Pile {

  cards: Card[];
  currentSymbol: Symbol;
  currentColor: Color;

  constructor(card: Card) {
    if (!card) {
      throw new Error('Card must be specified');
    }

    this.cards = [card];
    this.currentSymbol = card.symbol;

    if (typeof card.color !== 'undefined') {
      this.currentColor = card.color;
    }
    else {
      throw new Error("Cannot start a pile with a card that doesn't have a color");
    }
  
    // console.log('Start with', card.toString());
  }

  canPlay({card}): boolean {
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
        // console.log(label, 'plays', card.toString(), 'choose', color);
        this.currentColor = color;
      }
      else {
        this.currentColor = card.color;
        // console.log(label, 'plays', card.toString());
      }
    }
    else {
      console.log(card);
      throw new Error(`Invalid card: ${card.toString()}`);
    }
  }
};