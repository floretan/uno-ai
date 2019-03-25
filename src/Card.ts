
const clc = require('cli-color');

export type Color = 'red' | 'green' | 'blue' | 'yellow';
export type Symbol =  '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'plus2' | 'skip' | 'rev' | 'pick' | 'pickplusfour'

export class Card {
  readonly symbol: Symbol;
  readonly color?: Color;

  constructor(symbol: Symbol, color?: Color) {
    this.symbol = symbol;

    if (this.allowsPick() && color) {
      throw new Error('Pick color cards cannot have a color');
    }
    
    this.color = color;
  }

  toString(): string {
    switch (this.color) {
      case 'red':
        return clc.whiteBright.bgRed(this.symbol);

      case 'green':
        return clc.whiteBright.bgGreen(this.symbol);

      case 'blue':
        return clc.whiteBright.bgBlue(this.symbol);

      case 'yellow':
        return clc.whiteBright.bgYellow(this.symbol);

      case undefined:
        return this.symbol.toString();
    }
  }

  getSymbolInteger(): number {
    const lookup = {
      '0': 0, 
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      'plus2': 10,
      'skip': 11,
      'rev': 12,
      'pick': 13,
      'pickplusfour': 14,
    };

    return lookup[this.symbol];
  }

  allowsPick() {
    return this.symbol == 'pick' || this.symbol == 'pickplusfour';
  }

  getColorName() {
    switch (this.color) {
      case 'red':
        return 'red';

      case 'green':
        return 'green';

      case 'blue':
        return 'blue';

      case 'yellow':
        return 'yellow';
    }
  }
};

