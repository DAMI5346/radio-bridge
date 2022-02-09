// Increment radio group by 1
input.onButtonPressed(Button.B, function () {
    group = Math.min(255, group + 1)
    radio.setGroup(group)
    led.stopAnimation()
    basic.showNumber(group)
})
let group = 0
for (let index = 0; index < 3; index++) {
    basic.pause(500)
    music.playTone(262, music.beat(BeatFraction.Whole))
}
basic.pause(500)
music.playTone(880, music.beat(BeatFraction.Whole))
