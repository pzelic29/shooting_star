input.onButtonPressed(Button.A, function () {
    kosara.move(-1)
})
input.onButtonPressed(Button.B, function () {
    kosara.move(1)
})
let zvjezda: game.LedSprite = null
let kosara: game.LedSprite = null
kosara = game.createSprite(2, 4)
game.setScore(0)
game.startCountdown(10000)
basic.forever(function () {
    zvjezda = game.createSprite(randint(0, 4), 0)
    zvjezda.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    zvjezda.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        zvjezda.move(1)
        basic.pause(500)
        if (zvjezda.isTouching(kosara)) {
            game.addScore(1)
            zvjezda.delete()
        }
    }
    if (zvjezda.isTouchingEdge()) {
        zvjezda.delete()
    }
})
