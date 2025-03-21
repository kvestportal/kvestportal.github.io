// Получаем элементы для первого окна
const openPopupBtn = document.getElementById('open-popup');
const popup = document.getElementById('popup');
const blueButton = document.querySelector('.blue-button');
const redButton = document.querySelector('.red-button');



// Обработчики для первого окна
openPopupBtn.addEventListener('click', () => popup.style.display = 'block');

redButton.addEventListener('click', () => showPage(event, 'page3'));

blueButton.addEventListener('click', (event) => {
    // Скрытие попапа
    popup.style.display = 'none';
    
    // Переход на страницу 2
    showPage(event, 'page2');
});


