/*              Swiper              */
/*==================================*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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