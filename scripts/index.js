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

  var asteroidsBig
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
    // powerUpCreate()
    addAsteroidsBig()

    //  The score
    scoreString = 'Score : ';
    scoreText = game.add.text(10, 10, scoreString + score, { font: '34px Arial', fill: '#fff' });

    // pause
    // Create a label to use as a button
    pause_label = game.add.text(gameWidth - 100, 20, 'Pause', { font: '24px Arial', fill: '#fff' });
    pause_label.inputEnabled = true;
    pause_label.events.onInputUp.add(function () {
        // When the paus button is pressed, we pause the game
        if (game.paused === true) {
          game.paused = false
        } else {
          game.paused = true
        }
    })
  }


  function update() {
    shipControlsUpdate()
    game.physics.arcade.collide(powerUp, sprite, hitSprite)
    game.physics.arcade.collide(asteroidsBig, bullets, shootBigAsteroid)
    game.physics.arcade.collide(asteroidsMed, bullets, destroyMedAsteroid)
    game.physics.arcade.collide(sprite, asteroidsBig)
    game.physics.arcade.collide(sprite, asteroidsMed)
    game.physics.arcade.collide(asteroidsBig, asteroidsBig)
    game.physics.arcade.collide(asteroidsBig, asteroidsMed)

    // game.physics.arcade.collide(asteroidsMed, asteroidsMed)

  }

  function render() {

  }
