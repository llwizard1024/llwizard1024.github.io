const translations = {
  en: {
    "meta.description":
      "Bogdan L'gotin — backend developer. PHP, Go, Laravel, C++, microservices, systems programming.",
    "header.name": "Bogdan L'gotin",
    "hero.name.first": "Bogdan",
    "hero.name.last": "L'gotin",
    "nav.aria": "Main navigation",
    "nav.work": "Experience",
    "nav.pets": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "lang.aria": "Language",
    "lang.en": "English",
    "lang.ru": "Russian",
    "theme.aria": "Toggle theme",
    "hero.eyebrow": "Backend developer · llwizard",
    "hero.intro":
      "I don't just write code — I solve problems that make life and work genuinely easier. I love watching an idea become a product and knowing I made the world a little more convenient.",
    "hero.cta": "My experience",
    "work.title": "Experience",
    "work.farma.meta": "2021–2024 · Backend developer",
    "work.farma.company": "Medexport–Northern Star LLC",
    "work.farma.desc":
      "Built and maintained the REST API for a pharmacy chain mobile app. Integrations, search, payments, and internal services — from code to production.",
    "work.farma.h1": "Full-text search with Elasticsearch + Laravel",
    "work.farma.h2": "CRM and marketing mechanics built from scratch",
    "work.farma.h3": "Payment systems and Yandex Go delivery integration",
    "work.farma.h4": "HR portal, Docker environment, server administration",
    "work.alean.meta": "2024–2026 · Lead backend developer",
    "work.alean.company": "National tour operator",
    "work.alean.desc":
      "PHP legacy, master-system integrations, and a mobile app. Designed architecture and extracted bottlenecks into dedicated services.",
    "work.alean.h1": "Go microservice — async adapter between monolith and SOAP",
    "work.alean.h2": "REST API for mobile app built from scratch",
    "work.alean.h3": "RabbitMQ integration, legacy refactoring",
    "work.alean.h4": "Docker environment improvements, critical local dev fixes",
    "pets.title": "Pet projects",
    "pets.lead": "Systems programming in C++ — to understand how things work under the hood.",
    "pets.poker.meta": "C++20 · networked multiplayer",
    "pets.poker.desc":
      "Texas Hold'em in the terminal: authoritative TCP server and FTXUI client with ASCII UI. All game logic on the server — no web stack.",
    "pets.poker.h1": "Lobby, rooms, side pots, all-in per Hold'em rules",
    "pets.poker.h2": "SQLite accounts, PBKDF2 password hashing",
    "pets.poker.h3": "JSON protocol over TCP, Catch2 tests",
    "pets.chat.meta": "C++20 · Linux · sockets",
    "pets.chat.desc":
      "Async multi-user TCP chat: epoll in edge-triggered mode, single thread, non-blocking I/O.",
    "pets.chat.h1": "Rooms, private messages, participant list",
    "pets.chat.h2": "Daemonization and file logging via spdlog",
    "pets.chat.h3": ".env configuration, graceful shutdown",
    "pets.shell.meta": "C++20 · POSIX · shell",
    "pets.shell.desc":
      "Interactive UNIX shell from scratch — to learn syscalls, terminal I/O, and process management.",
    "pets.shell.h1": "Raw mode, command history, tab completion",
    "pets.shell.h2": "Pipelines, built-in cd / pwd / export",
    "pets.shell.h3": "Ctrl+C and Ctrl+D handling",
    "about.title": "About",
    "about.text":
      "Over five years in backend development: e-commerce, pharmaceuticals, tourism. I design APIs, integrate external services, optimize databases, set up Docker environments, and calmly step into legacy — to deliver reliable, understandable solutions. Laravel monolith, Go microservice, queues and search — the right tool for the job, not hype. On the side, I'm into systems programming in C++: sockets, epoll, terminals, processes.",
    "about.stackLabel": "Stack",
    "about.stackAria": "Technologies",
    "about.learningTitle": "Currently learning",
    "contact.title": "Contact",
    "contact.github": "GitHub",
    "contact.email": "Email",
    "contact.telegram": "Telegram",
    "footer.copyright": "Bogdan L'gotin",
  },
  ru: {
    "meta.description":
      "Богдан Льготин — backend-разработчик. PHP, Go, Laravel, C++, микросервисы, системное программирование.",
    "header.name": "Богдан Льготин",
    "hero.name.first": "Богдан",
    "hero.name.last": "Льготин",
    "nav.aria": "Основная навигация",
    "nav.work": "Опыт",
    "nav.pets": "Проекты",
    "nav.about": "Обо мне",
    "nav.contact": "Контакты",
    "lang.aria": "Язык",
    "lang.en": "Английский",
    "lang.ru": "Русский",
    "theme.aria": "Переключить тему",
    "hero.eyebrow": "Backend-разработчик · llwizard",
    "hero.intro":
      "Не просто пишу код — решаю задачи, от которых реально становится проще жить и работать. Люблю видеть, как идея превращается в продукт, и знать, что сделал мир чуть удобнее.",
    "hero.cta": "Мой опыт",
    "work.title": "Опыт",
    "work.farma.meta": "2021–2024 · Backend-разработчик",
    "work.farma.company": "ООО «Медэкспорт-Северная звезда»",
    "work.farma.desc":
      "Развитие и поддержка REST API мобильного приложения аптечной сети. Интеграции, поиск, платежи и внутренние сервисы — от кода до продакшена.",
    "work.farma.h1": "Полнотекстовый поиск на Elasticsearch + Laravel",
    "work.farma.h2": "CRM и маркетинговые механики с нуля",
    "work.farma.h3": "Платёжные системы и доставка Yandex Go",
    "work.farma.h4": "HR-портал, Docker-окружение, администрирование сервера",
    "work.alean.meta": "2024–2026 · Ведущий backend-разработчик",
    "work.alean.company": "Национальный туроператор",
    "work.alean.desc":
      "Legacy на PHP, интеграции с мастер-системой и мобильное приложение. Проектировал архитектуру, выносил узкие места в отдельные сервисы.",
    "work.alean.h1": "Микросервис на Go — асинхронный адаптер между монолитом и SOAP",
    "work.alean.h2": "REST API для мобильного приложения с нуля",
    "work.alean.h3": "Интеграция с RabbitMQ, рефакторинг legacy",
    "work.alean.h4": "Доработка Docker-окружения, критические фиксы локальной среды",
    "pets.title": "Пет-проекты",
    "pets.lead": "Системное программирование на C++ — для понимания того, как всё работает под капотом.",
    "pets.poker.meta": "C++20 · сетевой multiplayer",
    "pets.poker.desc":
      "Texas Hold'em в терминале: авторитарный TCP-сервер и клиент с ASCII-интерфейсом на FTXUI. Вся игровая логика на сервере — без веб-стека.",
    "pets.poker.h1": "Лобби, комнаты, side pots, all-in по правилам Hold'em",
    "pets.poker.h2": "Аккаунты в SQLite, хеширование паролей PBKDF2",
    "pets.poker.h3": "JSON-протокол поверх TCP, тесты на Catch2",
    "pets.chat.meta": "C++20 · Linux · сокеты",
    "pets.chat.desc":
      "Асинхронный многопользовательский чат на TCP: epoll в edge-triggered режиме, один поток, неблокирующий I/O.",
    "pets.chat.h1": "Комнаты, личные сообщения, список участников",
    "pets.chat.h2": "Демонизация и логирование в файл через spdlog",
    "pets.chat.h3": "Конфигурация через .env, graceful shutdown",
    "pets.shell.meta": "C++20 · POSIX · shell",
    "pets.shell.desc":
      "Интерактивная UNIX-оболочка с нуля — чтобы разобраться в syscall'ах, терминале и управлении процессами.",
    "pets.shell.h1": "Raw mode, история команд, tab completion",
    "pets.shell.h2": "Пайплайны, встроенные cd / pwd / export",
    "pets.shell.h3": "Обработка Ctrl+C и Ctrl+D",
    "about.title": "Обо мне",
    "about.text":
      "Более пяти лет в backend-разработке: e-commerce, фармацевтика, туризм. Проектирую API, встраиваю внешние сервисы, оптимизирую базы, поднимаю Docker-окружения и спокойно захожу в legacy — чтобы на выходе было надёжное и понятное решение. Монолит на Laravel, микросервис на Go, очереди и поиск — инструмент под задачу, не ради хайпа. Параллельно увлекаюсь системным программированием на C++: сокеты, epoll, терминал, процессы.",
    "about.stackLabel": "Стек",
    "about.stackAria": "Технологии",
    "about.learningTitle": "Сейчас изучаю",
    "contact.title": "Контакты",
    "contact.github": "GitHub",
    "contact.email": "Email",
    "contact.telegram": "Telegram",
    "footer.copyright": "Богдан Льготин",
  },
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] !== undefined) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (dict[key] !== undefined) {
      el.setAttribute("title", dict[key]);
    }
  });

  const meta = document.querySelector('meta[name="description"]');
  if (meta && dict["meta.description"]) {
    meta.setAttribute("content", dict["meta.description"]);
  }

  document.title = dict["footer.copyright"];

  document.querySelectorAll(".lang-toggle__btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("lang", lang);
}
