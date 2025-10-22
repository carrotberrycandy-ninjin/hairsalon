//ハンバーガーメニュー
$('.menu_btn').on('click', () => {
    $('body').toggleClass('on');
});

$('.inner a').on('click', () => {
    $('body').removeClass('on');
});
// $(window).on('resize', () => {
//     $('header').removeClass('on');
// })

//スライダー
$('.slider').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '30%',
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 519,
            settings: {
                centerPadding: '16px'
            }
        }
    ]
});

// 要素取得
const openBtn = document.getElementById("openContactModal");
const modal = document.getElementById("contact-modal");
const closeModal = document.getElementById("closeModal");
const closeThanks = document.getElementById("closeThanks");
const contactForm = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");
const formSection = document.getElementById("formSection");

// モーダルを開く
openBtn.addEventListener("click", () => {
    modal.style.display = "block";
    thankYouMessage.style.display = "none";
    formSection.style.display = "block";
});

// モーダルを閉じる
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

closeThanks.addEventListener("click", () => {
    modal.style.display = "none";
});

// フォーム送信イベント
contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 実際の送信はキャンセル
    formSection.style.display = "none";
    thankYouMessage.style.display = "block";
    contactForm.reset(); // 入力リセット
});


$(document).ready(function () {
    function fadeInOnScroll() {
        $('.fade-in').each(function () {
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            const offsetTop = $(this).offset().top;

            if (scroll + windowHeight > offsetTop + 100) {
                $(this).addClass('show');
            }
        });
    }

    // 最初に実行
    fadeInOnScroll();

    // スクロール時に実行
    $(window).on('scroll', function () {
        fadeInOnScroll();
    });
});
