controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..........aaaaaaaa............
        .........aaccbdcbaa...........
        ........aabff444fbda..........
        .......aacb44fdf4bcaaa........
        ......acbdbffcdcfbbcaa........
        ......abbcbffdddfbcbaaa.......
        .....adbacbfffdffacbdda.......
        .....abbb2bff222fb2bccaa......
        .....aacb2b222522b2bbbca......
        .....ababb2ff2f2f2baddaa......
        .....cbbabbff222fbbcbbdc......
        .....abcbbcffcccfbabbbaa......
        .....abbbbbbb222abcbccda......
        .....abbbbbbb222abcbccda......
        .....aacbcbaa2b2bdbbbba.......
        ......aabbdbb2b2abbadda.......
        ......caababbcacbdcbaa........
        .......acdbbbcbcbbbaaa........
        ........aabcccdccbad..........
        .........aaddbcbbaa...........
        ..........aaaaaaaa............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.Player)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
        . . . . . . f 4 4 4 f . . . . . 
        . . . . . . 4 f d f 4 . . . . . 
        . . . . . . f c d c f . . . . . 
        . . . . . . f d d d f . . . . . 
        . . . . . . f f d f f . . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . 2 2 5 2 2 . . . . . 
        . . . . . 2 f 2 f 2 f 2 . . . . 
        . . . . . c f 2 2 2 f c . . . . 
        . . . . . c f c c c f c . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . 2 . 2 . . . . . . 
        . . . . . . . 2 . 2 . . . . . . 
        . . . . . . . c . c . . . . . . 
        . . . . . . . c . c . . . . . . 
        . . . . . . c c . c c . . . . . 
        `, SpriteKind.Player)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f 4 4 4 f . . . . . 
    . . . . . . 4 f d f 4 . . . . . 
    . . . . . . f c d c f . . . . . 
    . . . . . . f d d d f . . . . . 
    . . . . . . f f d f f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . 2 2 5 2 2 . . . . . 
    . . . . . 2 f 2 f 2 f 2 . . . . 
    . . . . . c f 2 2 2 f c . . . . 
    . . . . . c f c c c f c . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . 2 . 2 . . . . . . 
    . . . . . . . 2 . 2 . . . . . . 
    . . . . . . . c . c . . . . . . 
    . . . . . . . c . c . . . . . . 
    . . . . . . c c . c c . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundImage(img`
    888ffffffffffffffffffffffffffff88888888888888fffffffffffffffffffffffffffff88888ffffffffffffffffffffffffffffffffffffffffff88888888888888888fffffffffffffffffffff8
    fffffffffffffffffffffffffffffff88888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff88888888888aaaaaaaaaafffffffffffffffffffffffffffffffffffaa1111111111111111111ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111111111111111111111ffffffffffffffffffffffffffffffff88
    888ffffffffffffffffffffffffffffffff888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111111111111118888ffffffffffffffffffffffffff8
    8fffffffffffffffffffffffffffff8888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111111111111111888888ffffffffffffffffffffffff
    ffffffffffffffffffffff8888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccc1111111111111111111111111111a88888888888ffffffffffffffffff
    ffffffffffffffffff88888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccc1111111111111111111111111111aaa88888888888ffffffffffffffff
    ffffffffffffffff8888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111aaaaa888888888ffffffffffffffff
    ffffffffffffff8888888888888aaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111aaaaaaa8888888ffffffffffffffff
    ffffffffffff8888888888aaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11111111111111111111111111aaaaaaaaaaaa888888ffffffffffffffff
    fffffff888888888888aaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111111111ccccccaaaaaaaaaaaaa8888ffffffffffffffff
    888888888888888aaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11111111111111cccccccccccccccaaaaaaaaaaaaa888fffffffffffffff
    888888888888aaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaa888fffffffffffff
    88888888aaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaa88ffffffffffff
    88888aaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaa8fffffffffff
    aaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaffffffffff
    aaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaafffffffff
    aaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaffffffff
    aaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaffffffff
    aaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaafffff
    aaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaa
    ccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffbbbbbbbbbbcccccccccccccccccccccccccccccccccccccaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccaaaaaaa
    ccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccaaaaa
    ccccccccccccccccccccccffffffffcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccaaa
    cfffffffffffffffffffffffffffffccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccc
    ffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccc
    ffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
    ffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccc
    ffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccc
    fffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccc
    fffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbb11111111111bbbbbbbbbbbbbbbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccfff
    fffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbb11111111111111bbbbbbbbbbbbbbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccfff
    fffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbb111111111111111111bbbbbbbbbbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccffff
    fffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccffff
    fffffffffffffffffffffffffffffffbbbbbbbbbbbbbb11111111111fffffff1111bbbbbbbbbbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcffff
    ffffffffffffffffffffffffffffffffbbbbbbbbbbbbb1111ffffffffffffff11113bbbbbbbbbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
    ffffffffffffffffffffffffffffffffbbbbbbbbbbbffffffffffffffffffff111133333333bbbbfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
    ffffffffffffffffffffffffffffffffbbbbbbfffffffffffffffffffffffff1111333333333333ffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
    ffffffffffffffffffffffffffffffffbbbbbbffffffffffffffffffffffffff111333333333333ffffffffffffffffffffffffff333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
    ffffffffffffffffffffffffffffffffbbbbbbffffffffffffffffffffffffff333333333333333ffffffffffffffffffffffffff33333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbffff
    ffffffffffffffffffffffffffffffffbbbbbfffffffffffffffffffffffffff333333333333333ffffffffffffffffffffffffff3333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbffff
    ffffffffffffffffffffffffffffffffbbbb3fffffffffffffffffffffffffff333333333333333ffffffffffffffffffffffffff333333333333333333333333333333333bbbbbbbbbbbbbbbbbbffff
    ffffffffffffffffffffffffffffffffbb333fffffffffffffffffffffffffff333333333333333ffffffffffffffffffffffffff333333333333333333333333333333333333bbbbbbbbbbbbbbbffff
    ffffffffffffffffffffffffffffffff33333ffffffffffffffffffffffffffff33333333333333fffffffffffffffffffffffffff33333333333333333333333333333333333333bbbbbbbbbbbbffff
    ffffffffffffffffffffffffffffffff33333ffffffffffffffffffffffffffff33333333333333fffffffffffffffffffffffffff33333333333333333333333333333333333333bbbbbbbbbbbbffff
    ffffffffffffffffffffffffffffffff33333ffffffffffffffffffffffffffff33333333333333fffffffffffffffffffffffffff333333333333333333333333333333333333333bbbbbbbbbbbffff
    ffffffffffffffffffffffffffffffff33333ffffffffffffffffffffffffffff33333333333333fffffffffffffffffffffffffff33333333333333333333333333333333333333333bbbbbbbbbffff
    ffffffffffffffffffffffffffffffff33333ffffffffffffffffffffffffffff3333333333333fffffffffffffffffffffffffffff333333333333333333333333333333333333333333bbbbbbbffff
    ffffffffffffffffffffffffffffffff33333ffffffffffffffffffffffffffff3333333333334fffffffffffffffffffffffffffff4443333333333333333333333333333333333333333bbbbbbffff
    ffffffffffffffffffffffffffffffff33333ffffffffffffffffffffffffffff3334444444444fffffffffffffffffffffffffffff444333333333333333333333333333333333333333333bbbbffff
    ffffffffffffffffffffffffffffffff33333ffffffffffffffffffffffffffff4444444444444fffffffffffffffffffffffffffff4444444333333333333333333333333333333333333333bbbffff
    ffffffffffffffffffffffffffffffff33333ffffffffffffffffffffffffffff4444444444444fffffffffffffffffffffffffffff44444441111111113333333333333333333333333333333bbffff
    ffffffffffffffffffffffffffffffff33333ffffffffffffffffffffffffffff4444444444444fffffffffffffffffffffffffffff44444411111111113333333333333333fffffffffffff3333ffff
    ffffffffffffffffffffffffffffffff33333fffffffffffffffffffffffffffff444444444444fffffffffffffffffffffffffffff44441111111111114444333333fffffffffffffffffff3333ffff
    ffffffffffffffffffffffffffffffff33333fffffffffffffffffffffffffffff444444444444fffffffffffffffffffffffffffff4444111111111111111114fffffffffffffffffffffff3333ffff
    ffffffffffffffffffffffffffffffff33333fffffffffffffffffffffffffffff444444444444fffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffff3333ffff
    fffffffffffffffffffffffffffffffff3333fffffffffffffffffffffffffffff444444444444fffffffffffffffffffffffffffff11111111111111111111fffffffffffffffffffffffff3333ffff
    fffffffffffffffffffffffffffffffff3333fffffffffffffffffffffffffffff444444444444fffffffffffffffffffffffffffff11111111111111111111fffffffffffffffffffffffff3333ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444ffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffff3333ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444ffffffffffffffffffffffffffffff1111111111111444444fffffffffffffffffffffffff3333ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444fffffffffffffffffffffffff3333ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444fffffffffffffffffffffffff3333ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444fffffffffffffffffffffffff3333ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444fffffffffffffffffffffffff3333ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
