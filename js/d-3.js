let mw = $('.contents').width();
$('nav > ul > li').mouseover(function() {
    $('.menu-bg').stop().animate({width : mw},700);
    $('.sub').stop().fadeIn();
    $('.sub').css('display', 'flex');
});
$('nav > ul > li').mouseout(function() {
    $('.menu-bg').stop().animate({width : 0},700);
    $('.sub').stop().fadeOut();
});

$('.slide > div:gt(0)').hide();
setInterval(function() {
    $('.slide > div:first').fadeOut(1000)
                           .next()
                           .fadeIn(1000)
                           .end()
                           .appendTo('.slide');
}, 3000);