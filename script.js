const btn = document.querySelector('input[type="button"]');
const select = document.getElementById("colorSelect");

btn.addEventListener("click", () => {
  // Get selected index
  const index = select.selectedIndex;

  // Remove option if any selected
  if (index >= 0) {
    select.remove(index);
  }
});

