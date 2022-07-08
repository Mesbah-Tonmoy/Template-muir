/*              Swiper              */
/*==================================*/
var swiper = new Swiper(".mySwiper", {
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
});

/*            Accordion             */
/*==================================*/
function accordion(pid, img){
    var pid = document.getElementById(pid);
    var img = document.getElementById(img);
    if (pid.className.indexOf("show") == -1) {
      pid.className += " show";
      img.src = "assets/media/Close.png";
    } else { 
      pid.className = pid.className.replace(" show", "");
      img.src = "assets/media/Open.png";
    }
  }