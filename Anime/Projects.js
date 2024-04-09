


// ?????????????????????????????????????????????????????Navbar
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navbarCenter = document.querySelector(".navbar-center");

    hamburgerMenu.addEventListener("click", function() {
        navbarCenter.classList.toggle("active");
    });
});



// ?????????????????????????????????????????????????????Section-1

function swapImages(clickedImage) {
    var bigImage = document.querySelector('.big-image');
    var tempSrc = bigImage.src;
    bigImage.src = clickedImage.src;
    clickedImage.src = tempSrc;
}

function swapImages2(clickedImage) {
    var big2Image = document.querySelector('.big2-image');
    var tempSrc = big2Image.src;
    big2Image.src = clickedImage.src;
    clickedImage.src = tempSrc;
}

function swapImages3(clickedImage) {
    var big2Image = document.querySelector('.big3-image');
    var tempSrc = big2Image.src;
    big2Image.src = clickedImage.src;
    clickedImage.src = tempSrc;
}
