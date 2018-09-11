document.addEventListener("DOMContentLoaded", function(event) {
API.getUsers()
})

//start game
var game = new Phaser.Game(800, 800, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });


  function preload() {
    game.load.image('bullet', 'assets/PNG/Lasers/laserBlue01.png');
    game.load.image('ship', 'assets/PNG/playerShip1_blue.png');
    game.load.image('space', 'assets/Backgrounds/darkPurple.png');
    game.load.image('asteroidBig1', 'assets/PNG/Meteors/meteorBrown_big1.png');
    game.load.image('asteroidBig1', 'assets/PNG/Meteors/meteorBrown_big2.png');
    game.load.image('asteroidBig1', 'assets/PNG/Meteors/meteorBrown_big3.png');
    game.load.image('asteroidBig1', 'assets/PNG/Meteors/meteorBrown_big4.png');
    game.load.image('asteroidBig1', 'assets/PNG/Meteors/meteorBrown_med1.png');
    game.load.image('asteroidBig1', 'assets/PNG/Meteors/meteorBrown_med3.png');
    game.load.image('asteroidBig1', 'assets/PNG/Meteors/meteorBrown_small1.png');
    game.load.image('asteroidBig1', 'assets/PNG/Meteors/meteorBrown_small2.png');
    game.load.image('powerup1', 'assets/PNG/Power-ups/pill_red.png');
    game.load.image('explosion', 'assets/PNG/Meteors/meteorBrown_small2.png');
  }

  var sprite;
  var cursors;
  var bullet;
  var bullets;
  var bulletTime = 0;
  var asteroidBig1;
  var powerUp;

  function create() {
    backgroundCreate()
    bulletsCreate()
    shipCreate()
    asteroidCreate()
    powerUpCreate()
  }

  function update() {
    shipControlsUpdate()
    game.physics.arcade.collide(powerUp, sprite)
    game.physics.arcade.collide(asteroidBig1, bullet)
    
  }

  function render() {

  }
