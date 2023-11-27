var checkbox = document.getElementById("check");

checkbox.addEventListener("change", function () {
  document.body.classList.toggle("no-scroll", checkbox.checked);
});
