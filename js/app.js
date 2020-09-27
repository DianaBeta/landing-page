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
    // create a list element
    const li = document.createElement("li");
    // write title of section in navbar element
    const rel_link = document.createElement("A");
    rel_link.setAttribute('href', '#'+ section.id);
    const text_link = document.createTextNode(title);
    rel_link.appendChild(text_link);
    console.log(section.id);
   

    li.appendChild(rel_link);

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


