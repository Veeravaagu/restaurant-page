/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendContact: () => (/* binding */ appendContact)
/* harmony export */ });
// Function to create the contact content
function createContact(){
    
    const about = document.createElement('p');
    about.classList.add('about-us');
    about.innerText = `Benvenuti a Pizziamo, dove il cuore dell'Italia incontra l'anima della nostra cucina. Non siamo solo una pizzeria; siamo una storia, una passione e una famiglia.

    Fondata da Lorenzo Russo, un italiano di nascita con un amore per i sapori autentici, Pizziamo è la realizzazione di un sogno che dura da una vita. Cresciuto tra l'aroma del basilico fresco e il sibilo del forno per pizza, Lorenzo porta un pezzo della sua eredità in ogni fetta che serviamo.
    
    Da Pizziamo, crediamo in più che ottima pizza. Crediamo nella creazione di momenti - momenti di gioia, di connessione e di assaporare i piaceri semplici della vita. Le nostre ricette, tramandate di generazione in generazione, riflettono il calore delle cucine italiane e l'amore che mettiamo in ogni piatto.
    
    Entra in Pizziamo, e non sei solo un cliente; fai parte della nostra famiglia allargata. Unisciti a noi in un viaggio culinario in cui ogni morso racconta una storia e ogni pasto è una celebrazione di tradizione e innovazione.
    
    Grazie per far parte della nostra storia. Buon Appetito!`

    return about;
}


// Function to append the contact content to the main container
function appendContact(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendHome: () => (/* binding */ appendHome)
/* harmony export */ });
// Function to create the home section
function createHome() {
    // Create a container for the home section
    const home = document.createElement('div');
    home.classList.add('home-container');

    // Create the restaurant name element
    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = "Pizziamo";

    // Create the restaurant catchphrase element
    const restaurantCatchPhrase = document.createElement('p');
    restaurantCatchPhrase.classList.add('restaurant-catch-phrase');
    restaurantCatchPhrase.textContent = "Ristorante Pizzaiolo d'Eccellenza";

    // Create an underline element for visual separation
    const underline = document.createElement('div');
    underline.classList.add('underline');

    // Create the restaurant description element
    const restaurantDescription = document.createElement('p');
    restaurantDescription.classList.add('restaurantDescription');
    restaurantDescription.textContent = "Assapora la Fetta, Gusta la Tradizione!";

    // Append the created elements to the home container
    home.appendChild(restaurantName);
    home.appendChild(restaurantCatchPhrase);
    home.appendChild(underline);
    home.appendChild(restaurantDescription);

    // Return the completed home container
    return home;
}

// Function to append the home section to the main container
function appendHome() {
    // Get the main container element
    const main = document.getElementById("main");
    
    // Clear existing content in the main container
    main.textContent = "";
    
    // Append the home section to the main container
    main.appendChild(createHome());
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendMenu: () => (/* binding */ appendMenu)
/* harmony export */ });
// Function to create the menu section
function createMenu() {
    // Sample data for menu items
    const menuData = [
        { name: "Fresca", description: "Pomodoro fresco, mozzarella, peperoni colorati, pomodorini e basilico profumato.", cost: '$20' },
        { name: "Quattro Formaggi", description: "Una deliziosa combinazione di quattro formaggi - mozzarella, gorgonzola, parmigiano e fontina - su una ricca salsa di pomodoro.", cost: '$20' },
        { name: "Funghi e Prosciutto", description: "Gusta il sapore di questa pizza con un perfetto equilibrio di funghi terrosi, prosciutto saporito, mozzarella e salsa di pomodoro.", cost: '$20' }
    ];

    // Create a container for the menu section
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Create the restaurant name element (assuming it's common for all sections)
    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = "Pizziamo";

    // Create the menu title element
    const menuTitle = document.createElement('p');
    menuTitle.classList.add('menu');
    menuTitle.textContent = "Menu";

    // Create a thick underline for visual separation
    const thickUnderline = document.createElement('div');
    thickUnderline.classList.add('thick-underline');

    // Append the common elements to the menu container
    menuContainer.appendChild(restaurantName);
    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(thickUnderline);

    // Iterate through each menu item and create corresponding elements
    menuData.forEach(itemData => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('menu-item-container');

        const itemName = document.createElement('p');
        itemName.classList.add('dishes');
        itemName.textContent = itemData.name;

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('dishes-description');
        itemDescription.textContent = itemData.description;

        const thinUnderline = document.createElement('div');
        thinUnderline.classList.add('thin-underline');

        const itemCost = document.createElement('p');
        itemCost.classList.add('cost');
        itemCost.textContent = itemData.cost;

        // Append individual menu item elements to the item container
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemCost);
        itemContainer.appendChild(thinUnderline);

        // Append the item container to the menu container
        menuContainer.appendChild(itemContainer);
    });

    // Return the completed menu container
    return menuContainer;
}

