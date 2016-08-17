
$(function() {
    window.sr = ScrollReveal();
    sr.reveal('.content-section-b');
});

$(function(){
    $('.dropdown').hover(function() {
        $(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });
});