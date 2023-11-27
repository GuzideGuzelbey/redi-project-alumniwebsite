let alumnis = [
    { name: "Marcela Bazela", imageSource: "rediimages/marcela.png", course: "Javascript", portfolioLink: "#", linkedin: "http://google.com", linkedinImageUrl: "./images/linkedin_form.png", email:"test@gmail.com", emailImageUrl:"./rediimages/mail.png", 
    detailedinfo: ["Javascript Basic", "User Interface Design", "Visual Design", "Angular", "React.js", "Junior (0-3 years)", "Projects", "Portfolio", "Aarhus", "Available now", "Part-time", "Student Job", "Internship"] },
    { name: "Eleni Panou", imageSource: "rediimages/eleni.png", course: "UX/UI Design", portfolioLink: "#", linkedin: "http://google.com", linkedinImageUrl: "./images/linkedin_form.png", emailImageUrl:"./rediimages/mail.png", 
    detailedinfo: ["User Experience Design", "User Interface Design", "Prototyping", "Mid-level (4-6 years)", "Portfolio", "Aarhus", "Remote", 
     "Available now","Part-time", "Full-time"] },
    { name: "Güzide Güzelbey", imageSource: "rediimages/guzide.png", course: "Javascript", portfolioLink: "#", linkedin: "http://google.com", linkedinImageUrl: "./images/linkedin_form.png", email:"test@gmail.com", emailImageUrl:"./rediimages/mail.png",
    detailedinfo: ["Javascript Basic", "Node.js", "React.js", "Junior (0-3 years)", "Projects", "Aarhus", "Copenhagen", "Start Date","Full-time", "Student Job", "Internship"] },
    { name: "Diana Leckova", imageSource: "rediimages/diana.png", course: "UX/UI Design", portfolioLink: "#", linkedin: "http://google.com", linkedinImageUrl: "./images/linkedin_form.png", email:"test@gmail.com", emailImageUrl:"./rediimages/mail.png", 
    detailedinfo: ["User Experience Design", "User Interface Design", "Prototyping", "Usability Testing", "Junior (0-3 years)", "Portfolio", "Aarhus", "Remote", 
    "Available now", "Part-time", "Full-time", "Student Job", "Internship"] },
    { name: "Monica Hernandez", imageSource: "rediimages/monica.png", course: "UX/UI Design", portfolioLink: "#", linkedin: "http://google.com", linkedinImageUrl: "./images/linkedin_form.png", email:"test@gmail.com", emailImageUrl:"./rediimages/mail.png",
    detailedinfo: ["User Experience Design", "User Interface Design", "Prototyping", "Usability Testing",  "Junior (0-3 years)", "Portfolio", "Aarhus", "Remote", 
     "Available now","Part-time", "Full-time", "Student Job", "Internship"] },
    { name: "Noemi Elias", imageSource: "rediimages/noemi.png", course: "UX/UI Design", portfolioLink: "#", linkedin: "http://google.com", linkedinImageUrl: "./images/linkedin_form.png", email:"test@gmail.com", emailImageUrl:"./rediimages/mail.png",
    detailedinfo: ["User Experience Design", "User Interface Design", "Prototyping", "Available now", "Mid-level (4-6 years)", "Portfolio","Aarhus", "Remote", "Part-time", "Full-time"] },
];



  let activeFilters = [];

  function courseInfoFilter(type){
    RemoveAllCards();
    let filteredalumnis = [];

    if(activeFilters.includes(type.innerHTML)){
        activeFilters = activeFilters.filter(function (filter) {
            return filter !== type.innerHTML;
        });
    }
    else{
        activeFilters.push(type.innerHTML);
    }

    if(activeFilters.length == 0){
        RefreshPage(alumnis);
        return;
    }
    
// filtering with intersection of more than one option

    for(let i = 0; i < alumnis.length; i++){
        var isAllExist = true;
        for(let j = 0; j < activeFilters.length; j++){
            if(!alumnis[i].detailedinfo.includes(activeFilters[j])){
                isAllExist = false;
                break;
            }
        }   
        if(isAllExist){
            filteredalumnis.push(alumnis[i]);
        }     
    }

    
    
    RefreshPage(filteredalumnis);
  }
  
  
/*------------------------- SORT ------------------------ */
//compare alumnis name field A to Z
function compareAZ(a, b) {
    return a.name.localeCompare(b.name);
  }


