const themeToggle = document.querySelector(".theme-toggle");
const yearEl = document.getElementById("year");
const langButtons = document.querySelectorAll(".lang-toggle__btn");

const storedTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const storedLang = localStorage.getItem("lang") || "en";

function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme);
}

if (storedTheme) {
  applyTheme(storedTheme);
} else if (prefersLight) {
  applyTheme("light");
}

themeToggle?.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  applyTheme(isLight ? "dark" : "light");
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.getAttribute("data-lang"));
  });
});

applyLanguage(storedLang);

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
