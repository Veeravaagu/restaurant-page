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
export function appendContact(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}