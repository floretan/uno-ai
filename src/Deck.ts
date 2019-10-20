import {Card, Color, Symbol} from "./Card";

export class Deck {
  cards: Card[];

  constructor() {
    this.cards = [];
    
    const colors: Color[] = ['red', 'green', 'blue', 'yellow'];

    for (let color of colors) {
      // Add a single zero for each color.
      this.cards.push(new Card('0', color))

      // Add two cards for each color.
      for (let i in [1, 2]) {
        this.cards.push(new Card('1', color));
        this.cards.push(new Card('2', color));
        this.cards.push(new Card('3', color));
        this.cards.push(new Card('4', color));
        this.cards.push(new Card('5', color));
        this.cards.push(new Card('6', color));
        this.cards.push(new Card('7', color));
        this.cards.push(new Card('8', color));
        this.cards.push(new Card('9', color));
        this.cards.push(new Card('skip', color));
        this.cards.push(new Card('rev', color));
        this.cards.push(new Card('plus2', color));
      }
    }

    for (let i in [1, 2]) {
      this.cards.push(new Card('pick'));
      this.cards.push(new Card('pickplusfour'));
    }

    this.shuffle();
  }

  shuffle(): void {
    this.cards = this.cards.sort((a, b) => {
      if (Math.random() > 0.5) {
        return -1;
      }
      else {
        return 1
      }
    });
  }

  draw(): Card {
    const card = this.cards.pop();
    if (card) {
      return card;
    }

    throw "Deck is empty";
  }
};