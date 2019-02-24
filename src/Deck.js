
const Card = require('./Card');

module.exports = class Deck {
  constructor() {
    this.cards = [];

    const colors = [0, 1, 2, 3];

    for (let color of colors) {
      // Add a single zero for each color.
      this.cards.push(new Card({color, symbol: '0'}))

      for (let symbol = 1; symbol < 10; symbol++) {
        this.cards.push(new Card({color, symbol: symbol.toString()}))
        this.cards.push(new Card({color, symbol: symbol.toString()}))
      }

      for (let symbol of ['skip', 'rev', '+2']) {
        this.cards.push(new Card({color, symbol: symbol.toString()}))
        this.cards.push(new Card({color, symbol: symbol.toString()}))
      }
    }

    for (let symbol of ['pick', 'pickplusfour']) {
      this.cards.push(new Card({symbol: symbol.toString()}))
      this.cards.push(new Card({symbol: symbol.toString()}))
      this.cards.push(new Card({symbol: symbol.toString()}))
      this.cards.push(new Card({symbol: symbol.toString()}))
    }

    this.shuffle();
  }

  shuffle() {
    this.cards = this.cards.sort((a, b) => {
      if (Math.random() > 0.5) {
        return -1;
      }
      else {
        return 1
      }
    });
  }

  draw() {
    return this.cards.pop();
  }
};