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
    console.log(section.getAttribute('data-nav'));
    // create new <a> tag
    var newA = document.createElement('a');
    // a variable that set text of each <li> item as the data-nav in each section
    var newAText = section.getAttribute('data-nav');

    //append text node to new <a> tag
    var textNode = document.createTextNode(newAText);
    newA.appendChild(textNode);

    //create new <li>, with a class to be used for styling
    var newLi = document.createElement('li');
    newLi.classList.add('navbar_item');

    // set new <a> tag's href with the section id
    newA.href = '#' + section.id;

    // append new <a> within new <li>, then add it to navList
    newLi.appendChild(newA);
    navList.appendChild(newLi);    
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

