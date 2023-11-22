/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendHome: () => (/* binding */ appendHome)
/* harmony export */ });
function createHome(){
    const home = document.createElement('div');
    home.classList.add('home-container');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = "Pizziamo";

    const restaurantCatchPhrase = document.createElement('p');
    restaurantCatchPhrase.classList.add('restaurant-catch-phrase');
    restaurantCatchPhrase.textContent = "Ristorante Pizzaiolo d'Eccellenza"

    const underline = document.createElement('div');
    underline.classList.add('underline');

    const restaurantDescription = document.createElement('p');
    restaurantDescription.classList.add('restaurantDescription');
    restaurantDescription.textContent = "Assapora la Fetta, Gusta la Tradizione!"

    home.appendChild(restaurantName);
    home.appendChild(restaurantCatchPhrase);
    home.appendChild(underline);
    home.appendChild(restaurantDescription);

    return home;
}

function appendHome(){
    const main = document.getElementById("main");
    main.textContent = "";
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
function createMenu() {
    const menuData = [
        { name: "Fresca", description: "Pomodoro fresco, mozzarella, peperoni colorati, pomodorini e basilico profumato.", cost: '$20' },
        { name: "Quattro Formaggi", description: "Una deliziosa combinazione di quattro formaggi - mozzarella, gorgonzola, parmigiano e fontina - su una ricca salsa di pomodoro.", cost: '$20' },
        { name: "Funghi e Prosciutto", description: "Gusta il sapore di questa pizza con un perfetto equilibrio di funghi terrosi, prosciutto saporito, mozzarella e salsa di pomodoro.", cost: '$20' }
    ];

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = "Pizziamo";

    const menuTitle = document.createElement('p');
    menuTitle.classList.add('menu');
    menuTitle.textContent = "Menu";

    const thickUnderline = document.createElement('div');
    thickUnderline.classList.add('thick-underline');

    menuContainer.appendChild(restaurantName);
    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(thickUnderline);

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

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemCost);
        itemContainer.appendChild(thinUnderline);

        menuContainer.appendChild(itemContainer);
    });

    return menuContainer;
}

function appendMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
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



function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }

