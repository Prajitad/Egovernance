const colors = [
    "linear-gradient(white,rgb(181, 194, 248))",
    "linear-gradient(white, rgb(170, 190, 248))",
    "linear-gradient(white, rgb(181, 191, 248))",
    "linear-gradient(white, rgb(195, 177, 236))"
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.background = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; 
}

setInterval(changeBackground, 6000);
