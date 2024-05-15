$(function() {
    // menu
    $('nav > ul > li').mouseover(function() {
        $('.sub, .menu-bg').stop().slideDown();
    });
    $('nav > ul > li').mouseout(function() {
        $('.sub, .menu-bg').stop().slideUp();
    });

    // slide
    let w = 0;
    function slide() {
        if (w < 2) {
            w++;
        } else {
            w =0;
        }
        $('.slide ul').animate({left: w * (-100) + '%'}, 1000);
    }
    setInterval(slide, 3000);

    // tab
    $('.tab > ul > li').click(function() {
        $('.tab .on').removeClass('on');
        $(this).find('a').addClass('on');
        
        $(this).find('div').stop().show();
        $(this).siblings().find('div').stop().hide();

        return false;
    });

    // popup
    $('.pp-btn').click(function() {
        $('.popup').stop().show();
    });
    $('.popup button').click(function() {
        $('.popup').stop().hide();
    });
});