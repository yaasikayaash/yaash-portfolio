// Welcome message in console
console.log("Welcome to Yaash's Portfolio!");


// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Project card interaction
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function(card) {

    card.addEventListener("click", function() {

        card.style.transform = "scale(1.02)";

        setTimeout(function() {
            card.style.transform = "";
        }, 200);

    });

});