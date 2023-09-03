
$('.carousel__iner').on('init', function(event, slick) {
    var currentSlide = slick.currentSlide;
    $(slick.$slides[currentSlide]).addClass('highlighted');
});

$('.carousel__iner').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $(slick.$slides[currentSlide]).removeClass('highlighted');
});

$('.carousel__iner').on('afterChange', function(event, slick, currentSlide) {
    $(slick.$slides[currentSlide]).addClass('highlighted');
});


$('.carousel__iner').slick({
    centerMode: true,
    centerPadding: '10px', // Устанавливаем отступы между слайдами
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"> <img src="icons/Right.png"></button>',
    nextArrow: '<button type="button" class="slick-next"> <img src="icons/Left.png"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });








const ghost1 = document.querySelector(".ghost-1");
const ghost2 = document.querySelector(".ghost-2");
const ghost3 = document.querySelector(".ghost-3");
const ghost4 = document.querySelector(".ghost-4");
const btnPrice = document.querySelectorAll(".price__menu__wrapper-item__btn");
const btnBack = document.querySelectorAll(".ghost-btnBack");


btnPrice[0].addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button 1 clicked");
    ghost1.classList.add("ghost-1-active");
});

btnPrice[1].addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button 2 clicked");
    ghost2.classList.add("ghost-2-active");
});

btnPrice[2].addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button 3 clicked");
    ghost3.classList.add("ghost-3-active");
});

btnPrice[3].addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button 4 clicked");
    ghost4.classList.add("ghost-4-active");
});


btnBack[0].addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button 1 clicked back");
    ghost1.classList.remove("ghost-1-active");
});

btnBack[1].addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button 2 clicked back");
    ghost2.classList.remove("ghost-2-active");
});

btnBack[2].addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button 3 clicked back");
    ghost3.classList.remove("ghost-3-active");
});

btnBack[3].addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button 4 clicked back");
    ghost4.classList.remove("ghost-4-active");
});



function validateForms(form) {
    var validator = $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите своё имя",
                minlength: jQuery.validator.format("Введите {0} символa!")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Пожалуйста, введите свой email",
                email: "Неправильно введен email"
            }
        }
    });

    // Удаление предыдущих сообщений об ошибках перед добавлением новых
    $(form).find('.error-message').remove();

    // Далее ваш код для добавления новых сообщений об ошибках
    // ...

    return validator;
}

validateForms('#consultation-form');
$('input[name=phone]').mask("+7 (999) 999-99-99");

//слайдер

