
module.exports = class Player {
  constructor({deck, pile, label = ''}) {
    this.label = label;
    this.hand = [];
    this.deck = deck;
    this.pile = pile;

    for (let i = 0; i < 7; i++) {
      this.hand.push(this.deck.draw());
    }
  }

  canPlay() {
    for (let card of this.hand) {
      if (this.pile.canPlay({card})) {
        return true;
      }
    }

    return false;
  }

  play() {
    // Very simple approach, play the first playable card.
    for (let card of this.hand) {
      if (this.pile.canPlay({card})) {
        const playedCard = this.hand.splice(this.hand.indexOf(card), 1).pop();
        let color;

        if (playedCard.allowsPick()) {

          const coloredCard = this.hand.find(c => typeof c.color !== 'undefined')
          if (coloredCard) {
            // Pick the color existing card on hand.
            color = coloredCard.color;
          }
          else {
            // Pick a random color.
            color = Math.floor(Math.random() * 4);
          }
        }

        this.pile.play({card: playedCard, color, label: this.label})

        break;
      }
    }
  }

  draw() {
    if (this.deck.cards.length === 0) {
      this.deck.cards.push(...this.pile.cards.splice(0, this.pile.cards.length - 1));
      this.deck.shuffle();
    }

    const newCard = this.deck.draw();
    this.hand.push(newCard);
  }

  doTurn() {
    // @TODO: handle adding up the penalties.
    if (this.pile.currentSymbol === '+2') {
      this.draw();
      this.draw();
    }
    if (this.pile.currentSymbol === 'pickplusfour') {
      this.draw();
      this.draw();
      this.draw();
      this.draw();
    }

    if (this.canPlay()) {
      this.play();
    }
    else {
      console.log(this.label, 'cannot play (', this.hand.map(card => card.toString()).join('|'), '), drawing');
      this.draw();
      if (this.canPlay()) {
        this.play();
      }
    }
  }

  hasWon() {
    return this.hand.length === 0;
  }
};