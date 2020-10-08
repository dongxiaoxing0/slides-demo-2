let $imgs = $('.imgs > img')
$imgs.eq(0).addClass('current')
$imgs.eq(1).addClass('enter')
$imgs.eq(2).addClass('enter')

let n = 0
let index = function (m) {
    return m%($imgs.length)
}

setInterval(() => {
    console.log(index(n))
    console.log(index(n+1))
    $imgs.eq(index(n)).removeClass('current').addClass('leave')
.one('transitionend',(e) => {
    $(e.currentTarget).removeClass('leave').addClass('enter')
})
$imgs.eq(index(n+1)).removeClass('enter').addClass('current')
n += 1
},3000)