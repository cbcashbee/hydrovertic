// dropdown.js

function kulturFunction() {
  const dropdown3 = document.getElementById("kulturDropdown");
  dropdown3.classList.toggle("show");
}

function stativFunction() {
  const dropdown2 = document.getElementById("stativDropdown");
  dropdown2.classList.toggle("show");
}

function vaerdierFunction() {
    const dropdown1 = document.getElementById("vaerdierDropdown");
    dropdown1.classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
  