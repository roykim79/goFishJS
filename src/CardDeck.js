class CardDeck {
  constructor(cards) {
    this._cards = cards || this._createFullDeck();
  }

  cards() {
    return this._cards;
  }

  count() {
    return this.cards().length;
  }

  deal() {
    return this.cards().pop();
  }

  shuffle() {
    const cards = this.cards();

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this._cards = cards;
  }

  _createFullDeck() {
    return CardDeck.RANKS.flatMap(rank => {
      return CardDeck.SUITS.map(suit => new PlayingCard(rank, suit));
    })
  }
}

CardDeck.RANKS = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
CardDeck.SUITS = ['S', 'H', 'C', 'D'];
