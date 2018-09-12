function bulletsCreate() {
  //  Our ships bullets
   bullets = game.add.group();
   bullets.enableBody = true;
   bullets.physicsBodyType = Phaser.Physics.ARCADE;
  //  All 40 of them
   bullets.createMultiple(1000, 'bullet');
   bullets.setAll('anchor.x', 0.5);
   bullets.setAll('anchor.y', 0.5);
  }


function fireBullet () {
   if (game.time.now > bulletTime)
  {
      bullet = bullets.getFirstExists(false);
      if (bullet)
       {
          bullet.reset(sprite.body.x + 40, sprite.body.y + 50); //align bullet to centre of sprite coorinates relative to map
          bullet.lifespan = 1200;

          bullet.body.collideWorldBounds = true; // bullet collides with boundaries and objects
          bullet.body.onWorldBounds = new Phaser.Signal();
          bullet.body.onWorldBounds.add(destroySprite, this);

          bullet.rotation = sprite.rotation;
          bullet.angle = sprite.angle + 90; //Set angle of bullet to match angle of ship
          game.physics.arcade.velocityFromRotation(sprite.rotation, 500, bullet.body.velocity);
          bulletTime = game.time.now + 300;

          bullet.body.bounce.setTo(0, 0);
      }
  }
}


function shootBigAsteroid(obj1, obj2) {
  obj2.body.velocity.setTo(0,0)
    // obj2.loadTexture('explosion', 0)

    //convert big asteroid to 3 medium

      // convertBigtoMediumAsteroids(asteroidsMeds, obj1.body.x, obj1.body.y)


    //destroy bullet and big asteroid sprites
    destroySprite(obj1);
    destroySprite(obj2);

    //increase score
    score += 10;
    scoreText.text = scoreString + score;
}

function destroyMedAsteroid(obj1, obj2) {
  obj2.body.velocity.setTo(0,0)
    // obj2.loadTexture('explosion', 0)

    destroySprite(obj1);
    destroySprite(obj2);

    //increase score
    score += 10;
    scoreText.text = scoreString + score;
}