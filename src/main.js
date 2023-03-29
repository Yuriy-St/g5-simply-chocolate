// slider
$('.responsive').slick({
    prevArrow: false,
    nextArrow: false,
    dots: true,
    infinite: false,
    speed: 300,
    adaptiveHeight: true,
    slidesToScroll: 1,
    slidesToShow: 4,
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

// Gallery
const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});

(() => {
    const images = document.querySelectorAll('.gallery-link');
    images.forEach(el => {
        const img = el.querySelector('img');
        el.href = a;
    });
})();

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
            for (var t = this; t && 1 === t.nodeType;) {
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
    })
});





