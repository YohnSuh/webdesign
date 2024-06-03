$('nav > ul > li').mouseover(function() {
    $('.menu-bg').stop().slideDown();
    $('nav .sub').stop().slideDown();
});
$('nav > ul > li').mouseleave(function() {
    $('.menu-bg').stop().slideUp();
    $('nav .sub').stop().slideUp();
});

let t = 0;
setInterval(function() {
    if (t < 2) {
        t++;
    } else {
        t = 0;
    }
    $('.slide > div').animate({top: t * -100 + '%'}, 1000);
}, 3000);

$('.ppBtn').click(function() {
    $('.pp').show();
    return false;
});
$('.pp button').click(function() {
    $('.pp').hide();
});