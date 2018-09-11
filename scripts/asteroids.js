
 function asteroidCreate() {
  //add asteroid
   asteroidBig1 = game.add.sprite(0,0, 'asteroidBig1')

  //make asteroid move
    game.physics.enable(asteroidBig1, Phaser.Physics.ARCADE)
    game.physics.arcade.enable([asteroidBig1])
    asteroidBig1.body.velocity.setTo(20, 150);
    asteroidBig1.body.bounce.set(1);
    asteroidBig1.body.collideWorldBounds = true

  //makes asteroid able to collide
   asteroidBig1.body.onCollide = new Phaser.Signal();
  }
