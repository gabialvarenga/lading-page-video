$(function () {
    $("#mobile-btn").on("click", function () { 
        $("#mobile-menu").toggleClass("active");
        $(this).find('i').toggleClass('fa-x'); 
    });


});
