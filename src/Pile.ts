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

  canPlay(card: Card): boolean {
    if (this.currentSymbol === card.symbol
      || this.currentColor === card.color
      || card.allowsPick()) {
      return true;
    }
    else {
      return false;
    }
  }

  play(card: Card, color?: Color, label: string = 'Play') {
    if (this.canPlay(card)) {
      this.cards.push(card);
      this.currentSymbol = card.symbol;

      if (!card.allowsPick()) {
        // This second comparison is only needed for TypeScript
        if (card.color !== undefined) {
          this.currentColor = card.color;
        }
      }
      else {
        if (typeof color == 'undefined') {
          throw new Error(`Must specify color when playing ${card.toString()}`);
        }
        else {
          this.currentColor = color;
        }
      }
    }
    else {
      console.log(card);
      throw new Error(`Invalid card: ${card.toString()}`);
    }
  }
};