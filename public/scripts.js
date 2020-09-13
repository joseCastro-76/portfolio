let isOpen = false;

const dropDown = document.getElementById('dropDown');
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');

function toggleMenu() {
    isOpen = !isOpen;

    if(isOpen) {
        hide(hamburger);
        show(dropDown);
        show(close);
    } else {
        hide(close);
        hide(dropDown);
        show(hamburger);
    }
}

function show(elem){
    elem.classList.remove('hidden');
    elem.classList.add('block');
}

function hide(elem) {
    elem.classList.remove('block');
    elem.classList.add('hidden');
}