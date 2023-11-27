let alumniString = localStorage.getItem("alumnis");
let alumniArray = alumniString ? JSON.parse(alumniString) : [];

// Function to save a new alumni

function saveAlumni() {
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let emailContact = document.getElementById("email").value;
  let aboutYou = document.getElementById("about-you").value;
  let resume = document.getElementById("resume").value;
  let linkedin = document.getElementById("linkedin").value;
  let skills = document.getElementById("skills").value;

  let courseType = document.querySelector('input[name="courseType"]:checked');
  let courseTypeValue = courseType ? courseType.value : null;

  let experienceLevel = document.querySelector(
    'input[name="experience_Level"]:checked'
  );
  let experienceLevelValue = experienceLevel ? experienceLevel.value : null;

  let location = document.querySelector('input[name="location"]:checked');
  let locationValue = location ? location.value : null;

  let availability = document.querySelector(
    'input[name="availability"]:checked'
  );
  let availabilityValue = availability ? availability.value : null;

  let typeOfWork = document.querySelector('input[name="typeofWork"]:checked');
  let typeOfWorkValue = typeOfWork ? typeOfWork.value : null;

  let avatarPath = document.getElementById("upload-photo").value;
  let resumePath = document.getElementById("resume").value;
}

// Create an object JSON with the collected information

let newAlumni = {
  firstName: firstName,
  lastName: lastName,
  emailContact: emailContact,
  aboutYou: aboutYou,
  resume: resume,
  linkedin: linkedin,
  skills: skills,
  courseType: courseTypeValue,
  experienceLevel: experienceLevelValue,
  location: locationValue,
  availability: availabilityValue,
  typeOfWork: typeOfWorkValue,
  avatarPath: avatarPath,
  resumePath: resumePath,
};

alumniArray.push(newAlumni);
let updatedAlumniString = JSON.stringify(alumniArray);
localStorage.setItem("alumnis", updatedAlumniString);

let saveAndContinueBtn = document.getElementById("saveAndContinueBtn");

function handleSaveAndContinue() {
  saveAlumni();
  window.location.href = "overview.html";
  // Remove the event listener after it's triggered
  saveAndContinueBtn.removeEventListener("click", handleSaveAndContinue);
}

saveAndContinueBtn.addEventListener("click", handleSaveAndContinue);
