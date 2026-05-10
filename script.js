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