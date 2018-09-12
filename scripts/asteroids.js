function createPoolsBigAsteroids() {
    asteroidsBig1 = game.add.group();
    asteroidsBig1.enableBody = true;
    asteroidsBig1.createMultiple(500, 'asteroidBig1')
    typesAstArray.push(asteroidsBig1)

    asteroidsBig2 = game.add.group();
    asteroidsBig2.enableBody = true;
    asteroidsBig2.createMultiple(500, 'asteroidBig2')
    typesAstArray.push(asteroidsBig2)
}

function createPoolMedAsteroids() {
  asteroidsMed = game.add.group();
  asteroidsMed.enableBody = true;
  asteroidsMed.createMultiple(3000, 'asteroidMed1')
}

function getAsteroidfromGroup(group, x, y, xs, ys) {
  asteroidBig = group.getFirstExists(false);
  asteroidBig.reset(x, y)
  game.physics.enable(asteroidBig, Phaser.Physics.ARCADE)
  // game.physics.arcade.enable([asteroidBig])
  asteroidBig.body.velocity.setTo(xs, ys);
  asteroidBig.body.bounce.set(1);
  asteroidBig.anchor.set(0.5, 0.5);
  asteroidBig.body.angularVelocity = Math.random()*200

//makes asteroidBig able to collide
  asteroidBig.body.collideWorldBounds = true
  asteroidBig.body.onCollide = new Phaser.Signal();
}

function bigAsteroidsFlyIn(stop) {
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
      coinFlip = Math.floor(Math.random()*2)
      getAsteroidfromGroup(typesAstArray[coinFlip], x, y, xs, ys)
      if (stop) {
        window.clearInterval(intervalID)
      }
    }, 1500)
  }

function convertBigtoMediumAsteroids(x, y) {
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


// function addAsteroidsBig() {
//   let counter = 0
//   asteroidsBig = game.add.group();
//   asteroidsBig.enableBody = true;
//   asteroidsBig.physicsBodyType = Phaser.Physics.ARCADE;
//   let intervalID = setInterval(function () {
//     //quadrantCoefficent used to randomly determine which screen asteroid appears
//     edgeCoefficent = Math.floor(Math.random()*4 + 1)
//     switch (edgeCoefficent) {
//       case 1:
//         x = 0;
//         y = Math.floor(Math.random() * gameHeight);
//         break;
//       case 2:
//         x = Math.floor(Math.random() * gameWidth);
//         y = 0
//         break;
//       case 3:
//         x = gameWidth
//         y = Math.floor(Math.random() * gameHeight);
//         break;
//       case 4:
//         x = Math.floor(Math.random() * gameWidth);
//         y = gameHeight
//         break;
//     }
//     let xs = Math.floor(Math.random() * 200)
//     let ys = Math.floor(Math.random() * 200)
//     const typesAstArray = ['asteroidBig1', 'asteroidBig2', 'asteroidBig3', 'asteroidBig4']
//     createAsteroid(asteroidsBig, typesAstArray[edgeCoefficent - 1], counter, x, y, xs, ys)
//     ++counter
//     // if (counter === number) {
//     //   window.clearInterval(intervalID)
//     // }
//   }, 1000)
// }

// function createAsteroid(group, type, counter, x, y, xs, ys) {
//   const asteroid = group.create(x, y, type)
//   asteroid.name = type + counter;
//   asteroid.immovable = false;
//   game.physics.enable(asteroid, Phaser.Physics.ARCADE)
//   // game.physics.arcade.enable([asteroid])
//   asteroid.body.velocity.setTo(xs, ys);
//   asteroid.body.bounce.set(1);
//   asteroid.anchor.set(0.5, 0.5);
//   asteroid.body.angularVelocity = Math.random()*200
//
// //makes asteroid able to collide
//   asteroid.body.collideWorldBounds = true
//   asteroid.body.onCollide = new Phaser.Signal();
// }
