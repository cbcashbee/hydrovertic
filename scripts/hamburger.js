// Funktion til at skifte menuens synlighed
function toggleMenu() {
  console.log("Funktionen toggleMenu blev kaldt");
  var menu = document.querySelector('.menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}


  // Et array af menu punkter og tilhørende URL'er
  var menuItems = [
  { text: "Dashboard", url: "dashboard.html" },
  { text: "Datalogging", url: "datalogging.html" },
  { text: "Indstillinger", url: "indstillinger.html" },
  { text: "Kontakt", url: "kontakt.html" }
];

// Loop gennem array for at tilføje punkter til menuen
var menuList = document.querySelector('.menu');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = document.createElement('li');
  var link = document.createElement('a');
  link.href = menuItems[i].url; // Indsæt url fra objektet
  link.textContent = menuItems[i].text;
  menuItem.appendChild(link);
  menuList.appendChild(menuItem);
}