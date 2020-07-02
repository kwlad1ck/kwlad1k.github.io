$(document).ready(function(){
  $('.img-slider').slick({
  	arrows: true,
	  dots: false,
	  easing: 'ease',
	  autoplay: true,
	  autoplaySpeed: 5000,
	  draggable:true,
	  waitForAnimate: true,
	  prevArrow: '<button class="prev arrow-slider"></button>',
   nextArrow: '<button class="next arrow-slider"></button>',
  });
});

$(document).ready(function(){
  $('.features-slider').slick({
  arrows: true,
	 infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: '<button class="prev arrow-slider"></button>',
  nextArrow: '<button class="next arrow-slider"></button>',
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});