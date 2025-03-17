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
            const sectionBotton = sectionTop = section.outerHeight();

            if(scrollPosition)
        })
    })
});
