function createAsteroid(counter, x, y, xs, ys) {
  const asteroid = asteroids.create(x, y, 'asteroidBig1')
  asteroid.name = 'asteroidBig-' + counter;
  asteroid.immovable = false;
  game.physics.enable(asteroid, Phaser.Physics.ARCADE)
  game.physics.arcade.enable([asteroid])
  asteroid.body.velocity.setTo(xs, ys);
  asteroid.body.bounce.set(1);
  asteroid.body.collideWorldBounds = true

//makes asteroid able to collide
  asteroid.body.onCollide = new Phaser.Signal();
  asteroid.body.onCollide.add(shotDown, this);
}


  
function addAsteroids(number) {
  let counter = 0
  asteroids = game.add.group();
  asteroids.enableBody = true;
  asteroids.physicsBodyType = Phaser.Physics.ARCADE;
  let intervalID = setInterval(function () {
    //quadrantCoefficent used to randomly determine which screen asteroid appears
    edgeCoefficent = Math.floor(Math.random()*4 + 1)
    switch (edgeCoefficent) {
      case 1:
        x = 0;
        y = Math.floor(Math.random() * 800);
        break;
      case 2:
        x = Math.floor(Math.random() * 800);
        y = 0
        break;
      case 3:
        x = 800
        y = Math.floor(Math.random() * 800);
        break;
      case 4:
        x = Math.floor(Math.random() * 800);
        y = 800
        break;
    }
    xs = Math.floor(Math.random() * 200)
    ys = Math.floor(Math.random() * 200)
    createAsteroid(counter, x, y, xs, ys)
    ++counter
    if (counter === number) {
      window.clearInterval(intervalID)
    }
  }, 1500)
}


function shotDown(obj1, obj2) {
  obj2.body.velocity.setTo(0,0)
    // obj2.loadTexture('explosion', 0)
    
    asteroidSmall1 = game.add.sprite(obj1.body.x,obj1.body.y, 'explosion')
    game.physics.enable(asteroidSmall1, Phaser.Physics.ARCADE)
    asteroidSmall1.body.velocity.setTo(400,200);
    
  destroySprite(obj1);
  destroySprite(obj2);
}
