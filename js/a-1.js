$(function() {
    // menu
    $('nav > ul > li').mouseover(function() {
        $('nav > ul ul').stop().slideDown();
    });
    $('nav > ul > li').mouseout(function() {
        $('nav > ul ul').stop().slideUp();
    });

    // tab
    $('.notice > ul > li').click(function() {
        $('.notice > ul > li').removeClass('tab-on');
        $(this).addClass('tab-on');

        let idx = $(this).index();
        $('.tabcon').hide();
        $('.tabcon').eq(idx).show();
    });

    // popup
    $('.popup').click(function() {
        $('.popup-wrap').stop().show();
    });
    $('button').click(function() {
        $('.popup-wrap').stop().hide();
    });

    // slide
    let hgt = 0;
    function slideShow() {
        if (hgt < 2) {
            hgt++;
        } else {
            hgt = 0;
        }
        $('.slide-wrap > ul').animate({top: hgt * 300 * (-1)}, 1000);
    }
    setInterval(slideShow, 2000);
});