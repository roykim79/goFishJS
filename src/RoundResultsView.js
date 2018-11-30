class RoundResultsView {
  constructor(results) {
    this._results = results;
  }

  results() {
    return this._results;
  }

  resultMarkup(result) {
    let resultString = `${result.asker().name()} asked ${result.target().name()} for ${result.rank()}`;

    if (result.guessedRight()) {
      resultString += `${result.asker().name()} guessed right`;
    } else {
      resultString += `${result.asker().name()} went fishing`;
    }

    return resultString;
  }

  draw(container) {
    const element = document.createElement('ul');

    this.results().forEach(result => {
      const resultElement = document.createElement('li');
      resultElement.innerHTML = this.resultMarkup(result)
      element.appendChild(resultElement);
    })

    container.appendChild(element)
    return element;
  }
}