function fixedContent()
{
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    

    const homeContainer = document.createElement('span');
    homeContainer.classList.add('current-nav');
    homeContainer.innerText = "Home";
    homeContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        currentNav(homeContainer);
        (0,_home__WEBPACK_IMPORTED_MODULE_0__.appendHome)();
      });

    const menuContainer = document.createElement('span');
    menuContainer.classList.add('current-nav');
    menuContainer.innerText = "Menu";
    menuContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        currentNav(menuContainer);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.appendMenu)();
      });

    const aboutContainer = document.createElement('span');
    aboutContainer.classList.add('current-nav');
    aboutContainer.innerText = "About";
    aboutContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        currentNav(aboutContainer);
        (0,_home__WEBPACK_IMPORTED_MODULE_0__.appendHome)();
      });

    headerContainer.appendChild(homeContainer);
    headerContainer.appendChild(menuContainer);
    headerContainer.appendChild(aboutContainer);
    document.body.appendChild(headerContainer);

    return headerContainer;

}
function currentNav(navigation) {
    const nav = document.querySelectorAll(".current-nav");
  
    nav.forEach((navigation) => {
      if (navigation !== this) {
        navigation.classList.remove("active");
      }
    });
  
    navigation.classList.add("active");
  }
  function landingPage() {
    const content = document.getElementById("content");
    content.appendChild(fixedContent());
    content.appendChild(createMain());  
    currentNav(document.querySelector(".current-nav"));
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.appendHome)();
  }
  landingPage()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBLFVBQVUsOEhBQThIO0FBQ3hJLFVBQVUsdUxBQXVMO0FBQ2pNLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNBOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFVO0FBQ2xCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBVTtBQUNsQixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVU7QUFDbEIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVIb21lKCl7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LW5hbWUnKTtcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiUGl6emlhbW9cIjtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRDYXRjaFBocmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICByZXN0YXVyYW50Q2F0Y2hQaHJhc2UuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1jYXRjaC1waHJhc2UnKTtcbiAgICByZXN0YXVyYW50Q2F0Y2hQaHJhc2UudGV4dENvbnRlbnQgPSBcIlJpc3RvcmFudGUgUGl6emFpb2xvIGQnRWNjZWxsZW56YVwiXG5cbiAgICBjb25zdCB1bmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1bmRlcmxpbmUuY2xhc3NMaXN0LmFkZCgndW5kZXJsaW5lJyk7XG5cbiAgICBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnREZXNjcmlwdGlvbicpO1xuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQXNzYXBvcmEgbGEgRmV0dGEsIEd1c3RhIGxhIFRyYWRpemlvbmUhXCJcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQocmVzdGF1cmFudENhdGNoUGhyYXNlKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHVuZGVybGluZSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRIb21lKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59IiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51RGF0YSA9IFtcbiAgICAgICAgeyBuYW1lOiBcIkZyZXNjYVwiLCBkZXNjcmlwdGlvbjogXCJQb21vZG9ybyBmcmVzY28sIG1venphcmVsbGEsIHBlcGVyb25pIGNvbG9yYXRpLCBwb21vZG9yaW5pIGUgYmFzaWxpY28gcHJvZnVtYXRvLlwiLCBjb3N0OiAnJDIwJyB9LFxuICAgICAgICB7IG5hbWU6IFwiUXVhdHRybyBGb3JtYWdnaVwiLCBkZXNjcmlwdGlvbjogXCJVbmEgZGVsaXppb3NhIGNvbWJpbmF6aW9uZSBkaSBxdWF0dHJvIGZvcm1hZ2dpIC0gbW96emFyZWxsYSwgZ29yZ29uem9sYSwgcGFybWlnaWFubyBlIGZvbnRpbmEgLSBzdSB1bmEgcmljY2Egc2Fsc2EgZGkgcG9tb2Rvcm8uXCIsIGNvc3Q6ICckMjAnIH0sXG4gICAgICAgIHsgbmFtZTogXCJGdW5naGkgZSBQcm9zY2l1dHRvXCIsIGRlc2NyaXB0aW9uOiBcIkd1c3RhIGlsIHNhcG9yZSBkaSBxdWVzdGEgcGl6emEgY29uIHVuIHBlcmZldHRvIGVxdWlsaWJyaW8gZGkgZnVuZ2hpIHRlcnJvc2ksIHByb3NjaXV0dG8gc2Fwb3JpdG8sIG1venphcmVsbGEgZSBzYWxzYSBkaSBwb21vZG9yby5cIiwgY29zdDogJyQyMCcgfVxuICAgIF07XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnQtbmFtZScpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJQaXp6aWFtb1wiO1xuXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCB0aGlja1VuZGVybGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaWNrVW5kZXJsaW5lLmNsYXNzTGlzdC5hZGQoJ3RoaWNrLXVuZGVybGluZScpO1xuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpY2tVbmRlcmxpbmUpO1xuXG4gICAgbWVudURhdGEuZm9yRWFjaChpdGVtRGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2Rpc2hlcycpO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW1EYXRhLm5hbWU7XG5cbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGlzaGVzLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW1EYXRhLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IHRoaW5VbmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpblVuZGVybGluZS5jbGFzc0xpc3QuYWRkKCd0aGluLXVuZGVybGluZScpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1Db3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtQ29zdC5jbGFzc0xpc3QuYWRkKCdjb3N0Jyk7XG4gICAgICAgIGl0ZW1Db3N0LnRleHRDb250ZW50ID0gaXRlbURhdGEuY29zdDtcblxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Db3N0KTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGluVW5kZXJsaW5lKTtcblxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2FwcGVuZEhvbWV9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQge2FwcGVuZE1lbnV9IGZyb20gJy4vbWVudSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG4gICAgcmV0dXJuIG1haW47XG4gIH1cblxuZnVuY3Rpb24gZml4ZWRDb250ZW50KClcbntcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRhaW5lcicpO1xuICAgIFxuXG4gICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbmF2Jyk7XG4gICAgaG9tZUNvbnRhaW5lci5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgICBob21lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIGN1cnJlbnROYXYoaG9tZUNvbnRhaW5lcik7XG4gICAgICAgIGFwcGVuZEhvbWUoKTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbmF2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgICBtZW51Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIGN1cnJlbnROYXYobWVudUNvbnRhaW5lcik7XG4gICAgICAgIGFwcGVuZE1lbnUoKTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1uYXYnKTtcbiAgICBhYm91dENvbnRhaW5lci5pbm5lclRleHQgPSBcIkFib3V0XCI7XG4gICAgYWJvdXRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgY3VycmVudE5hdihhYm91dENvbnRhaW5lcik7XG4gICAgICAgIGFwcGVuZEhvbWUoKTtcbiAgICAgIH0pO1xuXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBoZWFkZXJDb250YWluZXI7XG5cbn1cbmZ1bmN0aW9uIGN1cnJlbnROYXYobmF2aWdhdGlvbikge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VycmVudC1uYXZcIik7XG4gIFxuICAgIG5hdi5mb3JFYWNoKChuYXZpZ2F0aW9uKSA9PiB7XG4gICAgICBpZiAobmF2aWdhdGlvbiAhPT0gdGhpcykge1xuICAgICAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIFxuICAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxuICBmdW5jdGlvbiBsYW5kaW5nUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZml4ZWRDb250ZW50KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTsgIFxuICAgIGN1cnJlbnROYXYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LW5hdlwiKSk7XG4gICAgYXBwZW5kSG9tZSgpO1xuICB9XG4gIGxhbmRpbmdQYWdlKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==