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
