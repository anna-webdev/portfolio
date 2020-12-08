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
