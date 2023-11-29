// Navigation-bar mobil no-scroll //

var checkbox = document.getElementById("nav-toggle");

checkbox.addEventListener("change", function () {
  document.body.classList.toggle("no-scroll", checkbox.checked);
});

// Accordion in the form //

var acc = document.getElementsByClassName("accordionForm");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Function to get the path of the selected photo and show a preview //
function previewImage(input) {
  var avatarPreview = document.getElementById("avatar-preview");

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      avatarPreview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}

// Function to obtain the path of the selected CV //
function previewResume(input) {
  console.log("Selected Resume: " + input.files[0].name);
}
