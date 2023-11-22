import {appendHome} from './home';
import {appendMenu} from './menu';

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
        appendHome();
      });

    const menuContainer = document.createElement('span');
    menuContainer.classList.add('current-nav');
    menuContainer.innerText = "Menu";
    menuContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        currentNav(menuContainer);
        appendMenu();
      });

    const aboutContainer = document.createElement('span');
    aboutContainer.classList.add('current-nav');
    aboutContainer.innerText = "About";
    aboutContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        currentNav(aboutContainer);
        appendHome();
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
    appendHome();
  }
  landingPage()
