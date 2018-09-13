document.addEventListener("DOMContentLoaded", function(event) {
API.getUsers()
})

//game dimensions
var gameWidth = 1000
var gameHeight = 1000

//start game
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

  function preload() {
    game.load.image('bullet', 'assets/PNG/Lasers/laserBlue01.png');
    game.load.image('ship', 'assets/PNG/playerShip1_blue.png');
    game.load.image('space', 'assets/Backgrounds/darkPurple.png');
    game.load.image('asteroidBig1', 'assets/PNG/Meteors/meteorBrown_big1.png');
    game.load.image('asteroidBig2', 'assets/PNG/Meteors/meteorBrown_big2.png');
    game.load.image('asteroidBig3', 'assets/PNG/Meteors/meteorBrown_big3.png');
    game.load.image('asteroidBig4', 'assets/PNG/Meteors/meteorBrown_big4.png');
    game.load.image('asteroidMed1', 'assets/PNG/Meteors/meteorBrown_med1.png');
    game.load.image('asteroidMed3', 'assets/PNG/Meteors/meteorBrown_med3.png');
    game.load.image('asteroidsmall1', 'assets/PNG/Meteors/meteorBrown_small1.png');
    game.load.image('asteroidsmall1', 'assets/PNG/Meteors/meteorBrown_small2.png');
    game.load.image('powerup1', 'assets/PNG/Power-ups/pill_red.png');
    game.load.image('explosion', 'assets/PNG/Meteors/meteorBrown_small2.png');
  }

  var sprite;
  var cursors;

  var bullet;
  var bullets;
  var bulletTime = 0;

  var powerUp;

  // var asteroidsBig
  var asteroidsBig1
  var asteroidsBig2
  var asteroidsBig3
  var asteroidsBig4
  var typesAstArray = []
  var asteroidsMed

  var score = 0;
  var scoreString = '';
  var scoreText;

  function youLose() {
    alert("You Lose!")

  }

  function create() {

    backgroundCreate()
    bulletsCreate()
    shipCreate()

    createPoolsBigAsteroids()
    createPoolMedAsteroids()

    bigAsteroidsFlyIn()

    setScore()
    setPause()

  }

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



  function update() {
    shipControlsUpdate()
    addCollisions()
  }

  function addCollisions() {
    game.physics.arcade.collide(powerUp, sprite, hitSprite)

    game.physics.arcade.collide(asteroidsBig1, bullets, shootBigAsteroid)
    game.physics.arcade.collide(asteroidsBig2, bullets, shootBigAsteroid)

    game.physics.arcade.collide(asteroidsMed, bullets, destroyMedAsteroid)
    game.physics.arcade.collide(sprite, asteroidsBig1)
    game.physics.arcade.collide(sprite, asteroidsBig2)
    game.physics.arcade.collide(sprite, asteroidsMed)

    game.physics.arcade.collide(asteroidsBig1, asteroidsBig1)
    game.physics.arcade.collide(asteroidsBig2, asteroidsBig1)
    game.physics.arcade.collide(asteroidsBig2, asteroidsBig2)

    game.physics.arcade.collide(asteroidsBig1, asteroidsMed)
    game.physics.arcade.collide(asteroidsBig2, asteroidsMed)
    game.physics.arcade.collide(asteroidsMed, asteroidsMed)
  }

  function render() {

  }
