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
        finch.setBeak(0, 100, 0)
        finch.setMove(MoveDir.Forward, 10, 50)
        finch.setTurn(RLDir.Right, 90, 50)
        finch.setMove(MoveDir.Forward, 10, 50)
        finch.setTurn(RLDir.Right, 90, 50)
        finch.setMove(MoveDir.Forward, 10, 50)
        finch.setTurn(RLDir.Right, 90, 50)
        finch.setMove(MoveDir.Forward, 10, 50)
        finch.setTurn(RLDir.Left, 33, 50)
        finch.setMove(MoveDir.Forward, 20, 100)
        finch.setMove(MoveDir.Backward, 20, 50)
        finch.setTurn(RLDir.Right, 33, 50)
        finch.setBeak(0, 100, 0)
        finch.setMove(MoveDir.Forward, 10, 50)
        finch.setTurn(RLDir.Right, 90, 50)
        finch.setMove(MoveDir.Forward, 10, 50)
        finch.setTurn(RLDir.Right, 90, 50)
        finch.setMove(MoveDir.Forward, 10, 50)
        finch.setTurn(RLDir.Right, 90, 50)
        finch.setMove(MoveDir.Forward, 10, 50)
        finch.setTurn(RLDir.Left, 33, 50)
        finch.setMove(MoveDir.Forward, 20, 50)
        finch.setMove(MoveDir.Backward, 20, 50)
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
let hand = 0
finch.startFinch()
radio.setGroup(1)
