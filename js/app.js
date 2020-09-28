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
const sections = document.querySelectorAll('section');
const section = document.querySelectorAll('.landing__container');
const navbarlinks = document.querySelectorAll('navbar-links');
console.log(navbar);

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
    sections.forEach(build_navbar_entry);
};
//builds navbar by creating <li> elements for the empty navbar ul and adds the link according to sections. 
function build_navbar_entry(section) {
    const title= section.dataset.nav;
    const listItem = document.createElement("li");
    const anchor =  document.createElement("A");
    const linkName = anchor.setAttribute('href','#' + section.id );
    //anchor.setAttribute('class',id);
    anchor.classList.add("navbar-link"+ "-" + section.id);
    anchor.appendChild(document.createTextNode(title));
    listItem.appendChild(anchor);
    navbar.appendChild(listItem);
    
}

//highlights the active section by adding the class called "your-active-class"
function makeActive(){ 
    for(const section of sections){
     //getBoundingClientRect() function, returns the position of the current section in the viewport.   
    const box= section.getBoundingClientRect();
    if(box.top <=110 && box.bottom >= 110){
        section.classList.add("your-active-class");
    } else {
        section.classList.remove("your-active-class");
        }
    }
}


/**
 * End Main Functions
 * Begin Events
 *
*/


// Build menu 

// Scroll to section on link click

// Set sections as active
// Make sections active
document.addEventListener("scroll", function() {
    makeActive();
  });

