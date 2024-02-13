let prev = document.getElementById('slick-prev')
let next  = document.getElementById('slick-next')
$('.special-dishes-images').slick({
    infinite:true,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots:true,
    prevArrow:prev,
    nextArrow:next,
});
