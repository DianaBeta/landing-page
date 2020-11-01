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

//call goToTop method when the document is loaded, go to top goes to the start of the document when the button "Top"  is clicked
document.addEventListener('DOMContentLoaded',() => {
    goToTop();
    
}); 
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const section = document.querySelectorAll('.landing__container');
const add = document.querySelectorAll('.add');

function scrollSection(section){
    section.scrollIntoView();
}


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

    const title= section.dataset.nav; // access the dataset in sections
    const listItem = document.createElement("li");//creates a list element
    //const anchor =  document.createElement("a"); // creates an anchor element to be populated with a link
    //const linkName = anchor.setAttribute('href','#'+ section.id); // sets the link according to the section so that we can scroll to section on link click
    const linkDiv = document.createElement("div"); // creates a div that will serve as a link
    const linkFunction = linkDiv.addEventListener('click', () =>{
        scrollSection(section)
    });
    linkDiv.classList.add("navbar-link"+ "-" + section.id); // creates a class for each link (to be used in makeActive function to highlight the active item)
    linkDiv.appendChild(document.createTextNode(title)); //append a text node with the title to the anchor
    listItem.appendChild(linkDiv); //append anchor to the list item
    navbar.appendChild(listItem); //append list item to navbar
    
    

}

//highlights the active section by adding the class called "your-active-class" for sections and the class "active" in the navbar
function makeActive(){                     
    for(const section of sections){
     //add active class and highlight ("getBoundingClientRect()" function returns the size of an element and its position relative to the viewport)
    const box= section.getBoundingClientRect();// where is the section in the viewport, and how big is it?
    if(box.top <=110 && box.bottom >= 110){// if the section is between these numbers in the viewport then it means its active
        section.classList.add("your-active-class");
        document.querySelector(`.navbar-link-${section.id}`).classList.add("active");
    } else {
        //remove active class when not viewing the section, so that it removes the highlighting
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
const button=document.querySelector(".btn");

 //function that goes to the top of the document when the user presses the button   
  function goToTop(){
      button.addEventListener('click',() => {
      document.documentElement.scrollTop=0;
      document.body.scrollTop=0;
  }); }  

//when the user scrolls down from the top of the document, then show the button
  function showBtn(){
       
    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        button.classList.remove('hide');
    } else {
        button.classList.add('hide');
          }
    }



// Set sections as active
// Listen to scroll to make sections active and show button 
document.addEventListener("scroll", () => {
    makeActive();
    showBtn();
  }); 

