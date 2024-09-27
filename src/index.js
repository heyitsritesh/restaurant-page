console.log('Project Started!');

import home from './home.js';
import menu from './menu.js';
import about from './about.js';

const content = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

// Load home.js on page load
(function () {
    home();
})();

// Logic to reset page content
function resetContent() {
    content.innerHTML = '';
}

// Buttoned tabs logic
homeBtn.addEventListener('click', () => {
    resetContent();
    home();
});

menuBtn.addEventListener('click', () => {
    resetContent();
    menu();
});

aboutBtn.addEventListener('click', () => {
    resetContent();
    about();
});
