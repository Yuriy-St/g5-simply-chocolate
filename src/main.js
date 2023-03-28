// slider
$('.responsive').slick({
  prevArrow: false,
  nextArrow: false,
  dots: true,
  infinite: false,
  speed: 300,
  adaptiveHeight: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  variableWidth: false, 

  responsive: [
    {
      breakpoint: 1200,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});


