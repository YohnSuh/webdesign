$(function() {
    $('nav > ul > li').mouseover(function() {
        $(this).addClass('on');
        $(this).find('.sub').stop().slideDown();
    });
    $('nav > ul > li').mouseout(function() {
        $(this).removeClass('on');
        $('.sub').stop().slideUp();
    });
    $('.sub > li').mouseover(function() {
        $(this).addClass('on');
    });
    $('.sub > li').mouseout(function() {
        $(this).removeClass('on');
    });

    let height = 0;
    function slide() {
        if(height < 2) {
            height++;
        } else {
            height = 0;
        }
        $('.slide > ul').animate({top: height * (-100) + '%'}, 1000);
    };
    setInterval(slide, 2000);
});