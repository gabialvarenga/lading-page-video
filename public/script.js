$(function () {
    $('#mobile-btn').on("click", function () { 
        $('#mobile-menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-x'); 
    });


    const sections = $('section');
    const navItens = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;


        if(scrollPosition <=0 ){
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBotton){
                activeSectionIndex = i;
            return false;
            }
        })

        navItens.removeClass('active');
        $(navItens[activeSectionIndex]).addClass('active');
    });

    const sr = ScrollReveal({
        duration: 2000,
        distance: '20%',
        origin: 'left',
    });
    
    sr.reveal('#cta, .dish');
    sr.reveal('#testimonial-chef', { duration: 1000 });
    sr.reveal('.feedback', { origin: 'right', duration: 1000 });
    sr.reveal('.about-content', { origin: 'left', duration: 1000 });
    sr.reveal('.about-image', { origin: 'right', duration: 1100 });
    
});
