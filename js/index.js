$(function(){
    //image slide
    // setInterval(function(){
    //     $('.banner').animate({'margin-left':'-25%'},function(){
    //          $('.banner li ').first().appendTo('.banner')
    //          $('.banner').css({'margin-left':'0%'})
    //     });
    //     },3000);
    $(".banner").slick();

    //mettress section
    
    $('.collectbox').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        arrows : false,
        dots : true,
        draggable : true,
        pauseOnHover : true,
        slidesToShow: 5, //한 화면에 보여줄 아이템수
        slidesToScroll: 1, //한번에 슬라이드 시킬 아이템수
        
        responsive: [
        
            {
                breakpoint: 1024,   //1024미만
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,   //600미만
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,   //480미만
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
        ]
        });
    // const swiper = new Swiper('.swiper-container',{
    //     slidesPerView: 5,
    //     spaceBetween: 5,
    //     loop: true,
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     autoplay: 2000,
    //     autoplayDisableOnInteraction: false,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     breakpoints: {
    //         1759: {
    //             slidesPerView: 4,
    //             spaceBetween: 10,
    //             loop: true,
    //             autoplay: 2000,
    //             nextButton: '.swiper-button-next',
    //             prevButton: '.swiper-button-prev',
    //         },
    //         1336: {
    //             slidesPerView: 3,
    //             spaceBetween: 10,
    //             loop: true,
    //             nextButton: '.swiper-button-next',
    //             prevButton: '.swiper-button-prev',
    //         },
    //         1055: {
    //             slidesPerView: 3,
    //             spaceBetween: 10,
    //             loop: true,
    //             autoplay: 2000,
    //             nextButton: '.swiper-button-next',
    //             prevButton: '.swiper-button-prev',
    //         },
    //         911: {
    //             slidesPerView: 3,
    //             spaceBetween: 10,
    //         },
    //         736: {
    //             slidesPerView: 2,
    //             spaceBetween: 10,
    //             loop: true,
    //             autoplay: 2000,
    //             nextButton: '.swiper-button-next',
    //             prevButton: '.swiper-button-prev',
    //         },

    //         480: {
    //             slidesPerView: 1,
    //             spaceBetween: 10,
    //             loop: true,
    //             autoplay: 2000,
    //             nextButton: '.swiper-button-next',
    //             prevButton: '.swiper-button-prev',
    //         },
    //     }
    // });

//

});

