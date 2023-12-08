// dropdown.js

function myFunction() {
    var dropdown1 = document.getElementById("myDropdown1");
    dropdown1.classList.toggle("show");
  }
  
  function myOtherFunction() {
    var dropdown2 = document.getElementById("myDropdown2");
    dropdown2.classList.toggle("show");
  }
  
  function myThirdFunction() {
    var dropdown3 = document.getElementById("myDropdown3");
    dropdown3.classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
  