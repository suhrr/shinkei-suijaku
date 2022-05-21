import { CARD_TYPE } from 'core/types/CardType';

export default class Card {
  static readonly MIN_NUMBER: number = 1;
  static readonly MAX_NUMBER: number = 13;

  readonly type: CARD_TYPE;
  readonly number: number;
  public isFornt: boolean;

  constructor(type: CARD_TYPE, number: number, isFront: boolean = true) {
    if (Card.MIN_NUMBER > number || Card.MAX_NUMBER < number) {
      throw 'Number is invalid.';
    }

    this.type = type;
    this.number = number;
    this.isFornt = isFront;
  }

  public equal(other: Card) {
    return this.number == other.number && this.type == other.type;
  }

  public equalNumber(other: Card) {
    return this.number == other.number;
  }

  public faceUp() {
    return new Card(this.type, this.number, true);
  }

  public faceDown() {
    return new Card(this.type, this.number, false);
  }
}