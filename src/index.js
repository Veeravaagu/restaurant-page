// Import statements
import { appendHome } from './home';
import { appendMenu } from './menu';
import { appendContact } from './contact';

// Function to create the main content container
function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

// Function to create the fixed navigation content
function fixedContent() {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    // Create Home navigation item
    const homeContainer = createNavItem("Home", appendHome);

    // Create Menu navigation item
    const menuContainer = createNavItem("Menu", appendMenu);

    // Create About navigation item
    const aboutContainer = createNavItem("About", appendContact);

    // Append navigation items to the header container
    headerContainer.appendChild(homeContainer);
    headerContainer.appendChild(menuContainer);
    headerContainer.appendChild(aboutContainer);

    // Append the header container to the body
    document.body.appendChild(headerContainer);

    return headerContainer;
}

// Function to create a navigation item
function createNavItem(text, callback) {
    const navItem = document.createElement('span');
    navItem.classList.add('current-nav');
    navItem.innerText = text;
    navItem.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        currentNav(navItem);
        callback();
    });
    return navItem;
}

// Function to set the active navigation item
function currentNav(navigation) {
    const nav = document.querySelectorAll(".current-nav");

    nav.forEach((navItem) => {
        if (navItem !== navigation) {
            navItem.classList.remove("active");
        }
    });

    navigation.classList.add("active");
}

// Function to set up the landing page with fixed navigation and main content
function landingPage() {
    const content = document.getElementById("content");
    content.appendChild(fixedContent());
    content.appendChild(createMain());
    currentNav(document.querySelector(".current-nav"));
    appendHome(); 
}

// Initialize the landing page
landingPage();
