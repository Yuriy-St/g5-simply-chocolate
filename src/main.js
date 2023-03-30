// general slider params
const generalSliderValues = {
  prevArrow: false,
  nextArrow: false,
  infinite: false,
  speed: 300,
  adaptiveHeight: true,
  variableWidth: false,
};

const responsiveSliderPar = {
  responsiveSliders: [
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

  responsiveSliders2: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

// slider-1
$('.responsive').slick(
  generalSliderValues,
  (generalSliderValues.dots = true),
  (generalSliderValues.slidesToShow = 3),
  (generalSliderValues.slidesToScroll = 1),
  (generalSliderValues.responsive = responsiveSliderPar.responsiveSliders)
);

// Gallery
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

$('.responsive-sellers').slick(
  generalSliderValues,
  (generalSliderValues.dots = false),
  (generalSliderValues.responsive = responsiveSliderPar.responsiveSliders2)
);
// ---------------------------------------------------------------------------------

// modal
!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
        Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-backdrop-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close'),
    reviewButton = document.querySelector('.review-button');

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
              люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
              Нужно подстраховаться. */
      e.preventDefault();
      document.body.classList.add('modal-open');
      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
              и будем искать модальное окно с таким же атрибутом. */
      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      /* После того как нашли нужное модальное окно, добавим классы
              подложке и окну чтобы показать их. */
      modalElem.classList.add('active');
      overlay.classList.add('active');
    }); // end click
  }); // end foreach

  // закрытие по крестику
  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');
      document.body.classList.remove('modal-open');
      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });
  }); // end foreach

  // закрытие по esc
  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.js-backdrop-modal').classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    },
    false
  );

  // Закрытие оверлея
  overlay.addEventListener('click', function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('modal-open');
  });

  // Закрытие первого модального когда открываю второй в Reviews
  $(function () {
    $('#review-modal-form').submit(function (e) {
      e.preventDefault();
      $('#review-button-1').attr('data-modal', '2').addClass('js-open-modal');

      setTimeout(() => {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
        document.body.classList.remove('modal-open');
        $('.reviews-feedback-modals').addClass('active');
      }, 300);
    });
  });

  // Закрытие первого модального когда открываю второй в Sellers
  $(function () {
    $('#sellers-modal-form').submit(function (e) {
      e.preventDefault();
      $('#sellers-button-1').attr('data-modal', '4').addClass('js-open-modal');

      setTimeout(() => {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
        document.body.classList.remove('modal-open');
        $('.seller-feedback-modals').addClass('active');
      }, 300);
    });
  });
});

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
