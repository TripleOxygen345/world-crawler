scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    color.FadeToBlack.startScreenEffect(1000)
    collectedcrystals = 0
    tiles.setCurrentTilemap(tilemap`under world`)
    tiles.placeOnTile(jan, tiles.getTileLocation(25, 47))
    color.startFadeFromCurrent(color.originalPalette, 2000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight5, function (sprite, location) {
    pause(1000)
    scene.cameraShake(8, 1000)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3498, 1, 255, 0, 216, SoundExpressionEffect.Warble, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    collectedcrystals += 1
})
let collectedcrystals = 0
let jan: Sprite = null
scene.setBackgroundImage(assets.image`myImage`)
pause(1000)
music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 912, 717, 255, 0, 3000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.InBackground)
color.FadeToBlack.startScreenEffect()
pause(1000)
tiles.setCurrentTilemap(tilemap`forsty times`)
jan = sprites.create(assets.image`JAn`, SpriteKind.Player)
scene.cameraFollowSprite(jan)
tiles.placeOnTile(jan, tiles.getTileLocation(26, 48))
controller.moveSprite(jan, 100, 100)
color.startFadeFromCurrent(color.originalPalette, 2000)
game.setDialogFrame(assets.image`frame1`)
game.showLongText("Ah...", DialogLayout.Bottom)
game.showLongText("Where am i...?", DialogLayout.Bottom)
