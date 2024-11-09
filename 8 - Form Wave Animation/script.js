const labels = document.querySelectorAll(".form-control label");
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((l, idx) => {
      return `<span style="transition-delay:${idx * 50}ms">${l}</span>`;
    })
    .join("");
});
