input.onButtonPressed(Button.A, function () {
    xander += 20
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    xander += -10
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(xander)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    xander += 10
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
let xander = 0
xander = 100
loops.everyInterval(1000, function () {
    xander += -1
})
basic.forever(function () {
    if (xander < 70) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (xander < 50) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
