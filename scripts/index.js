  // game dimensions
  var gameWidth = 1000
  var gameHeight = 1000

  //create game template
  var game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS, 'game-screen', { preload: preload, create: create, update: update, render: render });

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
      // Music and SFX
      game.load.audio('main-music', 'assets/Sounds/Music/Off_Limits.wav')
      game.load.audio('laserSfx', 'assets/Sounds/Bonus/sfx_laser2.ogg') 
      game.load.audio('lostSfx', 'assets/Sounds/Bonus/sfx_lose.ogg') 
      game.load.audio('explosionSfx', 'assets/Sounds/Bonus/sfx_lose.ogg')

      game.load.spritesheet('explodes', 'assets/Explosions/bigpuff.png', 250, 250, 8);
    }

    
    

    var bullet;
    var bullets;
    var bulletTime = 0;

    var sprite; //thisn is the ship. Loaded after bullets due to layering
    var cursors;
    var powerUp;

    // var asteroidsBig
    var asteroidsBig1
    var asteroidsBig2
    var typesAstArray = []
    var asteroidsMed
    var maxAsteroidVelocity = 1;

    var score = 0;
    var scoreString = '';
    var scoreText;

    // var explode
    var explosions
    var explodes

    var loseText
    var intervalID

    //music
    var music;
    var laserSFX;
    var lostSFX;
    var explosionSFX;

    function create() {

      backgroundCreate()
      bulletsCreate()
      shipCreate()

      createPoolsBigAsteroids()
      createPoolMedAsteroids()

      setStartGame()
      setScore()
      setPause()
      gameMusicPlay()
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
      game.physics.arcade.collide(sprite, asteroidsBig1, youLose)
      game.physics.arcade.collide(sprite, asteroidsBig2, youLose)
      game.physics.arcade.collide(sprite, asteroidsMed, youLose)

      game.physics.arcade.collide(asteroidsBig1, asteroidsBig1)
      game.physics.arcade.collide(asteroidsBig2, asteroidsBig1)
      game.physics.arcade.collide(asteroidsBig2, asteroidsBig2)

      game.physics.arcade.collide(asteroidsBig1, asteroidsMed)
      game.physics.arcade.collide(asteroidsBig2, asteroidsMed)
      game.physics.arcade.collide(asteroidsMed, asteroidsMed)
    }

    function render() {
    }

  // })
