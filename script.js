document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 120,
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("mobileMenu");
  const menuIcon = document.querySelector(".icon");
  const closeBtn = document.querySelector(".close-modal");

  // Открытие модального окна
  menuIcon.addEventListener("click", function () {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокируем скролл страницы
  });

  // Закрытие модального окна
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Закрытие при клике вне окна
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Закрытие при клике на пункт меню
  document.querySelectorAll(".modal-link").forEach((link) => {
    link.addEventListener("click", function () {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  });
});
