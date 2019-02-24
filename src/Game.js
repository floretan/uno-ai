const Pile = require('./Pile')
const Player = require('./Player');

module.exports = class Game {
  constructor({deck, playerCount = 1, players}) {
    this.deck = deck;
    const startCard = this.deck.draw();
    this.pile = new Pile({card: startCard});
    this.players = [];

    for (let i = 0; i < playerCount; i++) {
      this.players.push(new Player({deck: this.deck, pile: this.pile, label: `Player ${i}`}));
    }

    this.direction = 1;
    this.playerIndex = 0;
  }

  doTurn() {
    //console.log(`Player ${this.playerIndex} playing`)
    const currentPlayer = this.players[this.playerIndex];
    currentPlayer.doTurn();

    if (this.pile.currentSymbol === 'rev') {
      this.direction *= -1;
    }

    if (this.pile.currentSymbol === 'skip') {
      this.playerIndex = (this.players.length + this.playerIndex + this.direction*2) % this.players.length;
    }
    else {
      this.playerIndex = (this.players.length + this.playerIndex + this.direction) % this.players.length;
    }
  }

  isFinished() {
    return this.players.some(player => player.hasWon());
  }
};