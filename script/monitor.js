document.addEventListener('DOMContentLoaded', () => {
  let textBox = document.querySelector('.screen');
  let text = textBox.innerText;
  let newHTML = '';
  let count = 0;
  let j = 0;
  let timeout = 50;
  const popup = document.getElementById('popup');
  const openPopupBtn = document.getElementById('open-popup');
  const buttonsContainer = document.querySelector('.buttons');

  function initText() {
    newHTML = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "\n") {
        newHTML += '<span class="t">' + text[i] + '</span>' + "\n";
      } else {
        newHTML += '<span>' + text[i] + '</span>';
      }
    }
    textBox.innerHTML = newHTML;
    spans = textBox.querySelectorAll('span');
    count = 0;
    j = 0;
  }

  function typing_text() {
    spans[count].classList.add('visible');
    if (spans[count].innerText === ' ' || spans[count].innerHTML === ' ') {
      timeout = Math.floor(Math.random() * 1000);
      spans[count].classList.add('cursor');
    } else if (spans[count].innerText === "\r" || spans[count].innerText === "\n") {
      spans[count].classList.add('cursor');
      timeout = 1000;
    } else {
      timeout = 50;
    }
    if (count < text.length - 1) {
      setTimeout(() => {
        spans[count].classList.remove('cursor');
        count++;
        typing_text();
      }, timeout);
    } else {
      // Показываем кнопки после завершения печати текста
      buttonsContainer.style.display = 'flex';
buttonsContainer.style.justifyContent = 'center';
buttonsContainer.style.gap = '20px';
    }
  }

  openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    initText(); // Подготавливаем текст для печати
    typing_text(); // Запускаем анимацию печати текста
  });
});