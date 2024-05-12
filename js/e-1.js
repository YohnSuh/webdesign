$(function() {
    // menu
    $('nav > ul > li').mouseenter(function() {
        $(this).find('.sub').stop().slideDown();
    });
    $('nav > ul > li').mouseleave(function() {
        $('.sub').stop().slideUp();
    });

    // popup
    $('.pp').click(function() {
        $('.popBg').show();
        return false;
    });
    $('.close').click(function() {
        $('.popBg').hide();
    });

    // slide
    var i = 0;
    function slide() {
        if (i < 2) {
            i++;
        } else {
            i = 0;
        }
        $('.slide ul').animate({left: -100 * i + "%"}, 1000);
    }
    setInterval(slide, 2000);
});