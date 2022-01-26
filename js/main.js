$(document).ready(() =>{
    $('.indexDown').each((index, element) => {
        $(element).click(function(){
            const id = $(this).attr('href');
            const offset = $(id).offset().top;
            $('html').animate({
                scrollTop:offset
            },1800);
        });
    });
});

function toTop(){
    var button = $('.buttonUp');

    $(window).on('scroll', () =>{
        if ($(this).scrollTop() >= 500){
            button.fadeIn();
        } else {
            button.fadeOut();
    }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 2000);
    });
}

toTop();