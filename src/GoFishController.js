class GoFishController {
  container() {
    return document.getElementById('main')
  }

  login() {
    const view = new LoginView(this.startGame.bind(this))
    view.draw(this.container())
  }

  startGame(name, botCount) {
    const game = GoFish.createGame(name, botCount)
    game.start()
    const view = new GameView(game, this.playRound.bind(this))
    view.draw(this.container())
  }

  playRound(game, player, rank) {
    game.playTurn(player, rank)
    if (game.gameWinner()) new GameOverView(game).draw(this.container());
    const view = new GameView(game, this.playRound.bind(this))
    view.draw(this.container())
  }
}

window.controller = new GoFishController();
window.onload = controller.login.bind(window.controller)
