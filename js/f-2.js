$('nav > ul > li').mouseover(function() {
    $(this).find('.sub').stop().slideDown();
});
$('nav > ul > li').mouseout(function() {
    $(this).find('.sub').stop().slideUp();
});

$('.slide > div:gt(0)').hide();
setInterval(function() {
    $('.slide > div:first').fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slide');
}, 3000);

$('.popupBtn').click(function() {
    $('.popup').show();
    return false;
});
$('.popup button').click(function() {
    $('.popup').hide();
});