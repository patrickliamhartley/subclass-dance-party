var playerTwo = function (top, left, up, right, down, atk, char) {
  subZero.call(this, top, left, up, right, down, atk, char);
  this.standingGif = 'projectp2/standing.gif';
  this.walkingGif = 'projectp2/walking.gif';
  this.attackingGif = 'projectp2/attacking.gif';
  this.setPlayer();

  // this.newGame = this.newGame.bind(this);
  


};
playerTwo.prototype = Object.create(subZero.prototype);
playerTwo.prototype.constructor = playerTwo;