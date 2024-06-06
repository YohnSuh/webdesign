$('nav > ul > li').mouseover(function() {
    $('.menu-bg').stop().fadeIn();
    $('.sub').stop().fadeIn();
    $('.sub').css({'display':'flex'})
});
$('nav > ul > li').mouseout(function() {
    $('.menu-bg').stop().fadeOut();
    $('.sub').stop().fadeOut();
});

$('.slide > div:gt(0)').hide();
setInterval(function() {
    $('.slide > div:first').fadeIn(1000)
                           .next()
                           .fadeOut(1000)
                           .end()
                           .appendTo('.slide');
}, 3000);

$('.contents > ul > li').click(function() {
    $(this).find('div').show();
    $(this).siblings().find('div').hide();
    $('.on').removeClass('on');
    $(this).find('a').addClass('on');

    return false;
});