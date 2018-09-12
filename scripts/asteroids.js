function createAsteroid(group, type, counter, x, y, xs, ys) {
  const asteroid = group.create(x, y, type)
  asteroid.name = type + counter;
  asteroid.immovable = false;
  game.physics.enable(asteroid, Phaser.Physics.ARCADE)
  // game.physics.arcade.enable([asteroid])
  asteroid.body.velocity.setTo(xs, ys);
  asteroid.body.bounce.set(1);
  asteroid.body.collideWorldBounds = true

//makes asteroid able to collide
  asteroid.body.onCollide = new Phaser.Signal();
}

// function createMedAsteroid(x, y, xs, ys) {
//   asteroidsMed = game.add.group();
//
// }

function addAsteroidsBig() {
  let counter = 0
  asteroidsBig = game.add.group();
  asteroidsBig.enableBody = true;
  asteroidsBig.physicsBodyType = Phaser.Physics.ARCADE;
  let intervalID = setInterval(function () {
    //quadrantCoefficent used to randomly determine which screen asteroid appears
    edgeCoefficent = Math.floor(Math.random()*4 + 1)
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
    let xs = Math.floor(Math.random() * 200)
    let ys = Math.floor(Math.random() * 200)
    const typesAstArray = ['asteroidBig1', 'asteroidBig2', 'asteroidBig3', 'asteroidBig4']
    createAsteroid(asteroidsBig, typesAstArray[edgeCoefficent - 1], counter, x, y, xs, ys)
    ++counter
    // if (counter === number) {
    //   window.clearInterval(intervalID)
    // }
  }, 2500)
}

var medAsteroidCounter = 0

// function convertBigtoMediumAsteroids(x, y) {
//
//   for (let counter = 0; counter < 2; counter++) {
//     let xs = Math.floor(Math.random() * 200)
//     let ys = Math.floor(Math.random() * 200)
//     createMedAsteroid(x, y, xs, ys)
//     // let newAsteroid = createAsteroid(asteroidsMed, 'asteroidMed1', MedAsteroidCounter, x, y, xs, ys)
//     ++medAsteroidCounter
//   }
