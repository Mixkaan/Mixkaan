$(document).ready(function() {

    $(window).scroll(function() {
        var barra = $(window).scrollTop();
        var posicion = barra * 0.50;

        $('.-Parallax').css({
            'background-position' : '0 -' + posicion + 'px'
        });
    });
});

/* script(src="/javascript/parallax.js") */
