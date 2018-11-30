class GameView {
  constructor(game, onPlayRound) {
    this.game = game;
    this.onPlayRound = onPlayRound;
    this.pickedCard = '';
  }

  onSubmit(event) {
    event.preventDefault();
    this.onPlayRound(this.game, event.target.player.value, this.pickedCard);
  }

  cardElement(card) {
    const element = document.createElement('input');

    element.type = 'submit';
    element.name = 'rank';
    element.id = `${card.rank()}${card.suit()}`;
    element.value = card.rank();
    element.onclick = this.onCardClick.bind(this);

    return element;
  }

  onCardClick(e) {
    this.pickedCard = e.target.value;
  }

  handElement(player) {
    const cards = player.hand(),
          element = document.createElement('div');

    cards.forEach(card => {
      element.appendChild(this.cardElement(card))
    });

    return element;
  }

  firstCard() {
    return document.querySelector('input[name=rank]');
  }

  firstRobot() {
    return document.querySelector('.robot-label');
  }

  findPlayerByName(name) {
    return this.game.players().find(player => player.name() === name);
}

  opponentMarkup(opponent) {
    if (opponent) {
      return `
      <div class="player robot">
        <input required type=radio id=${opponent.name()} name=player value=${opponent.name()} />
        <label class=robot-label for=${opponent.name()}>
          <div class=name>${opponent.name()}</div>
          <div>Cards:${opponent.cardCount()}</div>
          <div>Sets:${opponent.sets()}</div>
        </label>
      </div>
      `;
    } else {
      return '';
    }
  }

  playerElement(player) {
    const playerElement = document.createElement('div'),
          playerName = document.createElement('div'),
          sets = document.createElement('div');

    playerName.innerHTML = player.name();
    playerName.className = 'name';
    playerElement.appendChild(playerName);
    sets.innerHTML = `Sets: ${player.sets()}`;
    sets.className = 'sets';
    playerElement.appendChild(sets);
    playerElement.className = 'player human';
    playerElement.appendChild(this.handElement(player));

    return playerElement;
  }

  draw(container) {
    const { game, onPlayRound } = this,
          element = document.createElement('form'),
          resultsView = new RoundResultsView(game.roundResults());

    container.innerHTML = '';
    if (game.gameWinner()) {
      element.innerHTML = `<div>Winner is ${game.gameWinner().name()}</div>`
    } else {
      element.innerHTML += (this.opponentMarkup(game.players()[1]));
      element.innerHTML += (this.opponentMarkup(game.players()[2]));
      element.innerHTML += (this.opponentMarkup(game.players()[3]));
      element.innerHTML += (this.opponentMarkup(game.players()[4]));
      element.appendChild(this.playerElement(game.players()[0]));

      resultsView.draw(element);
      element.onsubmit = this.onSubmit.bind(this);
    }
    container.appendChild(element);

    return element;
  }
}
