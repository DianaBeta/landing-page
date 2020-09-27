/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
document.body.onload = build_navbar()
// build the navbar

function build_navbar(){
    const sections = document.querySelectorAll('section');
    sections.forEach(build_navbar_entry);
};

function build_navbar_entry(section) {
    const title= section.dataset.nav;
    const listItem = document.createElement("li");
    const anchor =  document.createElement("A");
    anchor.setAttribute('href','#' + section.id );
    anchor.appendChild(document.createTextNode(title));
    listItem.appendChild(anchor);
    navbar.appendChild(listItem);
    console.log(listItem);
}


// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 

// Scroll to section on link click

// Set sections as active


