/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit {Clubs, Diamonds, Hearts, Spades};
export enum CardNumber {Ace, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King};

type Card = [Suit, CardNumber]

function setupCards(): Card[] {
  let cards: Card[] = [];
  for(let i = 0; i < Object.keys(Suit).length / 2; i++)
    for(let j = 0; j < Object.keys(CardNumber).length / 2; j++) {
      cards.push([i, j]);
    }

  return cards;
}

export class Dealer {
  cards: Card[]=[];

  constructor(){
    this.cards = setupCards();
    shuffleArray(this.cards);
  }

  dealHand(num: number): Card[] {
    if (num > this.getLength()) throw new Error('Not enough cards left');
    if (num < 0) throw new Error('Please give me your cards');

    return this.cards.splice(this.getLength() - num, num);
  }
  
  readCard(card: Card) : string {
    let [s, c] = card;
    return `${CardNumber[c]} of ${Suit[s]}`;
  }

  getLength() : number {
    return this.cards.length;
  }
}

//let d = new Dealer()

//console.log(d.cards);