$('nav > ul > li').mouseover(function() {
    $('.menubg').stop().slideDown();
    $('nav .sub').stop().slideDown();
    
    return false;
});
$('nav > ul > li').mouseout(function() {
    $('.menubg').stop().slideUp();
    $('nav .sub').stop().slideUp();

    return false;
});

$('.slide > div > div:gt(0)').hide();
setInterval(function() {
    $('.slide > div > div:first').fadeIn(1000)
                                 .next()
                                 .fadeOut(1000)
                                 .end()
                                 .appendTo('.slide > div');
}, 3000);

$('.ppBtn').click(function() {
    $('.popup').show();

    return false;
});
$('button').click(function() {
    $('.popup').hide();
});