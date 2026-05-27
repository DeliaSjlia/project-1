initTheme();

function initTheme() {
  const button = document.getElementById("theme-toggle");

  if (!button) {
    return;
  }

  const icon = document.getElementById("theme-icon");

  button.addEventListener("click", toggleTheme);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;

    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;

    icon.classList.add("flip");

    setTimeout(() => {
      icon.textContent = nextTheme === "dark" ? "☀️" : "🌙";

      icon.classList.remove("flip");
    }, 300);
  }
}
