input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
        finch.setBeak(100, 0, 0)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
        finch.setBeak(0, 100, 0)
    } else {
        basic.showIcon(IconNames.Scissors)
        finch.setBeak(0, 0, 100)
    }
})
let hand = 0
finch.startFinch()
