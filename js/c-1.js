$('nav > ul > li').mouseover(function() {
    $(this).find('.sub').stop().slideDown();
});
$('nav > ul > li').mouseout(function() {
    $(this).find('.sub').stop().slideUp();
});

$('.slide > div:gt(0)').hide();
function slide() {
    $('.slide > div:first').fadeOut(1000)
                           .next()
                           .fadeIn(1000)
                           .end()
                           .appendTo('.slide');
}
setInterval(slide, 3000);

$('.tab > ul > li').click(function() {
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    $(this).find('.con').show();
    $(this).siblings().find('.con').hide();
});

$('.popBtn').click(function() {
    $('.popup').show();
});
$('.popup button').click(function() {
    $('.popup').hide();
});