$('nav > ul > li').mouseover(function() {
    $(this).find('.sub').stop().slideDown();
});
$('nav > ul > li').mouseleave(function() {
    $(this).find('.sub').stop().slideUp();
});

let x = 0;
setInterval(function() {
    if (x < 2) {
        x++;
    } else {
        x = 0;
    }
    $('.slide > div').animate({left: x * -100 + '%'}, 1000);
}, 3000);

$('.popupBtn').click(function() {
    $('.popup').show();
});
$('.popup button').click(function() {
    $('.popup').hide();
});