function SortAZ(){
    RemoveAllCards();
    alumnis.sort(compareAZ);
    RefreshPage(alumnis);
}

//compare alumnis name field Z to A

function compareZA(a, b) {
    return b.name.localeCompare(a.name);
}

function SortZA(){
    RemoveAllCards();
    alumnis.sort(compareZA); /*sorts alumnis*/
    RefreshPage(alumnis);
}

// deletes existing cards in alumniscardcontainer div for the last condition 

function RemoveAllCards(){
    const cardContainer = document.getElementById("alumnicardscontainer");
    let child = cardContainer.lastElementChild;  
    while (child) { 
        cardContainer.removeChild(child); 
        child = cardContainer.lastElementChild; 
    } 
}


// to get items in alumnis array from the local storage
// alumnis = localStorage.getItem("alumnis"); 
// add after Marcela finishes her js code and you have to do more things


document.addEventListener("DOMContentLoaded", function () {
    let alumniString = localStorage.getItem("alumnis");
    let alumniArray = alumniString ? JSON.parse(alumniString) : alumnis;
    RefreshPage(alumniArray);
});

function RefreshPage(alumnis){
    const cardContainer = document.getElementById("alumnicardscontainer");
    var cardIndex = 0;
    var numberofRows = Math.ceil(alumnis.length / 3);
    // Loop through the array and create cards
    for(var i = 0; i < numberofRows; i++){
        const row = document.createElement("div");
        row.className = "row";
        
        const col1 = document.createElement("div");
        col1.className = "col-4";
        const col2 = document.createElement("div");
        col2.className = "col-4";
        const col3 = document.createElement("div");
        col3.className = "col-4";

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        cardContainer.appendChild(row);

        for(var j = cardIndex; j < cardIndex + 3; j++){
            if(j < alumnis.length){
                const card = document.createElement("div");
                card.classList.add("card", "text-center", "border-0", "mt-3");

                const img = document.createElement("img");
                img.classList.add("img-fluid", "rounded-circle");
                img.src = alumnis[j].imageSource;

                card.appendChild(img);

                const cardbody = document.createElement("div");
                cardbody.className = "card-body";

                const name = document.createElement("h4");
                name.className = "card-title";
                name.textContent = alumnis[j].name;

                const course = document.createElement("p");
                course.className = "card-text";
                course.textContent = alumnis[j].course;

                const portfolioLink = document.createElement("a");
                portfolioLink.classList.add("btn", "btn-secondary");
                portfolioLink.href = alumnis[j].portfolioLink;
                portfolioLink.textContent = "Portfolio";

                const reditext = document.createElement("p");
                reditext.classList.add("card-text", "redi");
                reditext.textContent = "ReDi to Work";

                const linkedinImageUrl = document.createElement("a");
                linkedinImageUrl.classList.add("btn");
                linkedinImageUrl.href = alumnis[j].linkedin;

                const linkedinImage = document.createElement("img");
                linkedinImage.classList.add("btn", "btn-social-icon");
                linkedinImage.src = alumnis[j].linkedinImageUrl;
                linkedinImage.alt = "linkedin";
                linkedinImageUrl.appendChild(linkedinImage);

                const emailImageUrl = document.createElement("a");
                emailImageUrl.classList.add("btn", "btn-link");
                emailImageUrl.href = "mailto:" + alumnis[j].email;
                
                const emailImage = document.createElement("img");
                emailImage.src = alumnis[j].emailImageUrl;
                emailImage.alt = "emailImageUrl";
                emailImageUrl.appendChild(emailImage);

                cardbody.appendChild(name);
                cardbody.appendChild(course);
                cardbody.appendChild(portfolioLink);
                cardbody.appendChild(reditext);
                cardbody.appendChild(linkedinImageUrl);
                cardbody.appendChild(emailImageUrl);

                card.appendChild(cardbody);

                if(j % 3 == 0){
                    col1.appendChild(card);
                }
                else if(j % 3 == 1){
                    col2.appendChild(card);
                }
                else{
                    col3.appendChild(card);
                }
            }
        }
        cardIndex+=3;
    }
}


function NavigateToAddAlumni(){
    let alumniString = localStorage.getItem("alumnis");
    let alumniArray = alumniString ? JSON.parse(alumniString) : alumnis;
    localStorage.setItem("alumnis",JSON.stringify(alumniArray));
    window.location.href = "addAlumni-form.html"; 
}


