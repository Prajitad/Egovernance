const colors = [
    "linear-gradient(rgb(244, 165, 177),white)",
    "linear-gradient(white, rgb(240, 183, 236),white)",
    "linear-gradient(white, rgb(181, 191, 248))",
    "linear-gradient(white, rgb(185, 236, 177))"
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.background = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; // Loop through colors
}

setInterval(changeBackground, 4000);
