$('nav > ul > li').mouseover(function() {
    $(this).find('.sub').stop().slideDown();
});
$('nav > ul > li').mouseleave(function() {
    $(this).find('.sub').stop().slideUp();
});

let w = 0;
setInterval(function() {
    if (w < 2) {
        w++;
    } else {
        w = 0;
    }
    $('.slide > div').animate({left: w * -100 + '%'}, 2000);
}, 3000);