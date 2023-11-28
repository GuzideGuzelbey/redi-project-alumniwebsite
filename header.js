var checkbox = document.getElementById("nav-toggle");

checkbox.addEventListener("change", function () {
  document.body.classList.toggle("no-scroll", checkbox.checked);
});
