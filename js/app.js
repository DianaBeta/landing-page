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
const sections = document.querySelectorAll('section');
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

// build the navbar

sections.forEach(build_navbar);

function build_navbar(section) {
    // get the title of the section (h2 heading)
    const title = section.dataset.nav;
    console.log(title);
    // create a list element
    const li = document.createElement("li");
    // write title of section in navbar element
    console.log(section)
    li.appendChild(document.createTextNode(title));
    // Add an event listener to navbar element 
    li.addEventListener('click', navigate_to_section(title));
    // append li to ul
    navbar.appendChild(li);

}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
function navigate_to_section(title) {
  return function(title){
    console.log(title);
  }

}

// Build menu 

// Scroll to section on link click

// Set sections as active


