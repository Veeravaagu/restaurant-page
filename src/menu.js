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

export function appendMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}
