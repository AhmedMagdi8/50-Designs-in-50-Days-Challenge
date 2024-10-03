const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentNode.classList.toggle("active");
  });
});
