
  function backgroundCreate() {
    //  This will run in Canvas mode, so let's gain a little speed and display
    game.renderer.clearBeforeRender = false;
    game.renderer.roundPixels = true;
    //  We need arcade physics
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //  A spacey background
    game.add.tileSprite(0, 0, game.width, game.height, 'space');
  }

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

  function shipCreate() {
   //  Our player ship
    sprite = game.add.sprite(400, 400, 'ship');
    sprite.anchor.set(0.5, 0.5);
    sprite.angle = -90; // set angle/orientation of ship


   //  and its physics settings
    game.physics.enable(sprite, Phaser.Physics.ARCADE);
    sprite.body.drag.set(100);
    sprite.body.maxVelocity.set(0);
    sprite.body.collideWorldBounds = true;
    
    sprite.body.onCollide = new Phaser.Signal();
    sprite.body.onCollide.add(messageMe, this);   

   //  Game input
    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

     sprite.body.onCollide = new Phaser.Signal();
     sprite.body.onCollide.add(youLose, this);
    }

  function shipControlsUpdate() {
     if (cursors.up.isDown)
     {
        game.physics.arcade.accelerationFromRotation(sprite.rotation, 200, sprite.body.acceleration);
     }
     else
     {
        sprite.body.acceleration.set(0);
     }
     if (cursors.left.isDown)
     {
        sprite.body.angularVelocity = -300;
     }
     else if (cursors.right.isDown)
     {
        sprite.body.angularVelocity = 300;
     }
     else
     {
        sprite.body.angularVelocity = 0;
     }
     if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
     {
        fireBullet();
     }
     screenWrap(sprite);
     bullets.forEachExists(screenWrap, this);
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
            bulletTime = game.time.now + 100;

            bullet.body.bounce.setTo(0, 0);
        }
    }
  }

  function destroySprite(sprite) {
    sprite.destroy();
  }

  function messageMe() {
    console.log("Contact!")
  }

   function screenWrap (sprite) {
       if (sprite.x < 0)
       {
           sprite.x = game.width;
       }
       else if (sprite.x > game.width)
       {
           sprite.x = 0;
       }
       if (sprite.y < 0)
       {
           sprite.y = game.height;
       }
       else if (sprite.y > game.height)
       {
           sprite.y = 0;
       }
   }
