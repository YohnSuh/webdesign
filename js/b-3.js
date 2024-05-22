$('nav > ul > li').mouseover(function() {
    $(this).find('.sub').stop().slideDown();
});
$('nav > ul > li').mouseout(function() {
    $(this).find('.sub').stop().slideUp();
});

let th = 0;
setInterval(function() {
    if (th < 2) {
        th++;
    } else {
        th = 0;
    }
    $('.slide > div').animate({top: th * -100 + '%'}, 1000);
}, 3000);

$('.popupBtn').click(function() {
    $('.popup').show();
});
$('.popup button').click(function() {
    $('.popup').hide();
});