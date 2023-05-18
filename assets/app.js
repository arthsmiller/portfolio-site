/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
// import './bootstrap';


import '../node_modules/alpinejs/dist/cdn.js'

// fade in the whole page
window.onload = function() {
    document.body.classList.add("opacity-100");
};