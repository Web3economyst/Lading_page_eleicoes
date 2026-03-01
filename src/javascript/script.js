$(document).ready(function() {

    // MOBILE MENU
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        // Shadow suave no header ao rolar
        if (scrollPosition > 0) {
            header.css('box-shadow', '0 4px 12px rgba(0, 0, 0, 0.05)');
        } else {
            header.css('box-shadow', 'none');
        }

        // Detecta seção ativa
        sections.each(function(i) {
            const sectionTop = $(this).offset().top - 120;
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });


    // SCROLL REVEAL (Institucional suave)
    ScrollReveal().reveal('.section', {
        origin: 'bottom',
        duration: 1000,
        distance: '30px',
        easing: 'ease-in-out',
        reset: false
    });

});