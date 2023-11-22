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
export function appendMenu() {
    // Get the main container element
    const main = document.getElementById("main");
    
    // Clear existing content in the main container
    main.textContent = "";
    
    // Append the menu section to the main container
    main.appendChild(createMenu());
}
