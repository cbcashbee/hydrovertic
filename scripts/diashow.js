let slideIndex = 2;

showSlides(slideIndex);

// Angiv og vis det aktuelle slide
function currentSlide(n) {
  showSlides(slideIndex = n)
}

// Styring af slideshow og prikker
function showSlides(n) {
  let i;
  let graferne = document.getElementsByClassName("graferne");
  let prikker = document.getElementsByClassName("prik");
  if (n > graferne.length) {slideIndex = 1}
  else if (n<1) {slideIndex = graferne.length}
  for (i = 0; i < graferne.length; i++) {
    graferne[i].style.display = "none";
  }
  for (i = 0; i < prikker.length; i++) {
    prikker[i].className = prikker[i].className.replace("active", "");
  }
  graferne[slideIndex-1].style.display = "block";
  prikker[slideIndex-1].className += " active";
}

// frem/tilbage knapperne
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Hent elementer med klassen "tilbage" og tilføj et event til dem
let tilbageknap = document.getElementsByClassName("tilbage");
for (let i = 0; i < tilbageknap.length; i++) {
  tilbageknap[i].addEventListener("click", function() {
    plusSlides(-1);
  });
}

// Hent elementer med klassen "frem" og tilføj et event til dem
let fremknap = document.getElementsByClassName("frem");
for (let i = 0; i < fremknap.length; i++) {
  fremknap[i].addEventListener("click", function() {
    plusSlides(1);
  });
}

// Array med grafbilledkilder
let grafkilder = [
  "../images/grafbar.webp", "../images/graflinje.webp", "../images/grafomrade.webp"
];

console.log(grafkilder)