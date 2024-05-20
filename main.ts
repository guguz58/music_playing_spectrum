let item = 0
let key = 0
let Mode = 2
piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
piano.RGB_Program().show()
basic.forever(function () {
    key = piano.Touch()
    if (key == piano.TouchButton(piano.touch.L)) {
        Mode = 1
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        piano.RGB_Program().show()
    } else if (key == piano.TouchButton(piano.touch.M)) {
        Mode = 2
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        piano.RGB_Program().show()
    } else if (key == piano.TouchButton(piano.touch.H)) {
        Mode = 3
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        piano.RGB_Program().show()
    }
    piano.PlayPiano(Mode)
})
basic.forever(function () {
    item = piano.Touch()
    if (item == piano.TouchButton(piano.touch.C)) {
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
        piano.RGB_Program().show()
    }
    if (item == piano.TouchButton(piano.touch.CD)) {
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        piano.RGB_Program().setBrightness(20)
        piano.RGB_Program().show()
    }
    if (item == piano.TouchButton(piano.touch.D)) {
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        piano.RGB_Program().setBrightness(30)
        piano.RGB_Program().show()
    }
    if (item == piano.TouchButton(piano.touch.DE)) {
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
        piano.RGB_Program().setBrightness(55)
        piano.RGB_Program().show()
    }
    if (item == piano.TouchButton(piano.touch.E)) {
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Indigo))
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
        piano.RGB_Program().setBrightness(75)
        piano.RGB_Program().show()
    }
    if (item == piano.TouchButton(piano.touch.F)) {
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        piano.RGB_Program().show()
    }
    if (item == piano.TouchButton(piano.touch.FG)) {
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Indigo))
        piano.RGB_Program().show()
    }
    if (item == piano.TouchButton(piano.touch.G)) {
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        piano.RGB_Program().show()
    }
    if (item == piano.TouchButton(piano.touch.GA)) {
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Indigo))
        piano.RGB_Program().show()
    }
    if (item == piano.TouchButton(piano.touch.A)) {
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        piano.RGB_Program().show()
    }
    if (item == piano.TouchButton(piano.touch.AB)) {
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Indigo))
        piano.RGB_Program().show()
    }
    if (item == piano.TouchButton(piano.touch.B)) {
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        piano.RGB_Program().show()
    }
})
basic.forever(function () {
    item = piano.Touch()
    if (item == piano.TouchButton(piano.touch.C)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    }
    if (item == piano.TouchButton(piano.touch.CD)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            `)
    }
    if (item == piano.TouchButton(piano.touch.D)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            `)
    }
    if (item == piano.TouchButton(piano.touch.DE)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    }
    if (item == piano.TouchButton(piano.touch.E)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            # # # # #
            `)
    }
    if (item == piano.TouchButton(piano.touch.F)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            `)
    }
    if (item == piano.TouchButton(piano.touch.FG)) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            `)
    }
    if (item == piano.TouchButton(piano.touch.G)) {
        basic.showLeds(`
            . . . . .
            . . # . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (item == piano.TouchButton(piano.touch.GA)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (item == piano.TouchButton(piano.touch.A)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (item == piano.TouchButton(piano.touch.AB)) {
        basic.showLeds(`
            . . # . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (item == piano.TouchButton(piano.touch.B)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
