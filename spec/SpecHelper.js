beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    }
  });
});

const fixtures = {
  fourAces: ['S', 'H', 'C', 'D'].map(suit => new PlayingCard('A', suit)),
  twoAces: ['S', 'H'].map(suit => new PlayingCard('A', suit)),
  twoKings: ['S', 'H'].map(suit => new PlayingCard('K', suit)),
  humanPlayer: new Player('Roy'),
  robotPlayer: new Player('Robot', true)
}
