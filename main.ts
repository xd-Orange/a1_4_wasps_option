basic.forever(function () {
    // Holding down the A button makes the straight-mouth face become a smiley face. Holding the B button down makes the straight-mouth face become a frown face. The face returns to a straight-mouth face whenever a button is released.
    // Holding the A button down shows a smiley face.
    // Holding the B button down shows a frown face.
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        // If no buttons are pressed, a straight-mouth face is shown on the LED grid.
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
