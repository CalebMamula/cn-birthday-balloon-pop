//% weight=99 color=#078a1d icon="\uf045"

namespace Functions {
    //% block="testing"
    export function createDart(): void {
     
    myDart = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . 6 c 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . 5 6 6 6 5 . . . . . . 
        . . . . 5 5 2 2 2 5 5 . . . . . 
        . . . . 5 5 6 6 6 5 5 . . . . . 
        . . . . 5 5 2 2 2 5 5 . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        `, SpriteKind.Player, 80, 110)
    myDart.controlWithArrowKeys()
    myDart.setTrace()
    myDart.angle = 75
    myDart.angle += 15
    }
}
