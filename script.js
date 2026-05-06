// Dark/Light Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateIcon(savedTheme);
}

function updateIcon(theme) {
  icon.textContent = theme === "dark" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";

  icon.classList.add("flip");

  setTimeout(() => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);

    icon.classList.remove("flip");
  }, 120);
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
    updateSortIcons();
  });
});

function updateSortIcons() {
  sortButtons.forEach((button) => {
    const icon = button.querySelector("span");
    const sortByValue = button.dataset.sort;

    if (sortBy !== sortByValue || sortDirection === "none") {
      icon.textContent = "⇅";
    } else if (sortDirection === "asc") {
      icon.textContent = "↑";
    } else {
      icon.textContent = "↓";
    }
  });
}
