const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


const numbers = document.querySelectorAll('.rating__item-number'),
    lines = document.querySelectorAll('.rating__item-line .rating__item-color');

numbers.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});




//Validate 

$(document).ready(function(){
 
  $('.modal__close').on('click', function() {
    $('#modal').fadeOut('slow');
  });
   

    function validateForms(form){
        $(form).validate({
          rules: {
            name: {
              required: true,
              minlength: 2
            },
            email: {
              required: true,
              email: true
            },
            checkbox: {
              required: true
            }
          },
          messages: {
            name: {
              required: "Пожалуйста, введите свое имя",
              minlength: jQuery.validator.format("Введите {0} символа!")
            },
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            },
            checkbox: {
              required: "Пожалуйста, поставьте галочку"
            },
          }
      });
      };
  
      validateForms('.contacts__form');
      validateForms('#answerblank contacts__form');

      $('#answerblank contacts__form').submit(function(e) {
          e.preventDefault();

          if (!$(this).valid()) {
            return;
          }


          $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
          }).done(function() {
                $(this).find("input").val("");
                $('#modal').fadeIn('slow');

                $('form').trigger('reset');
          });
          return false;
      });
});
