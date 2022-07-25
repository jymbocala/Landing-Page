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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


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

// build the nav
/**
 *
 * 
 * 
 *  
 */

//selects all sections in the html
const allSections = document.querySelectorAll('.section_group');
//select ul in navbar
const navList = document.querySelector('#navbar__list');

//loop through each section
for (const section of allSections) {
    // console.log(section.getAttribute('data-nav'));
    const sectionId = section.id;
    const newA = document.createElement('a'); // create new <a> tag
    const newAText = section.getAttribute('data-nav'); // a variable that set text of each <li> item as the data-nav in each section
    const textNode = document.createTextNode(newAText); //append text node to new <a> tag
    newA.appendChild(textNode);
    const newLi = document.createElement('li'); //create new <li>, with a class to be used for styling

    newLi.classList.add('menu__link');
    newA.href = '#' + sectionId; // set new <a> tag's href with the section id
    newLi.appendChild(newA); // append new <a> within new <li>, then add it to navList
    navList.appendChild(newLi);

// scroll into view sections
    // console.log(newA);
    newA.addEventListener('click', function (event) {
        event.preventDefault();
        section.scrollIntoView ({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// SCROLL
// 1. add event listeners to each link in navbar
//      click event
// 2. function callback
//      call prevent default behaviour for clicking links (before)
//      get the target id (sections in the html)
// 3.   use scrollintoview w/ target id    



// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', highlight); // highlight section in viewport to yellow
// function to add/remove #your-active-class in each section
function highlight() { 
     for (i = 0; i < allSections.length; i++) {
         if(!isVisible(allSections[i])){
             allSections[i].classList.remove('your-active-class');
         } else {
             allSections[i].classList.add('your-active-class');
         }
     }
 }
// function to define the sections' position in viewport
function isVisible(element) { 
     let bounding = element.getBoundingClientRect();
     return (
         bounding.top + 300 >= 0 &&
         bounding.left >= 0 &&
         bounding.bottom <= (window.innerHeight) + 200 &&
         bounding.right <= (window.innerWidth)
     );
 };
 

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
 
// Set sections as active





