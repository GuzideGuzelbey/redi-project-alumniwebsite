var alumnis = [
    { name: "Marcela Bazela", imageSource: "rediimages/marcela.png", course: "Javascript", portfolioLink: "#", linkedinUrl: "./rediimages/linkedin.png", email:"./rediimages/mail.png", 
    courseinfo: ["JavaScript", "User Interface Design", "Visual Design", "React.js"], experience: ["Junior (0-3 years)"], projects: ["Projects", "Portfolio"], locationofwork: ["Aarhus"], 
    availability: ["Available now"], typeofwork: ["Part-time", "Student Job", "Internship"] },
    { name: "Eleni Panou", imageSource: "rediimages/eleni.png", course: "UX/UI Design", portfolioLink: "#", linkedinUrl: "./rediimages/linkedin.png", email:"./rediimages/mail.png", 
    courseinfo: ["User Experience Design", "User Interface Design", "Prototyping"], experience: ["Mid-level (4-6 years)"], projects: ["Portfolio"], locationofwork: ["Aarhus", "Remote"], 
    availability: ["Available now"], typeofwork: ["Part-time", "Full-time"] },
    { name: "Güzide Güzelbey", imageSource: "rediimages/guzide.png", course: "Javascript", portfolioLink: "#", linkedinUrl: "./rediimages/linkedin.png", email:"./rediimages/mail.png",
    courseinfo: ["JavaScript", "Node.js", "React.js"], experience: ["Junior (0-3 years)"], projects: ["Projects"], locationofwork: ["Aarhus", "Copenhagen"], 
    availability: ["Available now"], typeofwork: ["Full-time", "Student Job", "Internship"] },
    { name: "Diana Leckova", imageSource: "rediimages/diana.png", course: "UX/UI Design", portfolioLink: "#", linkedinUrl: "./rediimages/linkedin.png", email:"./rediimages/mail.png", 
    courseinfo: ["User Experience Design", "User Interface Design", "Prototyping", "Usability Testing"], experience: ["Junior (0-3 years)"], projects: ["Portfolio"], locationofwork: ["Aarhus", "Remote"], 
    availability: ["Available now"], typeofwork: ["Part-time", "Full-time", "Student Job", "Internship"] },
    { name: "Monica Hernandez", imageSource: "rediimages/monica.png", course: "UX/UI Design", portfolioLink: "#", linkedinUrl: "./rediimages/linkedin.png", email:"./rediimages/mail.png",
    courseinfo: ["User Experience Design", "User Interface Design", "Prototyping", "Usability Testing"], experience: ["Junior (0-3 years)"], projects: ["Portfolio"], locationofwork: ["Aarhus", "Remote"], 
    availability: ["Available now"], typeofwork: ["Part-time", "Full-time", "Student Job", "Internship"] },
    { name: "Noemi Elias", imageSource: "rediimages/noemi.png", course: "UX/UI Design", portfolioLink: "#", linkedinUrl: "./rediimages/linkedin.png", email:"./rediimages/mail.png",
    courseinfo: ["User Experience Design", "User Interface Design", "Prototyping"], experience: ["Mid-level (4-6 years)"], projects: ["Portfolio"], locationofwork: ["Aarhus", "Remote"], 
    availability: ["Available now"], typeofwork: ["Part-time", "Full-time"]  },
];
//arrays to be used for filtering


//compare alumnis name field A to Z
function compareAZ(a, b) {
    return a.name.localeCompare(b.name);
  }


function SortAZ(){
    RemoveAllCards();
    alumnis.sort(compareAZ);
    RefreshPage();
}

//compare alumnis name field Z to A

function compareZA(a, b) {
    return b.name.localeCompare(a.name);
}

function SortZA(){
    RemoveAllCards();
    alumnis.sort(compareZA); /*sorts alumnis*/
    RefreshPage();
}

// deletes existing cards in alumniscardcontainer div for the last condition 

function RemoveAllCards(){
    const cardContainer = document.getElementById("alumnicardscontainer");
    var child = cardContainer.lastElementChild;  
    while (child) { 
        cardContainer.removeChild(child); 
        child = cardContainer.lastElementChild; 
    } 
}


// to get items in alumnis array from the local storage
//alumnis = localStorage.getItem("alumnis"); add after
// Marcela finishes her js code and you have to do more things


document.addEventListener("DOMContentLoaded", function () {
    RefreshPage();
});

function RefreshPage(){
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

                const linkedinUrl = document.createElement("img");
                linkedinUrl.classList.add("btn", "btn-social-icon");
                linkedinUrl.src = alumnis[j].linkedinUrl;
                linkedinUrl.alt = "linkedin";

                const email = document.createElement("img");
                email.classList.add("btn", "btn-link");
                email.src = alumnis[j].email;
                email.alt = "email";

                cardbody.appendChild(name);
                cardbody.appendChild(course);
                cardbody.appendChild(portfolioLink);
                cardbody.appendChild(reditext);
                cardbody.appendChild(linkedinUrl);
                cardbody.appendChild(email);

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



