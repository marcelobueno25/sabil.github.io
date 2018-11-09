
$(window).scroll(function() {
    if(($(this).scrollTop() > 50)||($(this).scrollTop() > 50))  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-texto').addClass('texto');
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-texto').removeClass('texto');
        $('.opaque-navbar').removeClass('opaque');
    }
});