
$(function(){
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:false,
  });

  
  $('.about-img-part').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2500,
    arrows:false,

    responsive:[

      {
        breakpoint:768,
        settings: {
          slidesToShow:2,
          slidesToScroll:2,
          infinite: true,
          dots:false
        }
      },

      {
        breakpoint:576,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
          infinite: true,
          dots:false
        }
      } 
    ]
  });

  $('.counter-up h1').counterUp({
    delay: 10,
    time: 1000
  });

$('.comment-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:false,
  autoplaySpeed: 2500,
  arrows:true,
  prevArrow:('.left-angle'),
  nextArrow:('.right-angle'),
  
  });
  $('.team-images-part').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed: 2500,
    arrows:false,
  
    responsive:[
      {
        breakpoint:768,
        settings: {
          slidesToShow:2,
          slidesToScroll:2,
          infinite: true,
          dots:false
        }
      },
      {
        breakpoint:576,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
          infinite: true,
          dots:false
        }
      }
      
    ]
  
    });
  });
    $(window).scroll(function(){
      var top=$(this).scrollTop()
      if(top>300){
        $(".navbar").addClass("sticky-menu")
      }
      else{
        $(".navbar").removeClass("sticky-menu")
      }

    if(top>300){
      $(".back-to-top").fadeIn(300)
    }
    else{
      $(".back-to-top").fadeOut(300) }
    });
  


    $(".back-to-top").click(function(){
      $("html,body").animate({scrollTop: 0},1000)

    });
    new VenoBox({
      selector: ".my-link"
  });

//scroll-spy & Smooth-scrolling//

var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 40
  }, 1000);
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 40;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});
