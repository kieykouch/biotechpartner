
$(function() {
    window.sr = ScrollReveal();
    sr.reveal('.content-section-b');
});

//dropdown hover, work for all
$(function(){
    $('.dropdown').hover(function() {
        $(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });
});