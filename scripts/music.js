function gameMusicPlay() {
    music = game.add.audio('main-music');
    music.play();
    music.loopFull()
}

function gameMusicStop() {
    music.play();
    music.loopFull()
}

function laserSound() {

    laserSFX = game.add.audio('laserSfx')
    laserSFX.play();

}

function explosionSound() {


}

function lostSound() {
 lostSFX = game.add.audio('lostSfx')
 lostSFX.play()
}

function asteroidHitSFX() {
    explosionSFX = game.add.audio('explosionSfx')
    explosionSFX.play()
}