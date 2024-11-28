const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const itemWidth = 420; // Ширина зображення + відступ (400px + 20px)

function updateCarousel() {
  // Безперервна прокрутка
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Кнопки навігації
prevButton.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});


// Забезпечення безперервності
track.addEventListener('mouseleave', () => {
  if (isDragging) endDrag();
});


// Кнопка догори
const scrollToTop = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    scrollToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Розкриття додаткового тексту в "Про нас"
document.getElementById("more-info-btn").addEventListener("click", function () {
  const moreInfo = document.getElementById("more-info");
  const btn = this;

  if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
    moreInfo.style.display = "block";
    btn.textContent = "Згорнути";
  } else {
    moreInfo.style.display = "none";
    btn.textContent = "Дізнатися більше";
  }
});

// Кнопка для показу додаткових послуг
const showMoreBtn = document.getElementById("show-more-btn");
const hiddenServices = document.getElementById("hidden-services");

showMoreBtn.addEventListener("click", () => {
  if (hiddenServices.style.display === "none" || hiddenServices.style.display === "") {
    hiddenServices.style.display = "grid"; // Показати додаткові карточки
    showMoreBtn.textContent = "Згорнути";
  } else {
    hiddenServices.style.display = "none"; // Сховати додаткові карточки
    showMoreBtn.textContent = "Дізнатися більше";
  }
});


// Вибір усіх посилань у меню
const menuLinks = document.querySelectorAll('.navbar a[href^="#"]'); // Вибираємо тільки посилання з href, що починається з #

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Вимкнути стандартну дію

    // Знайти секцію за атрибутом href
    const targetId = link.getAttribute('href').substring(1); // Видаляємо символ #
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Плавна прокрутка до верхньої частини секції
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Секція з ідентифікатором ${targetId} не знайдена`);
    }
  });
});