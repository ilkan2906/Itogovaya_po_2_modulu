// window.addEventListener('load', function() { 
//   setElementPosition();
// });

// window.addEventListener('resize', function() { 
//   setElementPosition();
// });

// function setElementPosition() {
//   var navElement = document.querySelector('nav'); 
//   var asideElement = document.querySelector('aside'); 
   
//   var navTop = window.innerHeight * 0.449735; 
//   var asideTop = window.innerHeight * 0.449735; 
   
//   navElement.style.top = navTop + 'px'; 
//   asideElement.style.top = asideTop + 'px'; 
// }




// Получаем header, nav и aside
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const aside = document.querySelector('aside');

// Получаем высоту header
const headerHeight = header.offsetHeight;

// Флаг для отслеживания состояния прикрепления элементов
let isSticky = false;

// Функция для прикрепления элементов к верхней части экрана с плавной анимацией
function stickyElements() {
  // Получаем позицию прокрутки
  const scrollPosition = window.scrollY || window.pageYOffset;

  // При скроллинге до конца header
  if (scrollPosition >= headerHeight) {
    if (!isSticky) {
      // Плавно прикрепляем nav
      nav.style.position = 'sticky';
      nav.style.top = '0';
      nav.style.transition = 'top 0.4s ease';

      // Плавно прикрепляем aside
      aside.style.position = 'sticky';
      aside.style.top = '0';
      aside.style.transition = 'top 0.4s ease';

      isSticky = true;
    }
  } else {
    if (isSticky) {
      // Открепляем nav с плавной анимацией
      nav.style.position = 'static';
      nav.style.transition = 'none';

      // Открепляем aside с плавной анимацией
      aside.style.position = 'static';
      aside.style.transition = 'none';

      isSticky = false;
    }
  }
}

// Слушаем событие прокрутки и вызываем функцию прикрепления элементов
window.addEventListener('scroll', stickyElements);