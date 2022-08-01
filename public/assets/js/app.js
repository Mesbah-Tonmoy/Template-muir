(function($) {
  "use strict";


  jQuery(document).ready(function(){

    muir_swiper();
    muir_isotope();
    muir_counterUp();
    //track_mouse_pointer();
    muir_magnific_popup();

    jQuery(window).load('body', function(){
      scroll_to();
    });
  });


/*==================================*/
/*              Swiper              */
/*==================================*/
function muir_swiper(){
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".numbering",
      type: 'custom',
      renderCustom: function (swiper, current, total) {
          return '0' + current + '<div id="line"></div>' + '0' + total; 
      },
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    scrollbar: {
      el: "#big",
      hide: false,
    },
  });

  var swiper = new Swiper(".mySwiperAuto", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: "#numbering5",
      type: 'custom',
      renderCustom: function (swiper, current, total) {
          return '0' + current + '<div id="line"></div>' + '0' + total; 
      },
    },
  });

  var swiper = new Swiper(".mySwiperAll", {
    slidesPerView: "All",
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".mySwiper6", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: "#numbering6",
      type: 'custom',
      renderCustom: function (swiper, current, total) {
          return '0' + current + '<div id="line"></div>' + '0' + total; 
      },
    },
    navigation: {
      nextEl: ".swiper-next",
    },
  });

  var swiper = new Swiper(".mySwiper7", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: "#numbering7",
      type: 'custom',
      renderCustom: function (swiper, current, total) {
          return '0' + current + '<div id="line"></div>' + '0' + total; 
      },
    },
    navigation: {
      nextEl: ".swiper-next",
    },
  });

  var swiper = new Swiper(".mySwiperPag", {
    loop: true,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });

  var swiper = new Swiper(".mySwiperPagAll", {
    loop: true,
    slidesPerView: 'All',
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
}

/*==================================*/
/*            Accordion             */
/*==================================*/

function accordion(pid, img){
    var pid = document.getElementById(pid);
    var img = document.getElementById(img);
    var show = document.querySelector('.show');
    if (pid.className.indexOf("show") == -1) {
      pid.className += " show";
      pid.style.display = "block";
      img.src = "assets/media/Close.png";
      show.className = show.className.replace(" show", "");
      show.style.display = "none";
      var img_id = show.getAttribute('data-id');
      document.getElementById(img_id).src = "assets/media/Open.png";
    } else { 
      pid.className = pid.className.replace(" show", "");
      pid.style.display = "none";
      img.src = "assets/media/Open.png";
    }
  }


  function accordion2(li, text, img_name){
    var li = document.getElementById(li);
    var active = document.querySelector('.active');
    var acc_p = document.getElementById('acc_p');
    var acc_img = document.getElementById('acc_img');

    active.className = active.className.replace("active", "");
    li.className += "active";
    acc_p.innerHTML = text;
    acc_img.src = 'assets/media/'+img_name;
}

/*==================================*/
/*              Scroll              */
/*==================================*/
// window.onload=scroll_to;
// function scroll_to()
// {
//   if (scroll70.length > 0) {
//     scroll70.scrollTo(70, 0);
//   }   
// }

/*==================================*/
/*           Mouse tracking         */
// /*==================================*/

// function track_mouse_pointer(){
//   var top2 = 0;
//   window.addEventListener("scroll", function(){ 
//       var top = this.scrollY;
//       top2 = parseInt(top, 10);
//   });
//   var $round_btn = $('.btn-5');
//   if ($round_btn.length > 0)
//   document.addEventListener("mousemove", function(e) {
//       var x = e.clientX;
//       var y = e.clientY;
//       var z = y + top2;
//       round_btn.style.left = x + "px";
//       round_btn.style.top = (z-50) + "px";
//   });
// }

/*==================================*/
/*              Isotope             */
/*==================================*/

function muir_isotope(){
        // init Isotope
        var $grid = $('.grid').isotope({
          // options
          });
          // filter items on button click
          $('.portfolio-menu').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
          });
          // filter items on button click active
          $('.portfolio-menu').on( 'click', 'li', function() {
              $('.active').removeClass('active');
              $(this).addClass('active');
          });
}

/*==================================*/
/*            Counter up            */
/*==================================*/

function muir_counterUp(){
  var $counter = $(".counter");
    if ($counter.length > 0){
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
    }
}

/*==================================*/
/*          Magnific Popup          */
/*==================================*/

function muir_magnific_popup(){
  $('.play').magnificPopup({
    type: 'iframe',
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

        patterns: {
            youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; }

            src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
            }
        },

        srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }
  });
}


})(jQuery);