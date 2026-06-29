/*==================== Mobile Menu ====================*/
// Selects the menu and menu button from the HTML
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

// Opens and closes the mobile menu
function toggleMenu() {
    navMenu.classList.toggle("nav__menu--open");
    document.body.classList.toggle("menu-open");

    // Changes menu icon when menu is opened or closed
    if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.innerHTML = '<i class="ri-close-line"></i>';
    } else {
        navToggle.innerHTML = '<i class="ri-menu-3-line"></i>';
    }
}

// Runs the toggleMenu function when menu icon is clicked
navToggle.addEventListener("click", toggleMenu);

// Closes the mobile menu after clicking a navigation link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("nav__menu--open");
        document.body.classList.remove("menu-open");
        navToggle.innerHTML = '<i class="ri-menu-3-line"></i>';
    });
});

/*==================== Header Scroll Effect ====================*/
// Adds shadow to header when user scrolls down
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.classList.add("header--scroll");
    } else {
        header.classList.remove("header--scroll");
    }
});

/*==================== Typewriter Effect ====================*/
// Texts that will appear one by one in the hero section
const typewriterTexts = [
    "Electrical Engineer",
    "Co-Founder @ Knowledge Khana",
    "Web Developer",
    "Video Editor",
    "Graphic Designer",
    "Builder"
];

// Tracks current text number
let currentTextIndex = 0;

// Tracks current character number
let charIndex = 0;

// Selects the typewriter element from HTML
const typewriterElement = document.getElementById("typewriter");

function typeEffect() {
    // Gets the current text from the array
    const currentText = typewriterTexts[currentTextIndex];

    // Shows characters from start to current character number
    typewriterElement.textContent = currentText.slice(0, charIndex);

    // Moves to next character
    charIndex++;

    // When full text is typed, move to next text after delay
    if (charIndex > currentText.length) {
        setTimeout(() => {
            charIndex = 0;
            currentTextIndex = (currentTextIndex + 1) % typewriterTexts.length;
        }, 1500);
    }

    // Runs this function again and again
    setTimeout(typeEffect, 100);
}

// Starts the typewriter animation
typeEffect();
