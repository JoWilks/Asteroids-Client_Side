function bulletsCreate() {
  //  Our ships bullets
   bullets = game.add.group();
   bullets.enableBody = true;
   bullets.physicsBodyType = Phaser.Physics.ARCADE;
  //  All 40 of them
   bullets.createMultiple(10000, 'bullet');
   bullets.setAll('anchor.x', 0.5);
   bullets.setAll('anchor.y', 0.5);
  }


function fireBullet () {
    laserSound()
   if (game.time.now > bulletTime)
  {
      bullet = bullets.getFirstExists(false);
      if (bullet)
       {
          bullet.reset(sprite.body.x + 40, sprite.body.y + 50); //align bullet to centre of sprite coordinates relative to map
          bullet.lifespan = 1200;


          bullet.body.collideWorldBounds = true; // bullet collides with boundaries and objects
          bullet.body.onWorldBounds = new Phaser.Signal();
          bullet.body.onWorldBounds.add(destroySprite, this);

          bullet.rotation = sprite.rotation;
          bullet.angle = sprite.angle + 90; //Set angle of bullet to match angle of ship
          game.physics.arcade.velocityFromRotation(sprite.rotation, 1000, bullet.body.velocity);
          bulletTime = game.time.now + 100;

          bullet.body.bounce.setTo(0, 0);
      }
  }
}


function shootBigAsteroid(obj1, obj2) {
  //stop asteroid
  obj2.body.velocity.setTo(0,0)

  //rig explosion
  createExplode(obj1.body.x, obj1.body.y, 0.5, 0.5)

  //convert big asteroid to 3 medium
  convertBigtoMediumAsteroids(obj1.body.x, obj1.body.y)
  maxAsteroidVelocity++;
  //destroy bullet and big asteroid sprites
  obj1.kill()
  obj2.kill()


  //increase score
  score += 10;
  scoreText.text = scoreString + score;
}

function destroyMedAsteroid(obj1, obj2) {
  asteroidHitSFX()
  obj2.body.velocity.setTo(0,0)

  createExplode(obj1.body.x, obj1.body.y, 0.25, 0.25)

  maxAsteroidVelocity++;

  obj1.kill()
  obj2.kill()

  //increase score
  score += 5;
  scoreText.text = scoreString + score;
}
