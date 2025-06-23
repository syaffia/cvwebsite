const text = "I am an IT student with a genuine passion for tech and problem-solving. Whether it is troubleshooting systems, learning a new programming language, or diving into cloud concepts, I enjoy figuring things out and finding smart solutions. I have been working on certifications to strengthen my skills, and I am always looking for opportunities to grow and gain real-world experience.";

let index = 0;

function typeEffect() {
  if (index < text.length) {
    const currentChar = text.charAt(index);
    document.getElementById("typing").innerHTML += currentChar;
    index++;

    let delay = 20; /* update */

    if ([".", "!", "?"].includes(currentChar)) {
      delay = 600; /* long pause */
    } else if (currentChar === ",") {
      delay = 300; /* short pause */
    }

    setTimeout(typeEffect, delay);
  }
}

window.onload = typeEffect;

const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Disable Dark Mode ☀️";
  } else {
    toggleButton.textContent = "Enable Dark Mode 🌙";
  }
});


/* reveal animation on scroll */
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < revealElements.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = revealElements[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      revealElements[i].classList.add('active');
    } else {
      revealElements[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
