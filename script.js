// Mouse-following butterfly
const follower = document.getElementById('follower-butterfly');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function moveButterfly() {
    const currentX = follower.offsetLeft;
    const currentY = follower.offsetTop;

    const newX = currentX + (mouseX - currentX - 20) * 0.02;
    const newY = currentY + (mouseY - currentY - 10) * 0.02;

    follower.style.left = newX + 'px';
    follower.style.top = newY + 'px';

    requestAnimationFrame(moveButterfly);
}

moveButterfly();

// Cat click interactions
const cats = document.querySelectorAll('.cat');

cats.forEach(function(cat) {
    cat.addEventListener('click', function() {
        const bubble = cat.querySelector('.speech-bubble');

        bubble.classList.add('visible');
        cat.classList.add('bounce');

        setTimeout(function() {
            bubble.classList.remove('visible');
            cat.classList.remove('bounce');
        }, 2000);
    });
});