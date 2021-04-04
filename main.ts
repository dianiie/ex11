input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Giraffe)
    ans = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Pitchfork)
    ans = 1
})
let ans = 0
ans = -1
let num = randint(0, 10)
basic.showNumber(num)
basic.pause(2000)
while (true) {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    if (ans == 0 || ans == 1) {
        break;
    }
}
basic.showIcon(IconNames.Diamond)
basic.forever(function () {
	
})
