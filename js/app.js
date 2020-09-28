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
console.log(section);

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

function build_navbar_entry(section) {
    const title= section.dataset.nav;
    const listItem = document.createElement("li");
    const anchor =  document.createElement("A");
    anchor.setAttribute('href','#' + section.id );
    anchor.appendChild(document.createTextNode(title));
    listItem.appendChild(anchor);
    navbar.appendChild(listItem);
}


// Add class 'active' to section when near top of viewport
//make an event listener on scroll element that uses class list in the function body
//GOAL add event listeners to each section= the event is scroll
//function= changes the css by changing the active class
// we need to focus in each active section change the old active section to inactive and change it to the current class in focus
//class= active class;
//remove the property active class from the no longer active section
//1.add an event listener to section 2 that makes the background orange, at first section one can stay orange too but then the goal
// is orange ( not hardcoding)
//2 is everything works then we need to loop over the sections to highlight every active one
// Scroll to anchor ID using scrollTO event

/*var section2 = document.querySelectorAll('section')[1];
section2.addEventListener("scroll", function(e) {
     console.log("scroll triggered");
});*/
function makeActive(){ 
    //const section= document.querySelector('#section1');
    for(const section of sections){
    const listofClasses= section.classList;
    console.log(listofClasses);
    const box= section.getBoundingClientRect();
    if(box.top <=110 && box.bottom >= 110){
    //section.style.backgroundColor = 'orange';
    section.classList.add("your-active-class");
        } else {
    section.classList.remove("your-active-class");
        }
    }
}

    
    /*function makeActive(){
    for(const section of sections){
    const box= section.getBoundingClientRect();
        if(box.top <=150 && box.bottom >= 150) {
        //Apply active state on the current section and correponding Nav link.
            sections.classList.add("your-active-class");
            console.log("the active class is"+ activeClass);
            } else { 
            sections.classList.remove("your-active-class");
        //Remove active state from other section and corresponding Nav link.
            }
        }
    }
    */

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

