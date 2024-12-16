function scissors2 () {
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
input.onButtonPressed(Button.A, function () {
    radio.sendString("rock paper scissors shoot")
    hand = randint(1, 3)
    if (hand == 1) {
        rock2()
    } else if (hand == 2) {
        Paper()
    } else if (hand == 3) {
        scissors2()
    }
    if (hand == 1 && hand == 1) {
        basic.showString("tie")
    } else if (hand == 2 && hand == 2) {
        basic.showString("tie")
    } else if (hand == 3 && hand == 3) {
        basic.showString("tie")
    } else if (hand > 1 && hand == 1) {
        basic.showString("i win")
    } else {
    	
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
function rock2 () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    finch.setBeak(0, 0, 100)
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.setTurn(RLDir.Right, 20, 50)
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.setTurn(RLDir.Right, 150, 50)
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.setTurn(RLDir.Right, 37, 50)
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.stopMotors()
}
let hand = 0
finch.startFinch()
radio.setGroup(1)
