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
export function appendHome() {
    // Get the main container element
    const main = document.getElementById("main");
    
    // Clear existing content in the main container
    main.textContent = "";
    
    // Append the home section to the main container
    main.appendChild(createHome());
}
