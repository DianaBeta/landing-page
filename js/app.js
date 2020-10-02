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
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
    
});
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const section = document.querySelectorAll('.landing__container');
//const navbarlinks = document.querySelectorAll('navbar-links');

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
// build the navbar when the page loads

function build_navbar(){
    //loops over the sections to create the navbar with the title from every section
    sections.forEach(build_navbar_entry)
};
//builds navbar by creating <li> elements for the empty navbar ul(unordered list) and adds the link according to sections. 
function build_navbar_entry(section) {
    const title= section.dataset.nav;
    const listItem = document.createElement("li");//creates a list element
    const anchor =  document.createElement("A"); // creates an anchor element to be populated with a link
    const linkName = anchor.setAttribute('href','#' + section.id ); // sets the link according to the section so that we can scroll to section on link click
    anchor.classList.add("navbar-link"+ "-" + section.id); // creates a class for each link
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
        document.querySelector(`.navbar-link-${section.id}`).classList.add("active");
    } else {
        //document.querySelector('A').classList.add("active");
        section.classList.remove("your-active-class");
        document.querySelector(`.navbar-link-${section.id}`).classList.remove("active");
        }
    }
}


/**
 * End Main Functions
 * Begin Events
 *
*/
//get the button
var button=document.querySelector(".btn");
//when the user scrolls down from the top of the document, then show the button
/*document.addEventListener("scroll", function() {
    showBtn()
  }); */
  function goToTop(){
      button.addEventListener('click',() => {
      document.documentElement.scrollTop=0;
  }); } showBtn()

function showBtn(){
  //  button.addEventListener('scroll',() => {
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        button.style.display = "block";
    } else {
        button.display= "none";
    }
}


// Set sections as active
// Make sections active
document.addEventListener("scroll", function() {
    makeActive();
  });

