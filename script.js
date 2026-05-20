// Dark/Light Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme;

  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = nextTheme;

  icon.classList.add("flip");

  setTimeout(() => {
    icon.textContent = nextTheme === "dark" ? "☀️" : "🌙";
    icon.classList.remove("flip");
  }, 300);
});

//Sorting Buttons
let sortBy = null;
let sortDirection = "none";

const sortButtons = document.querySelectorAll(".filter-item");

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sortByValue = button.dataset.sort;

    if (sortBy === sortByValue) {
      sortDirection =
        sortDirection === "none"
          ? "asc"
          : sortDirection === "asc"
            ? "desc"
            : "none";
    } else {
      sortBy = sortByValue;
      sortDirection = "asc";
    }

    sortButtons.forEach((btn) => {
      btn.dataset.sortDirection = "none";
    });

    if (sortBy) {
      button.dataset.sortDirection = sortDirection;
    }
  });
});
