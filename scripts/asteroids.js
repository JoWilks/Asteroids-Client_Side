
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
   asteroidBig1.body.onCollide.add(shotDown, this);
  }

  function shotDown (obj, obj2) {
    obj2.body.velocity.setTo(0,0)
    // obj2.loadTexture('explosion', 0)
    
    asteroidSmall1 = game.add.sprite(obj.body.x,obj.body.y, 'explosion')
    game.physics.enable(asteroidSmall1, Phaser.Physics.ARCADE)
    asteroidSmall1.body.velocity.setTo(400,200);

    destroySprite(obj)
    destroySprite(obj2)
}