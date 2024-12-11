input.onButtonPressed(Button.A, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
        finch.setBeak(100, 0, 0)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
        finch.setBeak(0, 100, 0)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.B, function () {
    finch.setTurn(RLDir.Right, 360, 50)
    finch.setMove(MoveDir.Forward, 5, 50)
    finch.setTurn(RLDir.Right, 360, 50)
    finch.setBeak(0, 0, 100)
})
input.onGesture(Gesture.Shake, function () {
	
})
let hand = 0
finch.startFinch()
