function createContact(){
    
}



export function appendContact(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}