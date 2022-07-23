/*              Swiper              */
/*==================================*/
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

window.onload = toBottom;
var scroll70 = document.querySelector('.scroll-70');

function toBottom()
{
    scroll70.scrollTo(70, 0);
}