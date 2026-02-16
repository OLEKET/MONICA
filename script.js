// Typing Effect
const textArray = ["Web Developer", "ICT Student", "Tech Innovator", "Problem Solver"];
let typingElement = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeEffect();
});

// Dark/Light Mode
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
