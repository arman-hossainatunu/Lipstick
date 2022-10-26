$(function(){
    $('.banner-wrapper-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows:true,
        prevArrow:false,
        nextArrow:false,
        
        
      })


    $('.color-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        prevArrow:false,
        nextArrow:false,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
        ]

    });
    $('.skille-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        prevArrow:false,
        nextArrow:false,
             responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
              }
            },
            
        ]

    });
    $('.btt').on('click',function(){
        $('body,html').animate({scrollTop: 0},1000)
    })
    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop()
        if(scroll > 50){
            $('.btt').fadeIn(500)
        }
        else{
            $('.btt').fadeOut(500)
        }
        if( scroll > 100){
            $('.navbar').addClass('sticky-menu')
        }
        else{
            $('.navbar').removeClass('sticky-menu')
        }
    })

    
 


})