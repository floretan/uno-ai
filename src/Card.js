
const clc = require('cli-color');

module.exports = class Card {

  constructor({color, symbol}) {
    this.symbol = symbol;
    this.color = color;
  }

  toString() {
    switch (this.color) {
      case 0:
        return clc.whiteBright.bgRed(this.symbol);

      case 1:
        return clc.whiteBright.bgGreen(this.symbol);

      case 2:
        return clc.whiteBright.bgBlue(this.symbol);

      case 3:
        return clc.whiteBright.bgYellow(this.symbol);
    }

    return this.symbol;
  }

  allowsPick() {
    return this.symbol == 'pick' || this.symbol == 'pickplusfour';
  }

  getColorName() {
    switch (this.color) {
      case 0:
        return 'red';

      case 1:
        return 'green';

      case 2:
        return 'blue';

      case 3:
        return 'yellow';
    }
  }
};

