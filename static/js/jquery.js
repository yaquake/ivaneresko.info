


$(document).ready(function() {
    $("p#greeting").fadeIn(1000)
    $("img#picture").fadeIn(1000)

    $(window).scroll( function(){
        $('.fade').each( function(i){
            let top_of_object = $(this).offset().top + 100;
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > top_of_object ){    
                $(this).animate({'opacity':'1'}, 800);    
            }
            
        }); 

    });

});

$(document).ready(function(){
    $('.navbar').find('a.active').removeClass('active');
    $('.navbar a').each(function(){
        if ($(this).prop('href') === window.location.href ) {
            $(this).addClass('active'); 
        }
    });
});