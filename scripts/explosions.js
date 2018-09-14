function createExplode(x, y, scaleX, scaleY) {
  explode = game.add.sprite(x, y, 'explodes');
  explode.scale.setTo(scaleX, scaleY)
  explode.animations.add('explodes')
  explode.animations.play('explodes', 20, false, true)
}
