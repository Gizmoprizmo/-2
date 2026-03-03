// Установка текущего года в футере
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Переключение темы (с сохранением в localStorage)
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// Форма обратной связи (демо-логика)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      if (formStatus) formStatus.textContent = "Пожалуйста, заполните все поля.";
      return;
    }

    // Тут можно отправлять на сервер (fetch), но по заданию достаточно показать работу формы
    if (formStatus) formStatus.textContent = "✅ Сообщение отправлено (демо). Спасибо!";
    contactForm.reset();
  });
}
