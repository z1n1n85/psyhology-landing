$(function(){
    $('.slider').slick({
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                slidesToShow: 1
                }
            }
        ]
    })
})