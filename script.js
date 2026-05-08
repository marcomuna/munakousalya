function showSidebar() {
  const sidebar = (document.querySelector(".sidebar").style.display = "flex");
}
function hideSidebar() {
  const sidebar = (document.querySelector(".sidebar").style.display = "none");
}

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
