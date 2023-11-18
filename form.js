document
  .getElementById("alumniForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let skills = document.getElementById("skills").value;
    let email = document.getElementById("email").value;
    let linkedin = document.getElementById("linkedin").value;

    console.log("Name:", name);
    console.log("Skills/Competencies:", skills);
    console.log("E-mail:", email);
    console.log("LinkedIn:", linkedin);
  });
