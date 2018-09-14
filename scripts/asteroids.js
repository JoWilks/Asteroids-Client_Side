function createPoolsBigAsteroids() {
    asteroidsBig1 = game.add.group();
    asteroidsBig1.enableBody = true;
    asteroidsBig1.createMultiple(50, 'asteroidBig1')
    typesAstArray.push(asteroidsBig1)

    asteroidsBig2 = game.add.group();
    asteroidsBig2.enableBody = true;
    asteroidsBig2.createMultiple(50, 'asteroidBig2')
    typesAstArray.push(asteroidsBig2)
}

function createPoolMedAsteroids() {
  asteroidsMed = game.add.group();
  asteroidsMed.enableBody = true;
  asteroidsMed.createMultiple(300, 'asteroidMed1')
}

function getAsteroidfromGroup(group, x, y, xs, ys) {
  asteroidBig = group.getFirstExists(false);
  asteroidBig.reset(x, y)
  game.physics.enable(asteroidBig, Phaser.Physics.ARCADE)
  // game.physics.arcade.enable([asteroidBig])
  asteroidBig.body.velocity.setTo(xs, ys);
  asteroidBig.body.bounce.set(1);
  asteroidBig.anchor.set(0.5, 0.5);
  asteroidBig.body.angularVelocity = (Math.random() * maxAsteroidVelocity) + 50

//makes asteroidBig able to collide
  asteroidBig.body.collideWorldBounds = true
  asteroidBig.body.onCollide = new Phaser.Signal();
}


function bigAsteroidsFlyIn() {
  //quadrantCoefficent used to randomly determine which screen asteroid appears
      let edgeCoefficent = Math.floor(Math.random()*4 + 1)
      switch (edgeCoefficent) {
        case 1:
          x = 0;
          y = Math.floor(Math.random() * gameHeight);
          break;
        case 2:
          x = Math.floor(Math.random() * gameWidth);
          y = 0
          break;
        case 3:
          x = gameWidth
          y = Math.floor(Math.random() * gameHeight);
          break;
        case 4:
          x = Math.floor(Math.random() * gameWidth);
          y = gameHeight
          break;
      }
      let xs = Math.floor(Math.random() * 200) + maxAsteroidVelocity
      let ys = Math.floor(Math.random() * 200) + maxAsteroidVelocity
      coinFlip = Math.floor(Math.random()*2)
      getAsteroidfromGroup(typesAstArray[coinFlip], x, y, xs, ys)
  }


function convertBigtoMediumAsteroids(x, y) {
  asteroidHitSFX()
  for (let counter = 0; counter < 3; counter++) {
  asteroidMed = asteroidsMed.getFirstExists(false);
    let xs = Math.floor(Math.random() * 200)
    let ys = Math.floor(Math.random() * 200)

    asteroidMed.reset(x, y)
    asteroidMed.body.velocity.setTo(xs, ys);
    asteroidMed.body.bounce.set(1);
    asteroidMed.anchor.set(0.5, 0.5);
    asteroidMed.body.angularVelocity = Math.random()*200
    asteroidMed.body.collideWorldBounds = true
    asteroidMed.body.onCollide = new Phaser.Signal();
  }
}
