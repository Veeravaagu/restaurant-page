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

export function appendHome(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}