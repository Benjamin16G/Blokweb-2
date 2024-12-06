var deButton = document.querySelector("button");
var deCloseButton = document.querySelector("#closeButton");

// laat de menu-button luisteren naar kliks en voer dan een functie uit
deButton.onclick = toggleMenu;

// voeg in de functie een class toe aan de nav
function toggleMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("header > nav");
  // voeg een class toe aan de nav
  // en verwijder die weer bij nogmaals klikken
  // toggle
  deNav.classList.toggle("toonMenu");
}


// laat de menu-button luisteren naar kliks en voer dan een functie uit

deCloseButton.onclick = closeMenu;

// voeg in de functie een class toe aan de nav
function closeMenu() {  
    var deNav = document.querySelector("header > nav");

deNav.classList.remove("toonMenu");
 }

