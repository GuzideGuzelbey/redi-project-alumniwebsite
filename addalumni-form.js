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

  // Create an object JSON with the collected information

  let newAlumni = {
    name: firstName + " " + lastName,
    email: emailContact,
    aboutYou: aboutYou,
    resume: resume,
    linkedin: linkedin,
    linkedinImageUrl: "./rediimages/linkedin.png",
    emailImageUrl : "./rediimages/mail.png",
    portfolioLink: "#",
    detailedinfo: [courseTypeValue, experienceLevelValue, locationValue, availabilityValue, typeOfWorkValue],
    skills: skills,
    course: courseTypeValue,
    experienceLevel: experienceLevelValue,
    location: locationValue,
    availability: availabilityValue,
    typeOfWork: typeOfWorkValue,
    imageSource: avatarPath,
    resumePath: resumePath,
  };

  alumniArray.push(newAlumni);  
}


function handleSaveAndContinue() {
  saveAlumni();
  let updatedAlumniString = JSON.stringify(alumniArray);
  localStorage.setItem("alumnis", updatedAlumniString);
  window.location.href = "index.html";
  // Remove the event listener after it's triggered
  saveAndContinueBtn.removeEventListener("click", handleSaveAndContinue);
}


