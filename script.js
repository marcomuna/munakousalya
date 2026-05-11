function showSidebar() {
  const sidebar = (document.querySelector(".sidebar").style.display = "flex");
}
function hideSidebar() {
  const sidebar = (document.querySelector(".sidebar").style.display = "none");
}
/* Close sidebar after clicking menu links */
const sidebarLinks = document.querySelectorAll(".sidebar a");

sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    hideSidebar();
  });
});
const sidebarButton = document.querySelectorAll(".theme");
sidebarButton.forEach(button => {
  button.addEventListener("click", () => {
    hideSidebar();
  });
});
// =========================================================================
// Typewrite effect
// =========================================================================
const words = [
  "Software Developer",
  "Flutter Developer",
  "3D Designer (Blender)",
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
  currentWord = words[wordIndex];

  if (!isDeleting) {
    typing.textContent = currentWord.substring(0, charIndex++);
  } else {
    typing.textContent = currentWord.substring(0, charIndex--);
  }

  let speed = 120;

  if (isDeleting) {
    speed = 60;
  }

  if (charIndex === currentWord.length + 1) {
    isDeleting = true;
    speed = 1500;
  }

  if (charIndex === 0) {
    isDeleting = false;
    wordIndex++;

    if (wordIndex === words.length) {
      wordIndex = 0;
    }
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

  // ===========================================================================
  // theme toggle
  // ===========================================================================
 const themes = document.querySelectorAll(".theme");

themes.forEach(theme => {
  theme.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = theme.querySelector(".theme-icon");

    if (document.body.classList.contains("dark")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      icon.style.color = "white"
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      icon.style.color = "black"
    }

  });
});

// =============================================================================
// Email js logic
// =============================================================================
const API_KEY = "XktT6LTmiWxXV-9TU";
const SERVICE_KEY = "service_e5l3ux7";
emailjs.init(API_KEY);

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    // Send message to YOU
    emailjs.sendForm(
        SERVICE_KEY,
        "template_ivk63df",
        this
    )

    .then(() => {

        // Send auto reply to visitor
        emailjs.sendForm(
           SERVICE_KEY,
            "template_f12r7kc",
            this
        );

        alert("Message Sent Successfully ✅");

        form.reset();

    })

    .catch((error) => {

        alert("Failed ❌");

        console.log(error);

    });

});


// =============================================================================
// scroll animation
// =============================================================================
// ==========================================================================
// Scroll Animation using Intersection Observer
// ==========================================================================

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    // Show animation when element enters screen
    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

    // Remove animation when element leaves screen
    else{

      entry.target.classList.remove("show");

    }

  });

},{
  
  // Animation starts when 15% visible
  threshold: 0.15

});

// Select all animated elements
const hiddenElements = document.querySelectorAll(
  ".autoShow, .autoShowRight, .autoShowLeft"
);

// Observe each element
hiddenElements.forEach((el) => observer.observe(el));