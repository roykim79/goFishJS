class RoundResult {
  constructor(asker, target, rank, guessedRight = false) {
    this._asker = asker;
    this._target = target;
    this._rank = rank;
    this._guessedRight = guessedRight;
  }

  asker() {
    return this._asker;
  }

  target() {
    return this._target;
  }

  rank() {
    return this._rank;
  }

  guessedRight() {
    return this._guessedRight;
  }

  setGuessedRight(boolean) {
    this._guessedRight = boolean;
  }

  toString() {
    
  }
}
