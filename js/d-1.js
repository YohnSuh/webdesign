$('nav > ul > li').mouseenter(function() {
    $(this).find('.sub').stop().slideDown();
});
$('nav > ul > li').mouseleave(function() {
    $(this).find('.sub').stop().slideUp();
});

let d = 0;
setInterval(function() {
    if (d < 2) {
        d++;
    } else {
        d = 0;
    }
    $('.slide > div').animate({top: d * -100 + '%'}, 1000);
}, 3000);

$('.tab > ul > li > a').click(function() {
    $(this).addClass('on');
    $(this).siblings().show();

    $(this).parent().siblings().find('a').removeClass('on');
    $(this).parent().siblings().find('div').hide();

    return false;
});