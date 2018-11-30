class LoginView {
  constructor(onLogin) {
    this.onLogin = onLogin
  }

  onSubmit(event) {
    event.preventDefault();
    this.onLogin(event.target.name.value, Number(event.target.bot_count.value))
  }

  nameInput() {
    return document.getElementById('name')
  }

  botCountInput() {
    return document.getElementById('bot_count')
  }

  submitButton() {
    return document.getElementById('submit')
  }

  draw(container) {
    const formMarkup = `
      <form class="user-form">
        <label for="name">Name</label>
        <input type="text" id="name" value=Roy />
        <label for="bot_count">Number of Bots</label>
        <input type="number" id="bot_count" value=3 />

        <input id="submit" type="submit" value="Login">
      </form>
    `;

    const element = document.createElement('div')
    element.innerHTML = formMarkup
    element.onsubmit = this.onSubmit.bind(this)
    container.appendChild(element)
    return element
  }
}
