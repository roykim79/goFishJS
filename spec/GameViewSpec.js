describe('GameViewSpec', () => {
  describe('form submit', () => {
    it('call passed in function with game, player, and rank', () => {
      let calledWith;
      const players = [fixtures.humanPlayer, fixtures.robotPlayer];
      const game = new GoFish(players)
      game.start();
      const onPlayRound = (game, player, rank) => {
        calledWith = {game, player, rank}
      }
      const view = new GameView(game, onPlayRound)
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
      view.firstRobot().click();
      view.firstCard().click()
      expect(calledWith).toEqual({game: game, player: fixtures.robotPlayer.name(), rank: view.firstCard().value})
      container.remove()
    })
  })
})
