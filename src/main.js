// How To made for iframe script
/**
 * Get videos on load
 */
(function () {
    getVideos();
})();

/**
 * For each video player, create custom thumbnail or
 * use Youtube max resolution default thumbnail and create
 * iframe video.
 */
function getVideos() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        var id = v[n].getAttribute("data-id");

        var placeholder = v[n].hasAttribute("data-thumbnail")
            ? v[n].getAttribute("data-thumbnail")
            : "";

        if (placeholder.length) p.innerHTML = createCustomThumbail(placeholder);
        else p.innerHTML = createThumbail(id);

        v[n].appendChild(p);
        p.addEventListener("click", function () {
            var parent = this.parentNode;
            createIframe(parent, parent.getAttribute("data-id"));
        });
    }
}

/**
 * Create custom thumbnail from data-attribute provided url
 * @param {string} url
 * @return {string} The HTML containing the <img> tag
 */
function createCustomThumbail(url) {
    return (
        '<img class="youtube-thumbnail" src="' +
        url +
        '" alt="Youtube Preview" /><div class="youtube-play-btn"></div>'
    );
}

/**
 * Get Youtube default max resolution thumbnail
 * @param {string} id The Youtube video id
 * @return {string} The HTML containing the <img> tag
 */
function createThumbail(id) {
    return (
        '<img class="youtube-thumbnail" src="//i.ytimg.com/vi_webp/' +
        id +
        '/maxresdefault.webp" alt="Youtube Preview"><div class="youtube-play-btn"></div>'
    );
}

/**
 * Create and load iframe in Youtube container
 **/
function createIframe(v, id) {
    var iframe = document.createElement("iframe");
    console.log(v);
    iframe.setAttribute(
        "src",
        "//www.youtube.com/embed/" +
            id +
            "?autoplay=1&color=white&autohide=2&modestbranding=1&border=0&wmode=opaque&enablejsapi=1&showinfo=0&rel=0"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("class", "youtube-iframe");
    v.firstChild.replaceWith(iframe);
}

/** Pause video on modal close **/
$("#video-modal").on("hidden.bs.modal", function (e) {
    $(this).find("iframe").remove();
});

/** Pause video on modal close **/
$("#video-modal").on("show.bs.modal", function (e) {
    getVideos();
});

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

// slider-2
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
  reviewButton.addEventListener('click', function (e) {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('modal-open');
  });
});
