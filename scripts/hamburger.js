// Funktion til at skifte menuens synlighed
function toggleMenu() {
  console.log("Funktionen toggleMenu blev kaldt");
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show-menu');
  const menuList = document.querySelectorAll('.menu li');
  menuList.forEach(item => {
    if (menu.classList.contains('show-menu')) {
      item.style.display = 'block'; // Viser listen når menuen er vist
    } else {
      item.style.display = 'none'; // Skjuler listen når menuen ikke er vist
    }
  });
  console.log("Menuen blev vist/gemt gennem funktionen toggleMenu");
}

// Et array af menu punkter og tilhørende URL'er
const menuItems = [
  { text: "Dashboard", url: "dashboard.html" },
  { text: "Datalogging", url: "datalogging.html" },
  { text: "Indstillinger", url: "indstillinger.html" },
  { text: "Kontakt", url: "kontakt.html" }
];

// Loop gennem array for at tilføje punkter til menuen
const menuList = document.querySelector('.menu');
for (let i = 0; i < menuItems.length; i++) {
  const menuItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = menuItems[i].url; // Indsæt url fra objektet
  link.textContent = menuItems[i].text;
  console.log("Link text:", menuItems[i].text);
  menuItem.appendChild(link);
  menuList.appendChild(menuItem);
  menuItem.style.display = 'none'; // Starter med at skjule alle menu punkter
}