input.onButtonPressed(Button.A, function () {
    radio.sendString("rock paper scissors shoot")
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            . . . . .
            `)
        for (let index = 0; index < 1; index++) {
            finch.startMotors(0, 50)
            finch.stopMotors()
        }
    } else if (hand == 2) {
        Paper()
    } else {
        basic.showIcon(IconNames.Scissors)
        finch.setBeak(100, 0, 0)
    }
})
function Paper () {
    basic.showIcon(IconNames.Square)
    finch.setBeak(0, 100, 0)
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.setTurn(RLDir.Right, 90, 50)
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.setTurn(RLDir.Right, 90, 50)
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.setTurn(RLDir.Right, 90, 50)
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.setTurn(RLDir.Right, 90, 50)
}
input.onButtonPressed(Button.B, function () {
    finch.setTurn(RLDir.Right, 360, 50)
    finch.setMove(MoveDir.Forward, 25, 50)
    finch.setTurn(RLDir.Right, 300, 50)
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.setMove(MoveDir.Backward, 10, 50)
})
input.onGesture(Gesture.Shake, function () {
	
})
let hand = 0
finch.startFinch()
radio.setGroup(1)
