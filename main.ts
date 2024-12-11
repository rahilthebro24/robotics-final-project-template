input.onButtonPressed(Button.A, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
        finch.setBeak(0, 0, 100)
    } else if (hand == 2) {
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
    } else {
        basic.showIcon(IconNames.Scissors)
        finch.setBeak(100, 0, 0)
    }
})
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
