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
function createContact(){
    
    const about = document.createElement('p');
    about.classList.add('about-us');
    about.innerText = `Benvenuti a Pizziamo, dove il cuore dell'Italia incontra l'anima della nostra cucina. Non siamo solo una pizzeria; siamo una storia, una passione e una famiglia.

    Fondata da Lorenzo Russo, un italiano di nascita con un amore per i sapori autentici, Pizziamo è la realizzazione di un sogno che dura da una vita. Cresciuto tra l'aroma del basilico fresco e il sibilo del forno per pizza, Lorenzo porta un pezzo della sua eredità in ogni fetta che serviamo.
    
    Da Pizziamo, crediamo in più che ottima pizza. Crediamo nella creazione di momenti - momenti di gioia, di connessione e di assaporare i piaceri semplici della vita. Le nostre ricette, tramandate di generazione in generazione, riflettono il calore delle cucine italiane e l'amore che mettiamo in ogni piatto.
    
    Entra in Pizziamo, e non sei solo un cliente; fai parte della nostra famiglia allargata. Unisciti a noi in un viaggio culinario in cui ogni morso racconta una storia e ogni pasto è una celebrazione di tradizione e innovazione.
    
    Grazie per far parte della nostra storia. Buon Appetito!
    
    `
    return about;
}



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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





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
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.appendContact)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMElBQTBJOztBQUUxSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQSxVQUFVLDhIQUE4SDtBQUN4SSxVQUFVLHVMQUF1TDtBQUNqTSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMzREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0E7QUFDTTs7O0FBR3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVU7QUFDbEIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFVO0FBQ2xCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVU7QUFDZDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKXtcbiAgICBcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dC11cycpO1xuICAgIGFib3V0LmlubmVyVGV4dCA9IGBCZW52ZW51dGkgYSBQaXp6aWFtbywgZG92ZSBpbCBjdW9yZSBkZWxsJ0l0YWxpYSBpbmNvbnRyYSBsJ2FuaW1hIGRlbGxhIG5vc3RyYSBjdWNpbmEuIE5vbiBzaWFtbyBzb2xvIHVuYSBwaXp6ZXJpYTsgc2lhbW8gdW5hIHN0b3JpYSwgdW5hIHBhc3Npb25lIGUgdW5hIGZhbWlnbGlhLlxuXG4gICAgRm9uZGF0YSBkYSBMb3JlbnpvIFJ1c3NvLCB1biBpdGFsaWFubyBkaSBuYXNjaXRhIGNvbiB1biBhbW9yZSBwZXIgaSBzYXBvcmkgYXV0ZW50aWNpLCBQaXp6aWFtbyDDqCBsYSByZWFsaXp6YXppb25lIGRpIHVuIHNvZ25vIGNoZSBkdXJhIGRhIHVuYSB2aXRhLiBDcmVzY2l1dG8gdHJhIGwnYXJvbWEgZGVsIGJhc2lsaWNvIGZyZXNjbyBlIGlsIHNpYmlsbyBkZWwgZm9ybm8gcGVyIHBpenphLCBMb3JlbnpvIHBvcnRhIHVuIHBlenpvIGRlbGxhIHN1YSBlcmVkaXTDoCBpbiBvZ25pIGZldHRhIGNoZSBzZXJ2aWFtby5cbiAgICBcbiAgICBEYSBQaXp6aWFtbywgY3JlZGlhbW8gaW4gcGnDuSBjaGUgb3R0aW1hIHBpenphLiBDcmVkaWFtbyBuZWxsYSBjcmVhemlvbmUgZGkgbW9tZW50aSAtIG1vbWVudGkgZGkgZ2lvaWEsIGRpIGNvbm5lc3Npb25lIGUgZGkgYXNzYXBvcmFyZSBpIHBpYWNlcmkgc2VtcGxpY2kgZGVsbGEgdml0YS4gTGUgbm9zdHJlIHJpY2V0dGUsIHRyYW1hbmRhdGUgZGkgZ2VuZXJhemlvbmUgaW4gZ2VuZXJhemlvbmUsIHJpZmxldHRvbm8gaWwgY2Fsb3JlIGRlbGxlIGN1Y2luZSBpdGFsaWFuZSBlIGwnYW1vcmUgY2hlIG1ldHRpYW1vIGluIG9nbmkgcGlhdHRvLlxuICAgIFxuICAgIEVudHJhIGluIFBpenppYW1vLCBlIG5vbiBzZWkgc29sbyB1biBjbGllbnRlOyBmYWkgcGFydGUgZGVsbGEgbm9zdHJhIGZhbWlnbGlhIGFsbGFyZ2F0YS4gVW5pc2NpdGkgYSBub2kgaW4gdW4gdmlhZ2dpbyBjdWxpbmFyaW8gaW4gY3VpIG9nbmkgbW9yc28gcmFjY29udGEgdW5hIHN0b3JpYSBlIG9nbmkgcGFzdG8gw6ggdW5hIGNlbGVicmF6aW9uZSBkaSB0cmFkaXppb25lIGUgaW5ub3ZhemlvbmUuXG4gICAgXG4gICAgR3JhemllIHBlciBmYXIgcGFydGUgZGVsbGEgbm9zdHJhIHN0b3JpYS4gQnVvbiBBcHBldGl0byFcbiAgICBcbiAgICBgXG4gICAgcmV0dXJuIGFib3V0O1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENvbnRhY3QoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn0iLCJmdW5jdGlvbiBjcmVhdGVIb21lKCl7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LW5hbWUnKTtcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiUGl6emlhbW9cIjtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRDYXRjaFBocmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICByZXN0YXVyYW50Q2F0Y2hQaHJhc2UuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1jYXRjaC1waHJhc2UnKTtcbiAgICByZXN0YXVyYW50Q2F0Y2hQaHJhc2UudGV4dENvbnRlbnQgPSBcIlJpc3RvcmFudGUgUGl6emFpb2xvIGQnRWNjZWxsZW56YVwiXG5cbiAgICBjb25zdCB1bmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1bmRlcmxpbmUuY2xhc3NMaXN0LmFkZCgndW5kZXJsaW5lJyk7XG5cbiAgICBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnREZXNjcmlwdGlvbicpO1xuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQXNzYXBvcmEgbGEgRmV0dGEsIEd1c3RhIGxhIFRyYWRpemlvbmUhXCJcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQocmVzdGF1cmFudENhdGNoUGhyYXNlKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHVuZGVybGluZSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRIb21lKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59IiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51RGF0YSA9IFtcbiAgICAgICAgeyBuYW1lOiBcIkZyZXNjYVwiLCBkZXNjcmlwdGlvbjogXCJQb21vZG9ybyBmcmVzY28sIG1venphcmVsbGEsIHBlcGVyb25pIGNvbG9yYXRpLCBwb21vZG9yaW5pIGUgYmFzaWxpY28gcHJvZnVtYXRvLlwiLCBjb3N0OiAnJDIwJyB9LFxuICAgICAgICB7IG5hbWU6IFwiUXVhdHRybyBGb3JtYWdnaVwiLCBkZXNjcmlwdGlvbjogXCJVbmEgZGVsaXppb3NhIGNvbWJpbmF6aW9uZSBkaSBxdWF0dHJvIGZvcm1hZ2dpIC0gbW96emFyZWxsYSwgZ29yZ29uem9sYSwgcGFybWlnaWFubyBlIGZvbnRpbmEgLSBzdSB1bmEgcmljY2Egc2Fsc2EgZGkgcG9tb2Rvcm8uXCIsIGNvc3Q6ICckMjAnIH0sXG4gICAgICAgIHsgbmFtZTogXCJGdW5naGkgZSBQcm9zY2l1dHRvXCIsIGRlc2NyaXB0aW9uOiBcIkd1c3RhIGlsIHNhcG9yZSBkaSBxdWVzdGEgcGl6emEgY29uIHVuIHBlcmZldHRvIGVxdWlsaWJyaW8gZGkgZnVuZ2hpIHRlcnJvc2ksIHByb3NjaXV0dG8gc2Fwb3JpdG8sIG1venphcmVsbGEgZSBzYWxzYSBkaSBwb21vZG9yby5cIiwgY29zdDogJyQyMCcgfVxuICAgIF07XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnQtbmFtZScpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJQaXp6aWFtb1wiO1xuXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCB0aGlja1VuZGVybGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaWNrVW5kZXJsaW5lLmNsYXNzTGlzdC5hZGQoJ3RoaWNrLXVuZGVybGluZScpO1xuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpY2tVbmRlcmxpbmUpO1xuXG4gICAgbWVudURhdGEuZm9yRWFjaChpdGVtRGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2Rpc2hlcycpO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW1EYXRhLm5hbWU7XG5cbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGlzaGVzLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW1EYXRhLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IHRoaW5VbmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpblVuZGVybGluZS5jbGFzc0xpc3QuYWRkKCd0aGluLXVuZGVybGluZScpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1Db3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtQ29zdC5jbGFzc0xpc3QuYWRkKCdjb3N0Jyk7XG4gICAgICAgIGl0ZW1Db3N0LnRleHRDb250ZW50ID0gaXRlbURhdGEuY29zdDtcblxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Db3N0KTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGluVW5kZXJsaW5lKTtcblxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2FwcGVuZEhvbWV9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQge2FwcGVuZE1lbnV9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQge2FwcGVuZENvbnRhY3R9IGZyb20gJy4vY29udGFjdCc7XG5cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcbiAgICByZXR1cm4gbWFpbjtcbiAgfVxuXG5mdW5jdGlvbiBmaXhlZENvbnRlbnQoKVxue1xuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGFpbmVyJyk7XG4gICAgXG5cbiAgICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1uYXYnKTtcbiAgICBob21lQ29udGFpbmVyLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIGhvbWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgY3VycmVudE5hdihob21lQ29udGFpbmVyKTtcbiAgICAgICAgYXBwZW5kSG9tZSgpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1uYXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIG1lbnVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgY3VycmVudE5hdihtZW51Q29udGFpbmVyKTtcbiAgICAgICAgYXBwZW5kTWVudSgpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LW5hdicpO1xuICAgIGFib3V0Q29udGFpbmVyLmlubmVyVGV4dCA9IFwiQWJvdXRcIjtcbiAgICBhYm91dENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBjdXJyZW50TmF2KGFib3V0Q29udGFpbmVyKTtcbiAgICAgICAgYXBwZW5kQ29udGFjdCgpO1xuICAgICAgfSk7XG5cbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcblxufVxuZnVuY3Rpb24gY3VycmVudE5hdihuYXZpZ2F0aW9uKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jdXJyZW50LW5hdlwiKTtcbiAgXG4gICAgbmF2LmZvckVhY2goKG5hdmlnYXRpb24pID0+IHtcbiAgICAgIGlmIChuYXZpZ2F0aW9uICE9PSB0aGlzKSB7XG4gICAgICAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgXG4gICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGxhbmRpbmdQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmaXhlZENvbnRlbnQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpOyAgXG4gICAgY3VycmVudE5hdihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtbmF2XCIpKTtcbiAgICBhcHBlbmRIb21lKCk7XG4gIH1cbiAgbGFuZGluZ1BhZ2UoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9