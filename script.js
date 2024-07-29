

const scroller = document.querySelector('.scroller');
const leftButton = document.querySelector('.scroll-left');
const rightButton = document.querySelector('.scroll-right');
let scrollPosition = 0;

leftButton.addEventListener('click', () => {
    if (scrollPosition > 0) {
        scrollPosition--;
        scroller.style.transform = `translateX(-${scrollPosition * 100}vw)`;
    } else {
        scrollPosition = scroller.children.length - 1;
        scroller.style.transform = `translateX(-${scrollPosition * 100}vw)`;
    }
});

rightButton.addEventListener('click', () => {
    if (scrollPosition < scroller.children.length - 1) {
        scrollPosition++;
        scroller.style.transform = `translateX(-${scrollPosition * 100}vw)`;
    } else {
        scrollPosition = 0;
        scroller.style.transform = `translateX(0)`;
    }
});



