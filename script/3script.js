document.getElementById('imageToggle').addEventListener('change', function(e) {
  const image = document.querySelector('.toggle-image');
  const button = document.querySelector('.start-button');

  if (e.target.checked) {
    image.style.filter = 'grayscale(0)';
    button.dataset.active = "true"; // Активируем кнопку
	button.removeAttribute('disabled'); // Разблокировать кнопку
  } else {
    image.style.filter = 'grayscale(100%)';
    button.dataset.active = "false"; // Деактивируем кнопку
	button.setAttribute('disabled', 'disabled'); // Заблокировать кнопку
  }
});

document.querySelector('.start-button').addEventListener('click', function() {
  if (this.dataset.active === "true") {
    window.open('https://t.me/kvestportal', '_blank');
  }
});