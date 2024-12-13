input.onButtonPressed(Button.A, function () {
    radio.sendString("rock paper scissors shoot")
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        for (let index = 0; index < 1; index++) {
            finch.startMotors(0, 50)
            finch.stopMotors()
        }
    } else if (hand == 2) {
        Paper()
    } else {
        scissors()
    }
    finch.stopMotors()
})
input.onButtonPressed(Button.AB, function () {
    finch.stopMotors()
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
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.setMove(MoveDir.Backward, 10, 50)
    finch.setTail(TailPort.One, 100, 0, 0)
    basic.pause(1000)
    finch.setBeak(0, 0, 100)
    basic.pause(1000)
    finch.setTail(TailPort.One, 0, 100, 0)
    basic.pause(1000)
    finch.setBeak(100, 0, 0)
    basic.pause(1000)
    finch.setMove(MoveDir.Forward, 10, 50)
    basic.pause(100)
})
function scissors () {
    basic.showIcon(IconNames.Scissors)
    finch.setBeak(0, 100, 0)
    finch.setMove(MoveDir.Forward, 5, 50)
    finch.setTurn(RLDir.Right, 45, 50)
    finch.setMove(MoveDir.Forward, 5, 50)
    finch.setTurn(RLDir.Right, 45, 50)
    finch.setMove(MoveDir.Forward, 5, 50)
    finch.setTurn(RLDir.Right, 45, 50)
    finch.setMove(MoveDir.Forward, 5, 50)
    finch.setTurn(RLDir.Left, 16, 50)
    finch.setMove(MoveDir.Forward, 10, 100)
    finch.setMove(MoveDir.Backward, 10, 50)
    finch.setTurn(RLDir.Right, 16, 50)
    finch.setBeak(0, 100, 0)
    finch.setMove(MoveDir.Forward, 5, 50)
    finch.setTurn(RLDir.Right, 45, 50)
    finch.setMove(MoveDir.Forward, 5, 50)
    finch.setTurn(RLDir.Right, 45, 50)
    finch.setMove(MoveDir.Forward, 5, 50)
    finch.setTurn(RLDir.Right, 45, 50)
    finch.setMove(MoveDir.Forward, 5, 50)
    finch.setTurn(RLDir.Left, 16, 50)
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.setMove(MoveDir.Backward, 10, 50)
}
let hand = 0
finch.startFinch()
radio.setGroup(1)
