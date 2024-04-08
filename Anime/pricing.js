


// ?????????????????????????????????????????????????????Navbar
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navbarCenter = document.querySelector(".navbar-center");

    hamburgerMenu.addEventListener("click", function() {
        navbarCenter.classList.toggle("active");
    });
});







// ?????????????????????????????????????????????????????Section-2
document.addEventListener("DOMContentLoaded", function() {
    const consultationBtn = document.getElementById("consultation-btn");
    const designBtn = document.getElementById("design-btn");
    const constructionBtn = document.getElementById("construction-btn");
    
    const division1 = document.querySelector(".division1");
    const division2 = document.querySelector(".division2");
    const division3 = document.querySelector(".division3");
    
    consultationBtn.addEventListener("click", function() {
        division1.classList.add("active");
        division2.classList.remove("active");
        division3.classList.remove("active");
    });
    
    designBtn.addEventListener("click", function() {
        division1.classList.remove("active");
        division2.classList.add("active");
        division3.classList.remove("active");
    });
    
    constructionBtn.addEventListener("click", function() {
        division1.classList.remove("active");
        division2.classList.remove("active");
        division3.classList.add("active");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.buttons-row button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.style.backgroundColor = ''; // Reset background color of all buttons
                btn.style.color = 'white'; // Reset text color of all buttons
            });
            this.style.backgroundColor = '#2E2E2E'; // Set background color of clicked button to black
            this.style.color = '#FF3C00'; // Set text color of clicked button to orange
        });
    });
});