// Function to append the menu section to the main container
function appendMenu() {
    // Get the main container element
    const main = document.getElementById("main");
    
    // Clear existing content in the main container
    main.textContent = "";
    
    // Append the menu section to the main container
    main.appendChild(createMenu());
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
// Import statements




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
    const homeContainer = createNavItem("Home", _home__WEBPACK_IMPORTED_MODULE_0__.appendHome);

    // Create Menu navigation item
    const menuContainer = createNavItem("Menu", _menu__WEBPACK_IMPORTED_MODULE_1__.appendMenu);

    // Create About navigation item
    const aboutContainer = createNavItem("About", _contact__WEBPACK_IMPORTED_MODULE_2__.appendContact);

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
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.appendHome)(); 
}

// Initialize the landing page
landingPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSUFBMEk7O0FBRTFJO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhIQUE4SDtBQUN4SSxVQUFVLHVMQUF1TDtBQUNqTSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDb0M7QUFDQTtBQUNNOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRCw2Q0FBVTs7QUFFMUQ7QUFDQSxnREFBZ0QsNkNBQVU7O0FBRTFEO0FBQ0Esa0RBQWtELG1EQUFhOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVU7QUFDZDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgY29udGFjdCBjb250ZW50XG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCl7XG4gICAgXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdXMnKTtcbiAgICBhYm91dC5pbm5lclRleHQgPSBgQmVudmVudXRpIGEgUGl6emlhbW8sIGRvdmUgaWwgY3VvcmUgZGVsbCdJdGFsaWEgaW5jb250cmEgbCdhbmltYSBkZWxsYSBub3N0cmEgY3VjaW5hLiBOb24gc2lhbW8gc29sbyB1bmEgcGl6emVyaWE7IHNpYW1vIHVuYSBzdG9yaWEsIHVuYSBwYXNzaW9uZSBlIHVuYSBmYW1pZ2xpYS5cblxuICAgIEZvbmRhdGEgZGEgTG9yZW56byBSdXNzbywgdW4gaXRhbGlhbm8gZGkgbmFzY2l0YSBjb24gdW4gYW1vcmUgcGVyIGkgc2Fwb3JpIGF1dGVudGljaSwgUGl6emlhbW8gw6ggbGEgcmVhbGl6emF6aW9uZSBkaSB1biBzb2dubyBjaGUgZHVyYSBkYSB1bmEgdml0YS4gQ3Jlc2NpdXRvIHRyYSBsJ2Fyb21hIGRlbCBiYXNpbGljbyBmcmVzY28gZSBpbCBzaWJpbG8gZGVsIGZvcm5vIHBlciBwaXp6YSwgTG9yZW56byBwb3J0YSB1biBwZXp6byBkZWxsYSBzdWEgZXJlZGl0w6AgaW4gb2duaSBmZXR0YSBjaGUgc2VydmlhbW8uXG4gICAgXG4gICAgRGEgUGl6emlhbW8sIGNyZWRpYW1vIGluIHBpw7kgY2hlIG90dGltYSBwaXp6YS4gQ3JlZGlhbW8gbmVsbGEgY3JlYXppb25lIGRpIG1vbWVudGkgLSBtb21lbnRpIGRpIGdpb2lhLCBkaSBjb25uZXNzaW9uZSBlIGRpIGFzc2Fwb3JhcmUgaSBwaWFjZXJpIHNlbXBsaWNpIGRlbGxhIHZpdGEuIExlIG5vc3RyZSByaWNldHRlLCB0cmFtYW5kYXRlIGRpIGdlbmVyYXppb25lIGluIGdlbmVyYXppb25lLCByaWZsZXR0b25vIGlsIGNhbG9yZSBkZWxsZSBjdWNpbmUgaXRhbGlhbmUgZSBsJ2Ftb3JlIGNoZSBtZXR0aWFtbyBpbiBvZ25pIHBpYXR0by5cbiAgICBcbiAgICBFbnRyYSBpbiBQaXp6aWFtbywgZSBub24gc2VpIHNvbG8gdW4gY2xpZW50ZTsgZmFpIHBhcnRlIGRlbGxhIG5vc3RyYSBmYW1pZ2xpYSBhbGxhcmdhdGEuIFVuaXNjaXRpIGEgbm9pIGluIHVuIHZpYWdnaW8gY3VsaW5hcmlvIGluIGN1aSBvZ25pIG1vcnNvIHJhY2NvbnRhIHVuYSBzdG9yaWEgZSBvZ25pIHBhc3RvIMOoIHVuYSBjZWxlYnJhemlvbmUgZGkgdHJhZGl6aW9uZSBlIGlubm92YXppb25lLlxuICAgIFxuICAgIEdyYXppZSBwZXIgZmFyIHBhcnRlIGRlbGxhIG5vc3RyYSBzdG9yaWEuIEJ1b24gQXBwZXRpdG8hYFxuXG4gICAgcmV0dXJuIGFib3V0O1xufVxuXG5cbi8vIEZ1bmN0aW9uIHRvIGFwcGVuZCB0aGUgY29udGFjdCBjb250ZW50IHRvIHRoZSBtYWluIGNvbnRhaW5lclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENvbnRhY3QoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn0iLCIvLyBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIGhvbWUgc2VjdGlvblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICAvLyBDcmVhdGUgYSBjb250YWluZXIgZm9yIHRoZSBob21lIHNlY3Rpb25cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSByZXN0YXVyYW50IG5hbWUgZWxlbWVudFxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LW5hbWUnKTtcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiUGl6emlhbW9cIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgcmVzdGF1cmFudCBjYXRjaHBocmFzZSBlbGVtZW50XG4gICAgY29uc3QgcmVzdGF1cmFudENhdGNoUGhyYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJlc3RhdXJhbnRDYXRjaFBocmFzZS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LWNhdGNoLXBocmFzZScpO1xuICAgIHJlc3RhdXJhbnRDYXRjaFBocmFzZS50ZXh0Q29udGVudCA9IFwiUmlzdG9yYW50ZSBQaXp6YWlvbG8gZCdFY2NlbGxlbnphXCI7XG5cbiAgICAvLyBDcmVhdGUgYW4gdW5kZXJsaW5lIGVsZW1lbnQgZm9yIHZpc3VhbCBzZXBhcmF0aW9uXG4gICAgY29uc3QgdW5kZXJsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdW5kZXJsaW5lLmNsYXNzTGlzdC5hZGQoJ3VuZGVybGluZScpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSByZXN0YXVyYW50IGRlc2NyaXB0aW9uIGVsZW1lbnRcbiAgICBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnREZXNjcmlwdGlvbicpO1xuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQXNzYXBvcmEgbGEgRmV0dGEsIEd1c3RhIGxhIFRyYWRpemlvbmUhXCI7XG5cbiAgICAvLyBBcHBlbmQgdGhlIGNyZWF0ZWQgZWxlbWVudHMgdG8gdGhlIGhvbWUgY29udGFpbmVyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50Q2F0Y2hQaHJhc2UpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQodW5kZXJsaW5lKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjcmlwdGlvbik7XG5cbiAgICAvLyBSZXR1cm4gdGhlIGNvbXBsZXRlZCBob21lIGNvbnRhaW5lclxuICAgIHJldHVybiBob21lO1xufVxuXG4vLyBGdW5jdGlvbiB0byBhcHBlbmQgdGhlIGhvbWUgc2VjdGlvbiB0byB0aGUgbWFpbiBjb250YWluZXJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRIb21lKCkge1xuICAgIC8vIEdldCB0aGUgbWFpbiBjb250YWluZXIgZWxlbWVudFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgXG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudCBpbiB0aGUgbWFpbiBjb250YWluZXJcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBcbiAgICAvLyBBcHBlbmQgdGhlIGhvbWUgc2VjdGlvbiB0byB0aGUgbWFpbiBjb250YWluZXJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG4iLCIvLyBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIG1lbnUgc2VjdGlvblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICAvLyBTYW1wbGUgZGF0YSBmb3IgbWVudSBpdGVtc1xuICAgIGNvbnN0IG1lbnVEYXRhID0gW1xuICAgICAgICB7IG5hbWU6IFwiRnJlc2NhXCIsIGRlc2NyaXB0aW9uOiBcIlBvbW9kb3JvIGZyZXNjbywgbW96emFyZWxsYSwgcGVwZXJvbmkgY29sb3JhdGksIHBvbW9kb3JpbmkgZSBiYXNpbGljbyBwcm9mdW1hdG8uXCIsIGNvc3Q6ICckMjAnIH0sXG4gICAgICAgIHsgbmFtZTogXCJRdWF0dHJvIEZvcm1hZ2dpXCIsIGRlc2NyaXB0aW9uOiBcIlVuYSBkZWxpemlvc2EgY29tYmluYXppb25lIGRpIHF1YXR0cm8gZm9ybWFnZ2kgLSBtb3p6YXJlbGxhLCBnb3Jnb256b2xhLCBwYXJtaWdpYW5vIGUgZm9udGluYSAtIHN1IHVuYSByaWNjYSBzYWxzYSBkaSBwb21vZG9yby5cIiwgY29zdDogJyQyMCcgfSxcbiAgICAgICAgeyBuYW1lOiBcIkZ1bmdoaSBlIFByb3NjaXV0dG9cIiwgZGVzY3JpcHRpb246IFwiR3VzdGEgaWwgc2Fwb3JlIGRpIHF1ZXN0YSBwaXp6YSBjb24gdW4gcGVyZmV0dG8gZXF1aWxpYnJpbyBkaSBmdW5naGkgdGVycm9zaSwgcHJvc2NpdXR0byBzYXBvcml0bywgbW96emFyZWxsYSBlIHNhbHNhIGRpIHBvbW9kb3JvLlwiLCBjb3N0OiAnJDIwJyB9XG4gICAgXTtcblxuICAgIC8vIENyZWF0ZSBhIGNvbnRhaW5lciBmb3IgdGhlIG1lbnUgc2VjdGlvblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHJlc3RhdXJhbnQgbmFtZSBlbGVtZW50IChhc3N1bWluZyBpdCdzIGNvbW1vbiBmb3IgYWxsIHNlY3Rpb25zKVxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LW5hbWUnKTtcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiUGl6emlhbW9cIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgbWVudSB0aXRsZSBlbGVtZW50XG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgICAvLyBDcmVhdGUgYSB0aGljayB1bmRlcmxpbmUgZm9yIHZpc3VhbCBzZXBhcmF0aW9uXG4gICAgY29uc3QgdGhpY2tVbmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlja1VuZGVybGluZS5jbGFzc0xpc3QuYWRkKCd0aGljay11bmRlcmxpbmUnKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgY29tbW9uIGVsZW1lbnRzIHRvIHRoZSBtZW51IGNvbnRhaW5lclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaWNrVW5kZXJsaW5lKTtcblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIG1lbnUgaXRlbSBhbmQgY3JlYXRlIGNvcnJlc3BvbmRpbmcgZWxlbWVudHNcbiAgICBtZW51RGF0YS5mb3JFYWNoKGl0ZW1EYXRhID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnZGlzaGVzJyk7XG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbURhdGEubmFtZTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkaXNoZXMtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbURhdGEuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgdGhpblVuZGVybGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGluVW5kZXJsaW5lLmNsYXNzTGlzdC5hZGQoJ3RoaW4tdW5kZXJsaW5lJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbUNvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1Db3N0LmNsYXNzTGlzdC5hZGQoJ2Nvc3QnKTtcbiAgICAgICAgaXRlbUNvc3QudGV4dENvbnRlbnQgPSBpdGVtRGF0YS5jb3N0O1xuXG4gICAgICAgIC8vIEFwcGVuZCBpbmRpdmlkdWFsIG1lbnUgaXRlbSBlbGVtZW50cyB0byB0aGUgaXRlbSBjb250YWluZXJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQ29zdCk7XG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpblVuZGVybGluZSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBpdGVtIGNvbnRhaW5lciB0byB0aGUgbWVudSBjb250YWluZXJcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIC8vIFJldHVybiB0aGUgY29tcGxldGVkIG1lbnUgY29udGFpbmVyXG4gICAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGFwcGVuZCB0aGUgbWVudSBzZWN0aW9uIHRvIHRoZSBtYWluIGNvbnRhaW5lclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZE1lbnUoKSB7XG4gICAgLy8gR2V0IHRoZSBtYWluIGNvbnRhaW5lciBlbGVtZW50XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBcbiAgICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50IGluIHRoZSBtYWluIGNvbnRhaW5lclxuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIFxuICAgIC8vIEFwcGVuZCB0aGUgbWVudSBzZWN0aW9uIHRvIHRoZSBtYWluIGNvbnRhaW5lclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gSW1wb3J0IHN0YXRlbWVudHNcbmltcG9ydCB7IGFwcGVuZEhvbWUgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgYXBwZW5kTWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBhcHBlbmRDb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIGZpeGVkIG5hdmlnYXRpb24gY29udGVudFxuZnVuY3Rpb24gZml4ZWRDb250ZW50KCkge1xuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGFpbmVyJyk7XG5cbiAgICAvLyBDcmVhdGUgSG9tZSBuYXZpZ2F0aW9uIGl0ZW1cbiAgICBjb25zdCBob21lQ29udGFpbmVyID0gY3JlYXRlTmF2SXRlbShcIkhvbWVcIiwgYXBwZW5kSG9tZSk7XG5cbiAgICAvLyBDcmVhdGUgTWVudSBuYXZpZ2F0aW9uIGl0ZW1cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gY3JlYXRlTmF2SXRlbShcIk1lbnVcIiwgYXBwZW5kTWVudSk7XG5cbiAgICAvLyBDcmVhdGUgQWJvdXQgbmF2aWdhdGlvbiBpdGVtXG4gICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBjcmVhdGVOYXZJdGVtKFwiQWJvdXRcIiwgYXBwZW5kQ29udGFjdCk7XG5cbiAgICAvLyBBcHBlbmQgbmF2aWdhdGlvbiBpdGVtcyB0byB0aGUgaGVhZGVyIGNvbnRhaW5lclxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgaGVhZGVyIGNvbnRhaW5lciB0byB0aGUgYm9keVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBoZWFkZXJDb250YWluZXI7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5hdmlnYXRpb24gaXRlbVxuZnVuY3Rpb24gY3JlYXRlTmF2SXRlbSh0ZXh0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LW5hdicpO1xuICAgIG5hdkl0ZW0uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIGN1cnJlbnROYXYobmF2SXRlbSk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5hdkl0ZW07XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHNldCB0aGUgYWN0aXZlIG5hdmlnYXRpb24gaXRlbVxuZnVuY3Rpb24gY3VycmVudE5hdihuYXZpZ2F0aW9uKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jdXJyZW50LW5hdlwiKTtcblxuICAgIG5hdi5mb3JFYWNoKChuYXZJdGVtKSA9PiB7XG4gICAgICAgIGlmIChuYXZJdGVtICE9PSBuYXZpZ2F0aW9uKSB7XG4gICAgICAgICAgICBuYXZJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gc2V0IHVwIHRoZSBsYW5kaW5nIHBhZ2Ugd2l0aCBmaXhlZCBuYXZpZ2F0aW9uIGFuZCBtYWluIGNvbnRlbnRcbmZ1bmN0aW9uIGxhbmRpbmdQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmaXhlZENvbnRlbnQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIGN1cnJlbnROYXYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LW5hdlwiKSk7XG4gICAgYXBwZW5kSG9tZSgpOyBcbn1cblxuLy8gSW5pdGlhbGl6ZSB0aGUgbGFuZGluZyBwYWdlXG5sYW5kaW5nUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9