function setScore() {
  scoreString = 'Score : ';
  scoreText = game.add.text(10, 10, scoreString + score, { font: '34px Arial', fill: '#fff' });
}

function setPause() {
  pause_label = game.add.text(gameWidth - 100, 20, 'Pause', { font: '24px Arial', fill: '#fff' });
  pause_label.inputEnabled = true;
  pause_label.events.onInputUp.add(function () {
      // When the pause button is pressed, we pause the game
      if (game.paused === true) {
        game.paused = false;
        intervalID = setInterval(bigAsteroidsFlyIn, 1500)
      } else {
        game.paused = true
        window.clearInterval(intervalID)
      }
  })
}

function setStartGame() {
  introText = game.add.text(game.world.centerX, 400, 'Start Game', { font: "40px Arial", fill: "#ffffff", align: "center" });
  introText.inputEnabled = true;
  introText.anchor.setTo(0.5, 0.5);
  introText.events.onInputUp.add(function () {
    if (intervalID === undefined)
    intervalID = setInterval(bigAsteroidsFlyIn, 1500)
    introText.visible = false;
  })
}

function restartGame() {
    createPoolsBigAsteroids()
    createPoolMedAsteroids()
    bulletsCreate()
    pause_label.inputEnabled = true
    restartText.visible = false;
    score = 0
    intervalID = setInterval(bigAsteroidsFlyIn, 1500)
}

function youLose() {
  alert("You Lose!")
  game.paused = true
  window.clearInterval(intervalID)
  pause_label.inputEnabled = false
  API.addNewScore(score, currentUserID)

  //removing groups and emptying arrays
  asteroidsBig1.removeAll();
  asteroidsBig2.removeAll();
  asteroidsMed.removeAll();
  bullets.removeAll();
  typesAstArray = []

  game.paused = false
  //add restart button
  restartText = game.add.text(game.world.centerX, 400, 'Restart', { font: "40px Arial", fill: "#ffffff", align: "center" });
  restartText.inputEnabled = true;
  restartText.anchor.setTo(0.5, 0.5);
  game.input.onTap.addOnce(restartGame, this)

  //API.getCurrentUser()
}
