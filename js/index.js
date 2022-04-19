window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#menu').classList.toggle('active')
  })
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('#menu').classList.remove('active')
  })
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#search').addEventListener('click', function(){
    document.querySelector('#search-container').classList.toggle('search-container-active')
  })
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#search-cross').addEventListener('click', function(){
    document.querySelector('#search-container').classList.remove('search-container-active')
  })
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.header__dropdown-list').forEach(item => {
    new SimpleBar(item, {
      autoHide: false,
    });
  });

  document.querySelectorAll('.header__bottom-list-button').forEach(listBtn => {
    listBtn.addEventListener('click', function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector('.header__container-dropdown');

      document.querySelectorAll('.header__bottom-list-button').forEach(listBtn => {
        if (listBtn != btn) {
          listBtn.classList.remove('header__bottom-list-button--active');
        }
      });

      document.querySelectorAll('.header__container-dropdown').forEach(container => {
        if (container != dropdown) {
          container.classList.remove('header__container-dropdown--active');
        }
      })
      dropdown.classList.toggle('header__container-dropdown--active');
      btn.classList.toggle('header__bottom-list-button--active');
    })
  })

  document.querySelectorAll('.header__bottom-list-button').forEach(listBtn => {
    listBtn.addEventListener('mousedown', function (event) {
      event.preventDefault();
    })
  });

  const gallerySelect = document.querySelector('.gallery__select');
    const galleryChoices = new Choices(gallerySelect, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });

  var swiper = new Swiper(".gallery__swiper-container", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: false,
    spaceBetween: 45,
    breakpoints: {
      1281: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 25
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38
      },
      720: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 38
      }
    },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    
    navigation: {
      nextEl: ".gallery__swiper-btn-next",
      prevEl: ".gallery__swiper-btn-prev",
    },
  });

  {
    const swiper = new Swiper('.developments__swiper-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: false,
    spaceBetween: 50,
    breakpoints: {
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 25
      },
      720: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    },
    navigation: {
      nextEl: ".developments__btn-next",
      prevEl: ".developments__btn-prev",
      disabledClass: 'developments__btn-disabled',
    },

    pagination: {
      el: '.developments__pagination',
      clickable: true
    },
    });
  }

  {
    const swiper = new Swiper('.projects__swiper-container', {
    slidesPerView: 3,
    loop: false,
    spaceBetween: 50,
    breakpoints: {
      1700: {
        slidesPerView: 3,
        slidesPerGroup: 1
      },
      1590: {
        slidesPerView: 3,
        slidesPerGroup: 1
      },
      1280: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 34
      },
      720: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 39
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    },

    navigation: {
      nextEl: ".projects__btn-next",
      prevEl: ".projects__btn-prev",
    },
    });
  }

  $(".accordion") .accordion ({
    collapsible: true,
    heightStyle: "content",
    active: 7
  });

  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
  btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
  tabsBtn.classList.remove('tabs-item--active')});

  document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
      });
      });

      var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");

  im.mask(selector);

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30,
      },
      tel: {
        required: true,
        function: (name ,value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },
    messages: {
      name: {
        minLength: 'Имя должно содержать не менее 3 букв',
        required: 'Как вас зовут?',
        maxLength: 'Имя не должно привышать больше 20 букв',
      },

      tel: {
        required: 'Укажите ваш телефон'
      },
    },
  });

  ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("myMap", {
        center: [55.758468, 37.601088],
        zoom: 16
      });
  
      var placemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-24, -48]
      });
  
      myMap.geoObjects.add(placemark);
    }
});