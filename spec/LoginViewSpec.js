describe('LoginView', () => {
  describe('form submit', () => {
    it('calls passed in function with logged in player name and bot count', () => {
      let calledWith
      const onLogin = (name, botCount) => {
        calledWith = { name, botCount }
      }
      const view = new LoginView(onLogin)
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
      view.nameInput().value = 'Roy'
      view.botCountInput().value = 2
      view.submitButton().click()

      expect(calledWith).toEqual({name: 'Roy', botCount: 2})
      container.remove()
    })
  })
})
