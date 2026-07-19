const toggleTheme = () => {
  document.body.classList.toggle("light");
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  if(btn) btn.addEventListener("click", toggleTheme);
});
