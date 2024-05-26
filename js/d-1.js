$('nav > ul > li').mouseenter(function() {
    $(this).find('.sub').stop().slideDown();
});
$('nav > ul > li').mouseleave(function() {
    $(this).find('.sub').stop().slideUp();
});