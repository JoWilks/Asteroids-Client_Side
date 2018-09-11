
function powerUpCreate() {
    //add power-up
    powerUp = game.add.sprite(0,0, 'powerup1');

    //movement
    game.physics.enable(powerUp);
    powerUp.body.velocity.setTo(150, 150);

    powerUp.body.collideWorldBounds = true; // powerUp collides with boundaries and objects

    //set physics of collision
    powerUp.body.onCollide = new Phaser.Signal();
    powerUp.body.onCollide.add(hitSprite, this);
    
    }

    function hitSprite (powerUp) {
        destroySprite(powerUp)
    }