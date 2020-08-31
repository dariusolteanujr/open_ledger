// SCROLL OPACITY

const NAVIGATION = document.getElementById('navigation');

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        NAVIGATION.classList.remove('top');
    } else {
        NAVIGATION.classList.add('top');
    }
}